// One entry per project. Drives the home work list AND each /work/<slug>/ page.
// Order here = order on the site. Optional: add  year: "2024"  to show a year.
const img = (f) => "/portfolio/images/" + f;

const projects = [
  {
    slug: "fcsa",
    featured: true,
    client: "Farm Credit Services of America",
    short: "FCSA",
    sector: "Financial services",
    kind: "Company website",
    role: "Custom component development",
    deck: 'Reusable AEM components that turned the Figma designs into <span class="u">a new company website</span>.',
    chips: ["AEM", "Components", "Figma to code"],
    facts: [
      { k: "Role", v: "Custom component<br/>development" },
      { k: "Platform", v: "Adobe Experience<br/>Manager" },
      { k: "Design source", v: "Figma" },
    ],
    cover: img("fcsa.png"),
    hero: img("fcsa_desktop.png"),
    figures: [
      { src: img("fcsa_mobile.png"), cap: "Mobile layout" },
      { src: img("fcsa_devices.png"), cap: "Across devices" },
    ],
    lead: "A new company website, built from components the marketing team can run themselves.",
    overview: [
      "I collaborated closely with the design and marketing teams to develop and launch FCSA’s new company website.",
      "I built reusable web components in Adobe Experience Manager (AEM) so the Figma designs translated precisely into functional, responsive pages.",
    ],
    steps: [
      { t: "Reusable components", d: "Built a library of reusable AEM web components for the new site." },
      { t: "True to the design", d: "Translated the Figma designs precisely into functional, responsive pages." },
      { t: "Easy authoring", d: "Created custom authoring dialogs so the marketing team can manage and update content." },
    ],
    outcome: "The new site launched with a more intuitive, consistent digital presence, and the marketing team can update content without a developer. I also contributed to improving the overall user experience and site navigation.",
    link: "https://www.fcsamerica.com",
  },
  {
    slug: "kraft-heinz",
    client: "Kraft Heinz",
    short: "Kraft",
    sector: "CPG · global",
    kind: "Learning portal",
    role: "Development",
    deck: 'A personalized landing page that connects employees to <span class="u">their own training</span>.',
    chips: ["JavaScript", "Cornerstone API"],
    facts: [
      { k: "Role", v: "Development" },
      { k: "Platform", v: "Cornerstone<br/>OnDemand" },
      { k: "Stack", v: "JavaScript<br/>Cornerstone API" },
    ],
    cover: img("kraft.png"),
    hero: img("kraft_desktop.png"),
    figures: [
      { src: img("kraft_mobile.png"), cap: "Mobile layout" },
      { src: img("kraft_devices.png"), cap: "Across devices" },
    ],
    lead: "Every employee should land on the training that’s actually theirs.",
    overview: [
      "Kraft Heinz employees use Cornerstone OnDemand for training, but finding the right courses for a department and role took digging.",
      "I developed a dynamic landing page that integrates with Cornerstone OnDemand through its API, so each visitor sees navigation and training matched to them.",
    ],
    steps: [
      { t: "Connect to the API", d: "Used JavaScript to retrieve department and user data from Cornerstone OnDemand." },
      { t: "Personalize navigation", d: "Matched each employee with their assigned training and department information automatically." },
      { t: "Keep it simple", d: "Put the right resources one click away, without extra searching." },
    ],
    outcome: "Employees land on a page that already knows their department and their training, which streamlines access to relevant resources and makes the experience easier to use.",
  },
  {
    slug: "chubb",
    client: "Chubb",
    short: "Chubb",
    sector: "Insurance",
    kind: "Certification training",
    role: "Development",
    deck: 'Bringing Chubb’s certification training into <span class="u">one place</span>.',
    chips: ["Front-end", "Training"],
    facts: [
      { k: "Role", v: "Development" },
      { k: "Scope", v: "Certification<br/>training" },
    ],
    cover: img("chubb.png"),
    hero: img("chubb_desktop.png"),
    figures: [
      { src: img("chubb_mobile.png"), cap: "Mobile layout" },
      { src: img("chubb_devices.png"), cap: "Across devices" },
    ],
    lead: "Getting certified shouldn’t start with a search.",
    overview: [
      "Chubb’s certification training was spread across several places, which made it harder than it needed to be for employees to find and finish the courses they needed.",
      "I handled the front-end development that brought those resources together into a single, consistent experience.",
    ],
    steps: [
      { t: "Gather it together", d: "Consolidated the scattered training resources into one destination." },
      { t: "Make it consistent", d: "Built one predictable layout so every course is found the same way." },
      { t: "Make it easy", d: "Kept navigation clear so employees can start and complete certifications quickly." },
    ],
    outcome: "Employees have one place to find, start, and complete their certification training, with a consistent experience throughout.",
  },
  {
    slug: "cornerstone",
    client: "Cornerstone OnDemand",
    short: "Cornerstone",
    sector: "SaaS · learning",
    kind: "Template system",
    role: "Design & development",
    deck: 'Modern templates clients can <span class="u">browse and pick from</span>, built on design tokens.',
    chips: ["Figma", "Design tokens", "HTML / CSS"],
    facts: [
      { k: "Role", v: "Design &amp;<br/>development" },
      { k: "Design", v: "Figma" },
      { k: "Build", v: "HTML + CSS<br/>no JavaScript" },
      { k: "System", v: "Design tokens<br/>CSS variables" },
    ],
    cover: img("csod.png"),
    hero: img("cornerstone_desktop.png"),
    figures: [
      { src: img("cornerstone_mobile.png"), cap: "Mobile layout" },
      { src: img("csod_devices.png"), cap: "Across devices" },
    ],
    lead: "Dated templates out. A modern, pickable set in.",
    overview: [
      "Cornerstone clients were working from dated, cumbersome landing page templates. The goal was a fresh set of modern templates clients could browse and choose from.",
      "I designed the new direction in Figma, then built the templates myself.",
    ],
    steps: [
      { t: "Design the direction", d: "Created the new visual direction and UI standards in Figma." },
      { t: "Build on tokens", d: "Used design tokens and CSS variables so every template shares one system and builds much faster." },
      { t: "Work within limits", d: "Delivered everything in HTML and CSS only, within Cornerstone’s no-JavaScript constraint." },
    ],
    outcome: "Clients pick from a modern template set instead of outdated pages. Because the system runs on design tokens and CSS variables, new templates are faster to build and stay consistent.",
  },
  {
    slug: "gocanvas",
    client: "GoCanvas",
    short: "Go Canvas",
    sector: "SaaS · field services",
    kind: "Certification training",
    role: "Design & development",
    deck: 'Bringing GoCanvas certification training into <span class="u">one place</span>.',
    chips: ["Design", "Front-end", "Training"],
    facts: [
      { k: "Role", v: "Design &amp;<br/>development" },
      { k: "Scope", v: "Certification<br/>training" },
    ],
    cover: img("gocanvas.png"),
    hero: img("gocanvas-desktop.png"),
    figures: [],
    lead: "One destination for every certification.",
    overview: [
      "GoCanvas training lived in several places, which slowed employees down on the way to getting certified.",
      "I designed and built a single experience that brings their certification training together.",
    ],
    steps: [
      { t: "Gather it together", d: "Pulled the training resources into one destination." },
      { t: "Design it clearly", d: "Shaped a simple, consistent layout for finding and starting courses." },
      { t: "Build it", d: "Developed the front end to match the design." },
    ],
    outcome: "Employees have one clear place to find and complete their GoCanvas certification training.",
  },
  {
    slug: "palo-alto-networks",
    client: "Palo Alto Networks",
    short: "Palo Alto",
    sector: "Cybersecurity",
    kind: "Certification training",
    role: "Design & development",
    deck: 'Consolidating Palo Alto Networks certification training into <span class="u">one place</span>.',
    chips: ["Design", "Front-end", "Training"],
    facts: [
      { k: "Role", v: "Design &amp;<br/>development" },
      { k: "Scope", v: "Certification<br/>training" },
    ],
    cover: img("palo.png"),
    hero: img("palo_desktop.png"),
    figures: [],
    lead: "A simpler path to getting certified.",
    overview: [
      "Palo Alto Networks employees needed an easier way to reach the certifications required for their roles.",
      "I handled both the design and the front-end build, consolidating their certification training into one clear experience.",
    ],
    steps: [
      { t: "Gather it together", d: "Consolidated certification training into a single destination." },
      { t: "Design it clearly", d: "Created a clear, consistent experience for accessing courses." },
      { t: "Build it", d: "Developed the front end to match the design." },
    ],
    outcome: "Employees reach and complete the certifications they need from one place, through a consistent experience.",
  },
];

projects.forEach((p, i) => {
  p.num = "1." + String(i + 1).padStart(2, "0");
  p.url = "/work/" + p.slug + "/";
  const n = projects[(i + 1) % projects.length];
  p.next = { url: n.url || "/work/" + n.slug + "/", num: "1." + String(((i + 1) % projects.length) + 1).padStart(2, "0"), name: n.client };
});

export default projects;
