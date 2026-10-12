import { useEffect, useState, FormEvent, Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import type { Session, SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, LogOut } from "lucide-react";
import QuotePanel from "@/components/admin/QuotePanel";

// New tables/columns (admins, quotes, reference...) aren't in the generated types yet.
// Remove this cast after regenerating them.
const sb = supabase as unknown as SupabaseClient;

type Lead = {
  id: string;
  reference: string | null;
  full_name: string;
  business_name: string;
  email: string;
  phone: string;
  sector: string | null;
  business_description: string;
  main_challenge: string;
  current_management: string | null;
  budget_range: string | null;
  status: string;
  notes: string | null;
  created_at: string;
  admin_alert_sent_at: string | null;
  client_confirmation_sent_at: string | null;
};

const STATUSES = ["new", "contacted", "quoted", "converted", "lost"];
const STATUS_COLOR: Record<string, string> = {
  new: "text-sky-300",
  contacted: "text-amber-300",
  quoted: "text-violet-300",
  converted: "text-emerald-300",
  lost: "text-white/40",
};

const AdminLeads = () => {
  const [params] = useSearchParams();
  const [session, setSession] = useState<Session | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(params.get("lead"));

  useEffect(() => {
    sb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setAuthChecked(true);
    });
    const { data: sub } = sb.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) {
      setIsAdmin(false);
      setLeads([]);
      return;
    }
    setIsAdmin(null);
    sb.from("admins")
      .select("user_id")
      .maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  useEffect(() => {
    if (isAdmin) loadLeads();
  }, [isAdmin]);

  const loadLeads = async (silent = false) => {
    if (!silent) setLoading(true);
    const { data, error } = await sb.from("leads").select("*").order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error("Failed to load leads");
      return;
    }
    setLeads((data || []) as Lead[]);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setSigningIn(true);
    const { error } = await sb.auth.signInWithPassword({ email: email.trim(), password });
    setSigningIn(false);
    if (error) toast.error(error.message);
  };

  const handleLogout = async () => {
    await sb.auth.signOut();
    setPassword("");
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await sb.from("leads").update({ status }).eq("id", id);
    if (error) return toast.error("Failed to update status");
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    toast.success("Status updated");
  };

  const updateNotes = async (id: string, notes: string) => {
    const { error } = await sb.from("leads").update({ notes }).eq("id", id);
    if (error) return toast.error("Failed to save notes");
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, notes } : l)));
    toast.success("Notes saved");
  };

  const resendEmails = async (id: string) => {
    const { data, error } = await sb.functions.invoke("lead-email-notification", { body: { lead_id: id } });
    if (error) return toast.error("Could not send the emails");
    const failed = Object.values((data?.result ?? {}) as Record<string, string>).some((r) => r.startsWith("failed"));
    if (failed) toast.error("An email failed again. Check your Resend settings.");
    else toast.success("Emails sent");
    loadLeads(true);
  };

  // ---------- gates ----------
  if (!authChecked || (session && isAdmin === null)) {
    return (
      <div className="admin-page min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#2563EB]" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="admin-page min-h-screen flex items-center justify-center px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 space-y-5"
        >
          <div>
            <h1 className="text-2xl font-semibold text-white">Argon Admin</h1>
            <p className="text-white/60 text-sm mt-1">Sign in to view leads and send quotes.</p>
          </div>
          <input
            type="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/40"
          />
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/40"
          />
          <button
            type="submit"
            disabled={signingIn}
            className="w-full rounded-lg bg-[#2563EB] hover:bg-[#1d4ed8] disabled:opacity-70 text-white font-semibold py-3 transition"
          >
            {signingIn ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="admin-page min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 space-y-4 text-center">
          <h1 className="text-xl font-semibold text-white">No admin access</h1>
          <p className="text-white/60 text-sm">
            {session.user.email} isn't on the admin list. Sign in with a different account.
          </p>
          <button onClick={handleLogout} className="text-[#2563EB] text-sm font-medium">
            Sign out
          </button>
        </div>
      </div>
    );
  }

  // ---------- dashboard ----------
  return (
    <div className="admin-page min-h-screen px-4 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold text-white">Leads</h1>
            <p className="text-white/60 text-sm mt-1">{leads.length} total</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm border border-white/10 rounded-lg px-4 py-2"
          >
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-[#2563EB]" />
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-white/5 text-white/60 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="text-left px-4 py-3">Date</th>
                    <th className="text-left px-4 py-3">Ref</th>
                    <th className="text-left px-4 py-3">Name</th>
                    <th className="text-left px-4 py-3">Business</th>
                    <th className="text-left px-4 py-3">Sector</th>
                    <th className="text-left px-4 py-3">Budget</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-left px-4 py-3">Details</th>
                  </tr>
                </thead>
                <tbody className="text-white/90">
                  {leads.map((lead) => {
                    const emailsPending =
                      (!lead.client_confirmation_sent_at || !lead.admin_alert_sent_at) &&
                      Date.now() - new Date(lead.created_at).getTime() > 120_000;
                    return (
                      <Fragment key={lead.id}>
                        <tr
                          className="border-t border-white/10 hover:bg-white/5 cursor-pointer"
                          onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
                        >
                          <td className="px-4 py-3 whitespace-nowrap text-white/70">
                            {new Date(lead.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-white/70">{lead.reference || "—"}</td>
                          <td className="px-4 py-3 text-white font-medium">{lead.full_name}</td>
                          <td className="px-4 py-3 text-white">{lead.business_name}</td>
                          <td className="px-4 py-3 text-white/70">{lead.sector || "—"}</td>
                          <td className="px-4 py-3 whitespace-nowrap text-white/70">{lead.budget_range || "—"}</td>
                          <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                            <select
                              value={lead.status}
                              onChange={(e) => updateStatus(lead.id, e.target.value)}
                              className={`rounded-md border border-white/10 bg-black/40 px-2 py-1 text-xs font-medium focus:border-[#2563EB] outline-none ${STATUS_COLOR[lead.status] ?? "text-white"}`}
                            >
                              {STATUSES.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </td>
                          <td className="px-4 py-3 text-[#2563EB] text-xs font-medium">
                            {expanded === lead.id ? "Hide ▲" : "View ▼"}
                          </td>
                        </tr>
                        {expanded === lead.id && (
                          <tr className="bg-black/30 border-t border-white/10">
                            <td colSpan={8} className="px-4 py-5">
                              {emailsPending && (
                                <div className="mb-5 flex items-center justify-between gap-4 rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-3 text-sm text-amber-200">
                                  <span>
                                    {!lead.client_confirmation_sent_at
                                      ? "The confirmation email to this client hasn't gone out."
                                      : "Your new-request alert hasn't gone out."}
                                  </span>
                                  <button
                                    onClick={() => resendEmails(lead.id)}
                                    className="rounded-md bg-amber-300 text-black font-medium px-3 py-1.5 text-xs"
                                  >
                                    Send now
                                  </button>
                                </div>
                              )}
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3 text-sm">
                                  <div>
                                    <span className="text-white/50 text-xs uppercase tracking-wide">Email</span>
                                    <p className="text-white mt-1">{lead.email}</p>
                                  </div>
                                  <div>
                                    <span className="text-white/50 text-xs uppercase tracking-wide">Phone</span>
                                    <p className="text-white mt-1">{lead.phone}</p>
                                  </div>
                                  <div>
                                    <span className="text-white/50 text-xs uppercase tracking-wide">Currently managing via</span>
                                    <p className="text-white mt-1">{lead.current_management || "—"}</p>
                                  </div>
                                  <div>
                                    <span className="text-white/50 text-xs uppercase tracking-wide">What the business does</span>
                                    <p className="text-white mt-1">{lead.business_description}</p>
                                  </div>
                                  <div>
                                    <span className="text-white/50 text-xs uppercase tracking-wide">Main challenge</span>
                                    <p className="text-white mt-1">{lead.main_challenge}</p>
                                  </div>
                                </div>
                                <NotesEditor initial={lead.notes || ""} onSave={(v) => updateNotes(lead.id, v)} />
                              </div>
                              <QuotePanel lead={lead} onSent={() => loadLeads(true)} />
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    );
                  })}
                  {leads.length === 0 && (
                    <tr>
                      <td colSpan={8} className="px-4 py-10 text-center text-white/50">
                        No leads yet. Requests from the website will show up here.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const NotesEditor = ({ initial, onSave }: { initial: string; onSave: (v: string) => void }) => {
  const [val, setVal] = useState(initial);
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">Notes</label>
      <textarea
        value={val}
        onChange={(e) => setVal(e.target.value)}
        rows={5}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white text-sm outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/40 placeholder:text-white/30"
        placeholder="Add your notes about this lead here..."
      />
      <button
        onClick={() => onSave(val)}
        className="mt-2 rounded-md bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-medium px-4 py-2 transition"
      >
        Save notes
      </button>
    </div>
  );
};

export default AdminLeads;
