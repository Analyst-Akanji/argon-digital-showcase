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
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="quote" className="py-24 px-6 bg-black/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="lead-anim inline-block text-xs font-semibold tracking-[0.2em] text-orange-500 mb-4">
            WORK WITH US
          </span>
          <h2 className="lead-anim text-4xl md:text-5xl font-semibold text-white mb-6">
            Tell us about your business. Get a custom quote.
          </h2>
          <p className="lead-anim text-white/70 text-lg max-w-2xl mx-auto">
            No WhatsApp back-and-forth. No waiting. Tell us what you're building, what's slowing you down, and we'll evaluate your business and send you a tailored quote by email within 48 hours.
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
