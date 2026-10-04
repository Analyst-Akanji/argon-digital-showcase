import { LegalLayout, Section, P, ContactDetails, RouterTextLink } from "./LegalLayout";

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      intro="This policy explains how cancellations and refunds work for projects with Argon Industries. If your proposal says something different for your project, the proposal applies."
    >
      <div
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          padding: "18px 20px",
          marginBottom: "32px",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            color: "#F5F3EE",
            margin: "0 0 6px",
          }}
        >
          In short
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            lineHeight: 1.7,
            color: "rgba(245,243,238,0.72)",
            margin: 0,
          }}
        >
          Your deposit secures your project slot and pays for the start of the work. You can cancel at any
          time. You pay for the work already done, and we refund anything you paid beyond that.
        </p>
      </div>

      <Section title="1. Deposits">
        <P>
          Work begins once your deposit is received. If you cancel before we have started any work, we will
          refund your deposit in full. Once work has started, the deposit covers the time already spent and
          is handled as described in section 2.
        </P>
      </Section>

      <Section title="2. Cancelling during a project">
        <P>
          You can cancel by telling us in writing, including by WhatsApp or email. We will calculate the
          work completed up to that point based on the project stages in your proposal. You pay for that
          completed work. If you have paid more than that amount, we refund the difference. If you have paid
          less, we will tell you the balance due, and we hand over the work completed to that point once it
          is paid.
        </P>
      </Section>

      <Section title="3. After delivery">
        <P>
          Once the project has been delivered and approved, fees are not refundable. If something we
          delivered does not work as agreed, we will fix it during the support period in your proposal.
        </P>
      </Section>

      <Section title="4. If we cannot deliver">
        <P>
          If we are unable to deliver the agreed scope for reasons on our side, we will refund the fees for
          the part that was not delivered.
        </P>
      </Section>

      <Section title="5. Third-party costs">
        <P>
          Costs paid to other companies on your behalf, such as domain names, hosting and paid tools, are
          not refundable by us once purchased. Those providers' own refund policies apply.
        </P>
      </Section>

      <Section title="6. Retainers and ongoing support">
        <P>
          Retainers are paid in advance for each period. You can stop a retainer by telling us before the
          next period begins. We do not refund a period that has already started.
        </P>
      </Section>

      <Section title="7. How to ask for a refund">
        <P>
          Contact us with your name, the project, and the payment details. We aim to reply within 3 working
          days. Approved refunds are returned to you by bank transfer or the original payment method, and
          may take several working days to show, depending on your bank.
        </P>
        <P>
          See also our <RouterTextLink to="/terms">Terms of Service</RouterTextLink>.
        </P>
      </Section>

      <Section title="8. Contact us">
        <ContactDetails />
      </Section>
    </LegalLayout>
  );
}
