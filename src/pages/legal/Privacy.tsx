import { LegalLayout, Section, P, BulletList, ContactDetails } from "./LegalLayout";
import { COMPANY_NAME } from "./legalConfig";

export default function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro={`This policy explains what personal data ${COMPANY_NAME} collects through this website and our work with clients, how we use it, and the choices you have. We handle personal data in line with the Nigeria Data Protection Act 2023.`}
    >
      <Section title="1. What we collect">
        <BulletList
          items={[
            "Enquiry details: the information you give us through our enquiry form, WhatsApp or email, such as your name, contact details, business information and what you need.",
            "Project information: content, files and account access you share with us so that we can build and support your project.",
            "Payment records: amounts, dates and references for payments you make to us. We do not store your card details.",
            "Basic technical data that websites normally receive, such as browser type and pages visited.",
          ]}
        />
      </Section>

      <Section title="2. How we use it">
        <BulletList
          items={[
            "To reply to your enquiry and prepare proposals and quotes.",
            "To deliver, support and invoice the work you have engaged us for.",
            "To keep in touch about your project.",
            "To keep our website secure and working properly.",
            "To meet legal and accounting obligations.",
          ]}
        />
        <P>We do not sell your personal data.</P>
      </Section>

      <Section title="3. Who we share data with">
        <P>
          We use trusted providers for hosting, databases, email and payment processing, and they handle
          data only as needed to do their job. If you contact us on WhatsApp, that conversation is also
          subject to WhatsApp's own terms and privacy policy. We may also share data when the law requires
          it.
        </P>
      </Section>

      <Section title="4. Client projects and your customers' data">
        <P>
          When we build a website or app that collects data from your own customers, you decide what to
          collect and why, and you are responsible for notifying your customers and for having a lawful
          basis to use their data. We only access that data where needed to build, test or support your
          project.
        </P>
      </Section>

      <Section title="5. Storage, security and retention">
        <P>
          Data is stored with our cloud providers, which may host it outside Nigeria. We limit access to
          the people who need it and use reputable providers, but no system is completely secure. We keep
          enquiry and project information for as long as we need it to respond, deliver and support the
          work, and for legal or accounting reasons. You can ask us to delete your data, subject to those
          legal needs.
        </P>
      </Section>

      <Section title="6. Your rights">
        <P>Under Nigerian data protection law you may have the right to:</P>
        <BulletList
          items={[
            "ask for access to the personal data we hold about you;",
            "ask for incorrect data to be corrected;",
            "ask for your data to be deleted, where the law allows;",
            "object to or ask us to restrict certain uses of your data;",
            "complain to the Nigeria Data Protection Commission.",
          ]}
        />
        <P>To make a request, contact us using the details below.</P>
      </Section>

      <Section title="7. Cookies and browser storage">
        <P>This website uses only the browser storage it needs to work properly.</P>
      </Section>

      <Section title="8. Changes to this policy">
        <P>We may update this policy from time to time. The date at the top shows when it was last changed.</P>
      </Section>

      <Section title="9. Contact us">
        <ContactDetails />
      </Section>
    </LegalLayout>
  );
}
