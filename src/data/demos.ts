export interface Demo {
  id: string;
  name: string;
  blurb: string;
  url: string;
  stack: string[];
  image: string;
}

/**
 * EDIT ME: add/remove as you build new Lovable demos.
 * `url` should be the live lovable.app link (or your own domain once launched).
 */
export const demos: Demo[] = [
  {
    id: "corebymo",
    name: "Corebymo",
    blurb: "Tailored trousers brand storefront concept",
    url: "https://corebymo-tailored-tales.lovable.app",
    stack: ["React"],
    image: "/demo-screenshots/corebymo.png",
  },
  {
    id: "khadz-t",
    name: "Khadz and T's Rooftop",
    blurb: "Premium rooftop bistro booking & menu showcase",
    url: "https://sky-high-render.lovable.app",
    stack: ["React", "Supabase"],
    image: "/demo-screenshots/khadz-t.png",
  },
  {
    id: "amoke",
    name: "Amoke Oge Foods",
    blurb: "Multi-branch food delivery ordering experience",
    url: "https://amoke-taste-hub.lovable.app",
    stack: ["React", "Supabase"],
    image: "/demo-screenshots/amoke.png",
  },
  {
    id: "1506-cafe",
    name: "15'06 Cafe",
    blurb: "Golden Ripple Hour — cafe shop concept demo",
    url: "https://golden-ripple-lounge.lovable.app",
    stack: ["React"],
    image: "/demo-screenshots/1506-cafe.png",
  },
];
