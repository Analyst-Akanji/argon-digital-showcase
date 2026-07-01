import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeadForm from "./LeadForm";

gsap.registerPlugin(ScrollTrigger);

const LeadIntake = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".lead-anim", {
        opacity: 0,
        y: 32,
        duration: 0.7,
        stagger: 0.08,
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="quote"
      className="section-paper py-24 md:py-32"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="lead-anim mono-label text-signal mb-4">// work_with_us</p>
          <h2 className="lead-anim text-3xl md:text-5xl font-extrabold text-ink tracking-tight mb-6">
            Tell us about your business.
            <br />
            <span className="text-ink/50">Get a custom quote.</span>
          </h2>
          <p className="lead-anim text-ink/70 text-base md:text-lg max-w-2xl leading-relaxed">
            No WhatsApp back-and-forth. No waiting. Tell us what you're
            building, what's slowing you down, and we'll evaluate your business
            and send you a tailored quote by email within 48 hours.
          </p>
        </div>
        <div className="lead-anim">
          <LeadForm />
        </div>
      </div>
    </section>
  );
};

export default LeadIntake;
