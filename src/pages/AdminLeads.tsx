import { useEffect, useState, FormEvent, Fragment } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, LogOut } from "lucide-react";

type Lead = {
  id: string;
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
};

const STATUSES = ["new", "contacted", "quoted", "converted", "lost"];
const SESSION_KEY = "argon_admin_auth";

const AdminLeads = () => {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") setAuthed(true);
  }, []);

  useEffect(() => {
    if (authed) loadLeads();
  }, [authed]);

  const loadLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      toast.error("Failed to load leads");
      return;
    }
    setLeads((data || []) as Lead[]);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const expected = import.meta.env.VITE_ADMIN_PASSWORD;
    if (!expected) {
      toast.error("Admin password not configured. Set VITE_ADMIN_PASSWORD.");
      return;
    }
    if (password === expected) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setAuthed(true);
    } else {
      toast.error("Incorrect password");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setPassword("");
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) return toast.error("Failed to update status");
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    toast.success("Status updated");
  };

  const updateNotes = async (id: string, notes: string) => {
    const { error } = await supabase.from("leads").update({ notes } as never).eq("id", id);
    if (error) return toast.error("Failed to save notes");
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, notes } : l)));
    toast.success("Notes saved");
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 space-y-6"
        >
          <div>
            <h1 className="text-2xl font-semibold text-white">Argon Admin</h1>
            <p className="text-white/60 text-sm mt-1">Enter password to view leads.</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#E8623D] focus:ring-2 focus:ring-[#E8623D]/40"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-[#E8623D] hover:bg-[#c9502e] text-white font-semibold py-3 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-8 py-10">
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
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-[#E8623D]" />
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-white/5 text-white/60 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="text-left px-4 py-3">Date</th>
                    <th className="text-left px-4 py-3">Name</th>
                    <th className="text-left px-4 py-3">Business</th>
                    <th className="text-left px-4 py-3">Sector</th>
                    <th className="text-left px-4 py-3">Budget</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-left px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-white/90">
                  {leads.map((lead) => (
                    <Fragment key={lead.id}>
                      <tr
                        className="border-t border-white/10 hover:bg-white/5 cursor-pointer"
                        onClick={() => setExpanded(expanded === lead.id ? null : lead.id)}
                      >
                        <td className="px-4 py-3 whitespace-nowrap">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">{lead.full_name}</td>
                        <td className="px-4 py-3">{lead.business_name}</td>
                        <td className="px-4 py-3">{lead.sector || "—"}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{lead.budget_range || "—"}</td>
                        <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={lead.status}
                            onChange={(e) => updateStatus(lead.id, e.target.value)}
                            className="rounded-md border border-white/10 bg-black/40 text-white px-2 py-1 text-xs focus:border-[#E8623D] outline-none"
                          >
                            {STATUSES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3 text-white/50 text-xs">
                          {expanded === lead.id ? "Hide" : "View"}
                        </td>
                      </tr>
                      {expanded === lead.id && (
                        <tr className="bg-black/30 border-t border-white/10">
                          <td colSpan={7} className="px-4 py-5">
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2 text-sm">
                                <div><span className="text-white/50">Email:</span> {lead.email}</div>
                                <div><span className="text-white/50">Phone:</span> {lead.phone}</div>
                                <div><span className="text-white/50">Currently managing via:</span> {lead.current_management || "—"}</div>
                                <div className="pt-2"><span className="text-white/50">Business:</span><br/>{lead.business_description}</div>
                                <div className="pt-2"><span className="text-white/50">Main challenge:</span><br/>{lead.main_challenge}</div>
                              </div>
                              <NotesEditor
                                initial={lead.notes || ""}
                                onSave={(v) => updateNotes(lead.id, v)}
                              />
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                  {leads.length === 0 && (
                    <tr><td colSpan={7} className="px-4 py-10 text-center text-white/50">No leads yet.</td></tr>
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
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white text-sm outline-none focus:border-[#E8623D] focus:ring-2 focus:ring-[#E8623D]/40"
      />
      <button
        onClick={() => onSave(val)}
        className="mt-2 rounded-md bg-[#E8623D] hover:bg-[#c9502e] text-white text-sm font-medium px-4 py-2 transition"
      >
        Save notes
      </button>
    </div>
  );
};

export default AdminLeads;
