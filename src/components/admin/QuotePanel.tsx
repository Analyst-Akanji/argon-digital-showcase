import { useEffect, useMemo, useState } from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Plus, Trash2 } from "lucide-react";

// `quotes` isn't in the generated types yet. Remove this cast after regenerating them.
const sb = supabase as unknown as SupabaseClient;

type Item = { description: string; quantity: string; unit_price: string };
type SentQuote = {
  id: string;
  reference: string;
  total_amount: number;
  status: string;
  sent_at: string | null;
  created_at: string;
};
type Props = {
  lead: { id: string; full_name: string; email: string };
  onSent: () => void;
};

const naira = (n: number) =>
  "₦" + new Intl.NumberFormat("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

const inDays = (d: number) => {
  const t = new Date();
  t.setDate(t.getDate() + d);
  return t.toISOString().slice(0, 10);
};

const emptyItem = (): Item => ({ description: "", quantity: "1", unit_price: "" });
const price = (s: string) => Number(s.replace(/,/g, "")) || 0;

const fieldCls =
  "w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/40 placeholder:text-white/30";
const labelCls = "block text-xs uppercase tracking-wider text-white/50 mb-1";

async function errorMessage(error: any): Promise<string> {
  try {
    const body = await error?.context?.json?.();
    if (body?.error) return body.error;
  } catch {
    /* fall through */
  }
  return error?.message ?? "Could not send the quote";
}

const QuotePanel = ({ lead, onSent }: Props) => {
  const [items, setItems] = useState<Item[]>([emptyItem()]);
  const [validUntil, setValidUntil] = useState(inDays(14));
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(false);
  const [sending, setSending] = useState(false);
  const [history, setHistory] = useState<SentQuote[]>([]);

  const total = useMemo(
    () => items.reduce((s, i) => s + (Number(i.quantity) || 0) * price(i.unit_price), 0),
    [items],
  );

  const loadHistory = async () => {
    const { data } = await sb
      .from("quotes")
      .select("id, reference, total_amount, status, sent_at, created_at")
      .eq("lead_id", lead.id)
      .order("created_at", { ascending: false });
    setHistory((data || []) as SentQuote[]);
  };

  useEffect(() => {
    loadHistory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lead.id]);

  const setItem = (idx: number, patch: Partial<Item>) =>
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, ...patch } : it)));

  const problem = (): string | null => {
    for (const i of items) {
      if (!i.description.trim()) return "Every line needs a description.";
      const q = Number(i.quantity);
      if (!Number.isInteger(q) || q < 1) return "Quantity must be a whole number, 1 or more.";
      if (i.unit_price.trim() === "" || price(i.unit_price) < 0) return "Every line needs a unit price.";
    }
    if (total <= 0) return "The total must be greater than zero.";
    return null;
  };

  const goToPreview = () => {
    const p = problem();
    if (p) return toast.error(p);
    setPreview(true);
  };

  const send = async () => {
    setSending(true);
    const { error } = await sb.functions.invoke("send-quote", {
      body: {
        lead_id: lead.id,
        line_items: items.map((i) => ({
          description: i.description.trim(),
          quantity: Number(i.quantity),
          unit_price: price(i.unit_price),
        })),
        valid_until: validUntil || null,
        message: message.trim() || null,
      },
    });
    setSending(false);
    if (error) {
      toast.error(await errorMessage(error));
      loadHistory();
      return;
    }
    toast.success(`Quote sent to ${lead.email}`);
    setItems([emptyItem()]);
    setMessage("");
    setValidUntil(inDays(14));
    setPreview(false);
    loadHistory();
    onSent();
  };

  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-white font-semibold">Send a quote to {lead.full_name}</h3>

      {history.length > 0 && (
        <ul className="mt-3 space-y-1 text-sm text-white/70">
          {history.map((q) => (
            <li key={q.id}>
              {q.reference} · {naira(Number(q.total_amount))} ·{" "}
              {q.status === "sent" && q.sent_at
                ? `sent ${new Date(q.sent_at).toLocaleString()}`
                : q.status === "failed"
                  ? "email failed"
                  : q.status}
            </li>
          ))}
        </ul>
      )}

      {!preview ? (
        <div className="mt-5 space-y-4">
          <div className="space-y-2">
            <div className="hidden sm:grid grid-cols-[1fr_80px_130px_110px_32px] gap-2 text-xs uppercase tracking-wider text-white/50">
              <span>Item</span>
              <span>Qty</span>
              <span>Unit price (₦)</span>
              <span className="text-right">Amount</span>
              <span />
            </div>
            {items.map((it, idx) => (
              <div key={idx} className="grid grid-cols-2 sm:grid-cols-[1fr_80px_130px_110px_32px] gap-2 items-center">
                <input
                  className={`${fieldCls} col-span-2 sm:col-span-1`}
                  placeholder="e.g. Booking system + admin dashboard"
                  value={it.description}
                  onChange={(e) => setItem(idx, { description: e.target.value })}
                />
                <input
                  className={fieldCls}
                  inputMode="numeric"
                  aria-label="Quantity"
                  value={it.quantity}
                  onChange={(e) => setItem(idx, { quantity: e.target.value })}
                />
                <input
                  className={fieldCls}
                  inputMode="decimal"
                  aria-label="Unit price in naira"
                  placeholder="0.00"
                  value={it.unit_price}
                  onChange={(e) => setItem(idx, { unit_price: e.target.value })}
                />
                <span className="text-right text-sm text-white/80">
                  {naira((Number(it.quantity) || 0) * price(it.unit_price))}
                </span>
                <button
                  type="button"
                  aria-label="Remove line"
                  disabled={items.length === 1}
                  onClick={() => setItems((prev) => prev.filter((_, i) => i !== idx))}
                  className="text-white/50 hover:text-white disabled:opacity-30"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setItems((prev) => [...prev, emptyItem()])}
              className="flex items-center gap-1 text-sm text-[#2563EB] hover:text-white"
            >
              <Plus className="h-4 w-4" /> Add line
            </button>
          </div>

          <div className="grid sm:grid-cols-[200px_1fr] gap-4">
            <div>
              <label className={labelCls} htmlFor={`valid-${lead.id}`}>Valid until</label>
              <input
                id={`valid-${lead.id}`}
                type="date"
                className={fieldCls}
                value={validUntil}
                min={inDays(0)}
                onChange={(e) => setValidUntil(e.target.value)}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor={`msg-${lead.id}`}>Message to the client (optional)</label>
              <textarea
                id={`msg-${lead.id}`}
                rows={3}
                className={fieldCls}
                placeholder="Scope notes, timeline, payment terms..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-white">
              Total: <span className="font-semibold">{naira(total)}</span>
            </p>
            <button
              type="button"
              onClick={goToPreview}
              className="rounded-md bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-medium px-4 py-2 transition"
            >
              Preview quote
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          <p className="text-sm text-white/60">
            This goes to <span className="text-white">{lead.email}</span>. Replies come back to your inbox.
          </p>
          <div className="rounded-lg bg-white text-[#0F1419] p-5 text-sm">
            {message.trim() && <p className="mb-4 rounded bg-[#f4f6f8] p-3 whitespace-pre-wrap">{message.trim()}</p>}
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs text-gray-500 border-b border-gray-300">
                  <th className="py-2 font-medium">Item</th>
                  <th className="py-2 text-center font-medium">Qty</th>
                  <th className="py-2 text-right font-medium">Unit price</th>
                  <th className="py-2 text-right font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((i, idx) => (
                  <tr key={idx} className="border-b border-gray-200">
                    <td className="py-2">{i.description}</td>
                    <td className="py-2 text-center">{i.quantity}</td>
                    <td className="py-2 text-right">{naira(price(i.unit_price))}</td>
                    <td className="py-2 text-right">{naira((Number(i.quantity) || 0) * price(i.unit_price))}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="pt-3 text-right font-semibold">Total</td>
                  <td className="pt-3 text-right font-semibold">{naira(total)}</td>
                </tr>
              </tfoot>
            </table>
            {validUntil && (
              <p className="mt-3 text-xs text-gray-500">
                Valid until {new Date(validUntil + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPreview(false)}
              disabled={sending}
              className="rounded-md border border-white/10 text-white/80 hover:text-white text-sm px-4 py-2"
            >
              Back to editing
            </button>
            <button
              type="button"
              onClick={send}
              disabled={sending}
              className="flex items-center gap-2 rounded-md bg-[#2563EB] hover:bg-[#1d4ed8] disabled:opacity-70 text-white text-sm font-medium px-4 py-2 transition"
            >
              {sending && <Loader2 className="h-4 w-4 animate-spin" />}
              {sending ? "Sending..." : "Send quote"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotePanel;
