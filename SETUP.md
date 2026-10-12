# Argon quotes: setup (leads + quotes + emails)

Files: `supabase/migrations/20261012120000_leads_security_and_quotes.sql`, functions `notify-new-lead` and `send-quote`
(shared code in `_shared/`), React `src/components/admin/QuotePanel.tsx` and `src/pages/AdminLeads.tsx`.

1. **Migration**: run it in the SQL editor (or `supabase db push`). Create your user in Authentication > Users, then run the
   commented INSERT at the bottom of the migration (with your email) to make yourself an admin.
2. **Resend**: add your Argon domain, add the SPF/DKIM records it gives you, create an API key.
3. **Secrets**:
       supabase secrets set RESEND_API_KEY=re_xxx
       supabase secrets set FROM_EMAIL="Argon Industries <quotes@yourdomain.com>"
       supabase secrets set ADMIN_EMAIL=you@yourdomain.com
       supabase secrets set ADMIN_DASHBOARD_URL=https://yourdomain.com/admin
       supabase secrets set WEBHOOK_SECRET=<long-random-string>
   (Optional: REPLY_TO_EMAIL if replies should go somewhere other than ADMIN_EMAIL.)
4. **Deploy** (`supabase/config.toml` already sets verify_jwt per function):
       supabase functions deploy notify-new-lead
       supabase functions deploy send-quote
5. **Database webhook** (the trigger): Dashboard > Database > Webhooks > Create. Table `leads`, event Insert, HTTP Request POST to
   `https://<project-ref>.supabase.co/functions/v1/notify-new-lead`, header `x-webhook-secret` = your WEBHOOK_SECRET.
6. **Test**: submit the public form. You get the alert, the client gets a copy with reference ARG-1001, then send a quote from the dashboard.
