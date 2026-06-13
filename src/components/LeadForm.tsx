import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SECTORS = [
  "Fashion & Tailoring",
  "Food & Restaurant",
  "Beauty & Salon",
  "Education",
  "Real Estate",
  "Hospitality",
  "Logistics",
  "Healthcare",
  "Church/NGO",
  "Other",
];

const MANAGEMENT = [
  "WhatsApp DMs",
  "Instagram DMs",
  "Phone calls",
  "Paper records",
  "Existing website",
  "Other",
];

const BUDGETS = ["₦120k–₦180k", "₦250k–₦500k", "₦600k+", "Not sure yet"];

const inputCls =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/40";

const labelCls = "block text-sm font-medium text-white/80 mb-2";

const LeadForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      full_name: String(fd.get("full_name") || "").trim(),
      business_name: String(fd.get("business_name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      sector: String(fd.get("sector") || "") || null,
      business_description: String(fd.get("business_description") || "").trim(),
      main_challenge: String(fd.get("main_challenge") || "").trim(),
      current_management: String(fd.get("current_management") || "") || null,
      budget_range: String(fd.get("budget_range") || "") || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-orange-500" strokeWidth={1.5} />
        <h3 className="mt-6 text-3xl font-semibold text-white">Request received!</h3>
        <p className="mt-4 text-white/70 max-w-lg mx-auto">
          We've received your business details. Check your inbox for a confirmation — your custom quote will arrive within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-10 space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelCls} htmlFor="full_name">Full Name *</label>
          <input id="full_name" name="full_name" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="business_name">Business Name *</label>
          <input id="business_name" name="business_name" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Email Address *</label>
          <input id="email" name="email" type="email" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone Number *</label>
          <input id="phone" name="phone" type="tel" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="sector">Business Sector</label>
          <select id="sector" name="sector" className={inputCls}>
            <option value="">Select sector</option>
            {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls} htmlFor="budget_range">Estimated Budget Range</label>
          <select id="budget_range" name="budget_range" className={inputCls}>
            <option value="">Select budget</option>
            {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="business_description">What does your business do? *</label>
        <textarea id="business_description" name="business_description" required rows={3} className={inputCls} />
      </div>

      <div>
        <label className={labelCls} htmlFor="main_challenge">What is your biggest operational challenge right now? *</label>
        <textarea id="main_challenge" name="main_challenge" required rows={3} className={inputCls} />
      </div>

      <div>
        <label className={labelCls} htmlFor="current_management">How are you currently managing orders/bookings/customers?</label>
        <select id="current_management" name="current_management" className={inputCls}>
          <option value="">Select an option</option>
          {MANAGEMENT.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-semibold text-lg py-4 transition flex items-center justify-center gap-2"
      >
        {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Submitting...</> : "Request My Quote"}
      </button>
    </form>
  );
};

export default LeadForm;
