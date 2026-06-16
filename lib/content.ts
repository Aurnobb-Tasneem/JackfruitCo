export const navItems = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "services", label: "SERVICES" },
  { id: "process", label: "PROCESS" },
  { id: "categories", label: "CATEGORIES" },
  { id: "contact", label: "CONTACT" },
] as const;

export const heroContent = {
  eyebrow: "UK-Based Sourcing & Manufacturing Partner",
  titleMain: "JACKFRUIT",
  titleSub: "CO.",
  tagline:
    "From first tech-pack conversation to final dispatch, we orchestrate dependable apparel production through audited, export-ready factory partners.",
  marquee: [
    "Circular Knit",
    "Knitwear",
    "Woven Apparel",
    "Denim",
    "Home Textiles",
    "Since 2000",
    "Quality Oversight",
  ],
};

export const aboutContent = {
  title: "Built on trust since 2000.",
  body: "JACKFRUIT CO. stands on over two decades of sourcing and manufacturing discipline, aligning buyers with proven factory ecosystems and execution teams that deliver with consistency.",
  established: 2000,
  experience: 25,
  markets: ["EU", "UK", "USA"],
  image: "/images/about.jpg",
};

export const whatWeDo = {
  lead: "What We Do",
  body: "We support both emerging and established labels with structured sourcing, development, and production management across knit, woven, denim, and home-textile programs.",
  supportPoints: [
    "Factory placement through established, export-ready production partners",
    "Clear order flow from enquiry, development, and approvals to shipment",
    "Dedicated buyer communication with weekly execution visibility",
    "Sampling and approval tracking to lock fit, quality, and construction",
    "Production planning, critical-path monitoring, and risk anticipation",
    "Quality assurance and shipment oversight with documented checkpoints",
  ],
  productCoverage: [
    "Circular knit garments",
    "Knitwear and sweaters",
    "Woven apparel",
    "Towels and bed linen",
  ],
};

export const servicesContent = [
  {
    title: "Sourcing & Merchandising",
    points: [
      "Global material sourcing",
      "Transparent costing architecture and negotiation",
      "Continuous execution follow-up with factory teams",
      "Disciplined shipment and handover management",
    ],
  },
  {
    title: "Design & Product Development",
    points: [
      "Buyer-specific styling support",
      "Global trend and market direction research",
      "Fabric, trim, and construction development",
      "Collection planning support by season and price architecture",
    ],
  },
  {
    title: "Production & Quality Assurance",
    points: [
      "End-to-end production monitoring",
      "In-line, mid-line, and final quality inspections",
      "Alignment to international quality benchmarks",
      "T&A scheduling discipline with milestone control",
    ],
  },
  {
    title: "Cost Re-Engineering",
    points: [
      "Design-to-cost strategy and option mapping",
      "Value-engineering routes without quality erosion",
      "Strategic factory allocation by product complexity",
      "Cost optimization while retaining brand standards",
    ],
  },
  {
    title: "Audits & Compliance",
    points: [
      "Social and ethical audit readiness support",
      "Workplace safety monitoring",
      "Regular factory vetting and compliance checks",
      "Corrective-action follow-through and closure tracking",
    ],
  },
  {
    title: "Shipping & Logistics",
    points: [
      "End-to-end logistics coordination",
      "Freight planning and booking alignment",
      "Export documentation management",
      "Shipment milestone tracking",
    ],
  },
] as const;

export const valuesContent = [
  {
    title: "Integrity",
    text: "Trust is protected through transparent communication, accurate reporting, and responsible execution.",
  },
  {
    title: "Collaboration",
    text: "We operate as a practical extension of your team across development, production, and delivery.",
  },
  {
    title: "Accountability",
    text: "Every commitment is measured, tracked, and owned from first enquiry to final shipment.",
  },
  {
    title: "Customer Focus",
    text: "Buyer goals, quality standards, and delivery windows remain central to every decision we make.",
  },
] as const;

export const partners = [
  { name: "U.S. Polo Assn.", image: "/images/cert-bsci.png" },
  { name: "Forest", image: "/images/cert-gots.png" },
  { name: "Trespass", image: "/images/cert-oeko-tex.png" },
  { name: "Chicco", image: "/images/cert-sedex.png" },
  { name: "Regatta", image: "/images/cert-wrap.png" },
] as const;

export const processStats = [
  {
    label: "Experience",
    value: 25,
    suffix: "+ years",
    description: "Founded in 2000 with sustained sourcing and production leadership across categories.",
  },
  {
    label: "Network Capacity",
    value: 600000,
    suffix: "+ pcs/month",
    description: "Network-based monthly output built to support international program demand.",
  },
  {
    label: "Minimum Order",
    value: 300,
    suffix: " pcs/style",
    description: "Flexible entry quantity starting from 300 pieces per style.",
  },
  {
    label: "AQL Inspections",
    value: 3,
    suffix: " stages",
    description: "In-line, mid-line, and final AQL checkpoints to protect consistency.",
  },
] as const;

export const productCategories = [
  {
    title: "Circular Knit Garments",
    moq: "From 300 pieces per style",
    image: "/images/category-circular-knit.jpg",
    items: [
      "T-shirts",
      "Polo shirts",
      "Sweatshirts",
      "Hoodies",
      "Rugby shirts",
      "Jog pants and jog shorts",
      "Pyjamas and knit loungewear",
    ],
  },
  {
    title: "Knitwear & Sweaters",
    moq: "From 800 pieces per style",
    image: "/images/category-knitwear.jpg",
    items: ["Sweaters", "Pullovers", "Cardigans", "Jumpers"],
  },
  {
    title: "Woven Garments",
    moq: "From 800 pieces per style",
    image: "/images/category-woven.jpg",
    items: ["Shirts and blouses", "Trousers and chinos", "Jackets", "Shorts"],
  },
  {
    title: "Denim",
    moq: "From 800 pieces per style",
    image: "/images/category-denim.jpg",
    items: ["Denim jeans", "Denim jackets", "Denim skirts and shorts"],
  },
  {
    title: "Home Textiles",
    moq: "Flexible MOQ",
    image: "/images/category-home-textiles.jpg",
    items: [
      "Towels",
      "Bed linen",
      "Bedsheets",
      "Duvet covers",
      "Pillowcases",
    ],
  },
] as const;

export const contactEmail = "ajmain@jackfruitco.co.uk";
