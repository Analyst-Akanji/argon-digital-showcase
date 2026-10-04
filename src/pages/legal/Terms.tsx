import { LegalLayout, Section, P, BulletList, ContactDetails, RouterTextLink } from "./LegalLayout";
import { COMPANY_NAME, COMPANY_LOCATION } from "./legalConfig";

export default function Terms() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro={`These terms apply to your use of the ${COMPANY_NAME} website and to any web design, web development, web app or related services we provide. ${COMPANY_NAME} is based in ${COMPANY_LOCATION}. By using this website or engaging us for a project, you agree to these terms. A signed or accepted proposal may add project-specific terms, and where they differ, the proposal applies to that project.`}
    >
      <Section title="1. Our services">
        <P>
          We design and build websites and web applications and provide related services such as
          maintenance and support. The exact scope, deliverables, timeline and price of each project are set
          out in a written proposal or quote that you accept before work begins.
        </P>
      </Section>

      <Section title="2. Proposals and changes to scope">
        <P>
          Work outside the agreed scope is treated as a change request. We will tell you the extra cost and
          timeline, and only proceed once you agree.
        </P>
      </Section>

      <Section title="3. What we need from you">
        <BulletList
          items={[
            "Provide the content, images, logos and information needed for your project, on time.",
            "Give feedback and approvals promptly. Delays on your side can move the delivery date.",
            "Make sure you own, or have permission to use, everything you supply to us (text, images, brand assets and so on).",
            "Keep the login details you share with us secure, and tell us if they change.",
          ]}
        />
      </Section>

      <Section title="4. Fees and payment">
        <P>
          Fees and the payment schedule are set out in your proposal, for example a deposit to start work
          and the balance on delivery. Work begins once the deposit is received. Prices are in Naira (₦)
          unless stated otherwise.
        </P>
        <P>
          Third-party costs such as domain names, hosting, email services, payment provider fees and paid
          tools are separate from our fees unless the proposal says otherwise. Where possible, these
          accounts are opened in your name so that you stay in control of them.
        </P>
        <P>
          Cancellations and refunds are covered in our{" "}
          <RouterTextLink to="/refund-policy">Refund &amp; Cancellation Policy</RouterTextLink>.
        </P>
      </Section>

      <Section title="5. Ownership">
        <BulletList
          items={[
            "Once you have paid in full, you own the custom design, content and code we created specifically for your project.",
            "We keep ownership of our general tools, templates, code libraries and know-how, and give you the right to use them as part of your finished project.",
            "Third-party components, fonts, images and platforms stay under their own licences.",
            "Unless you tell us in writing that you do not want this, we may show the finished project in our portfolio and marketing.",
          ]}
        />
      </Section>

      <Section title="6. Review, delivery and support">
        <P>
          We will share the work for your review at the stages described in the proposal. After launch, we
          will fix defects in what we delivered for the support period stated in the proposal. Ongoing
          changes, new features and long-term maintenance are separate work, which can be agreed as a
          retainer or a new proposal.
        </P>
      </Section>

      <Section title="7. Your responsibility for your own business">
        <P>
          You are responsible for how you use your website or app, including the accuracy of the content,
          the products or services you offer, and your own legal and tax obligations. Where your site
          collects personal data from your customers, you are responsible for how that data is used.
        </P>
      </Section>

      <Section title="8. Confidentiality">
        <P>
          We treat the non-public business information you share with us as confidential and use it only to
          deliver your project.
        </P>
      </Section>

      <Section title="9. Using this website">
        <P>
          The content on this website is provided for general information. Please do not misuse the website
          or try to disrupt it, and do not copy our content or designs without our permission.
        </P>
      </Section>

      <Section title="10. Limitation of liability">
        <P>
          To the extent the law allows, {COMPANY_NAME} is not liable for indirect or consequential losses,
          such as lost income, lost opportunities or lost data. Our total liability for any claim is limited
          to the fees you paid us for the project the claim relates to. We also cannot be responsible for
          outages or changes at third-party providers such as hosting, payment or email services. Nothing in
          these terms limits liability that cannot be limited by law.
        </P>
      </Section>

      <Section title="11. Governing law">
        <P>
          These terms are governed by the laws of the Federal Republic of Nigeria. If a disagreement arises,
          please contact us first so that we can try to resolve it informally.
        </P>
      </Section>

      <Section title="12. Changes to these terms">
        <P>
          We may update these terms from time to time. The date at the top shows when they were last
          changed.
        </P>
      </Section>

      <Section title="13. Contact us">
        <ContactDetails />
      </Section>
    </LegalLayout>
  );
}
