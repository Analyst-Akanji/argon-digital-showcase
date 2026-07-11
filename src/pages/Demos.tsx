import { demos } from "../data/demos";
import Navbar from "../components/Navbar";

/**
 * Demo gallery — lives in Argon's own brand (blue/orange, mono headings),
 * matching the rest of argonindustries.com.ng. Reuse your existing
 * Tailwind theme colors here (swap the bg-/text- classes below for your
 * actual Argon theme tokens if they differ, e.g. bg-argon-blue).
 */
export default function Demos() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-orange-500 mb-2">
        Demos
      </p>
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">
        See what we build
      </h1>
      <p className="text-gray-600 max-w-xl mb-3">
        Live, interactive demos built for real prospects — explore one before you commit to a
        build.
      </p>
      <p className="text-sm text-gray-500 max-w-xl mb-10 border-l-2 border-orange-500 pl-3">
        Note: these demos are quick concept builds on Lovable, used purely to show prospective
        clients a feel for the product before signing on. Every real client project is built
        directly in VS Code and shipped through GitHub for production.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((demo) => (
          <div
            key={demo.id}
            className="border border-gray-200 rounded-lg p-5 flex flex-col gap-3 hover:shadow-md transition-shadow"
          >
            <div className="h-32 rounded-md bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white font-mono text-sm">
              {demo.name}
            </div>
            <h3 className="font-semibold text-lg">{demo.name}</h3>
            <p className="text-sm text-gray-600 flex-1">{demo.blurb}</p>
            <div className="flex flex-wrap gap-1.5">
              {demo.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-wide bg-gray-100 text-gray-600 rounded px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
            {demo.url ? (
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-center bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md px-4 py-2 text-sm transition-colors"
              >
                View Live Demo
              </a>
            ) : (
              <span className="mt-2 inline-block text-center bg-gray-100 text-gray-400 font-medium rounded-md px-4 py-2 text-sm">
                Demo coming soon
              </span>
            )}
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
