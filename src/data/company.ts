export type BusinessKey = "nehan" | "cis" | "both";

export const companies = {
  nehan: {
    name: "Nehan Enterprises",
    tagline: "Deals in all kind of Manufacturing Making and Packing Machinery & Automation & Spare Parts",
    experience: "17+ Years of Engineering Excellence",
    phones: ["+92 342 8506 337", "+92 311 027 0688"],
    emails: ["nehanenterprises31@gmail.com"],
    people: [
      { name: "SM. YOUSUF", role: "Director, Nehan Enterprises" },
      { name: "SM. NEHAN", role: "CEO, Nehan Enterprises" },
    ],
  },
  cis: {
    name: "Crescent Industrial Services",
    tagline: "Precision-engineered spare parts for tobacco machinery",
    experience: "40 Years of Tobacco Industry Experience",
    phones: ["+92 323 481 4559", "+92 300 477 6691"],
    emails: ["crescentindservices1982@gmail.com", "ta.nizam52@gmail.com"],
    people: [
      { name: "TAYYAB HASSAN", role: "Director, Crescent Industrial Services" },
      { name: "UZAIR TAYYAB", role: "CEO, Crescent Industrial Services" },
    ],
  },
} as const;

export const brands = ["HAUNI", "MOLINS", "G.D", "FOCKE", "SASIB", "SCHMERMUND"];

export const mission =
  "To deliver reliable machinery and precision-engineered spare parts that enhance production efficiency, maintain consistent quality, and support the evolving operational needs of our customers through innovation, technical expertise, and customer-focused service.";

export const vision =
  "To become a trusted global partner in tobacco machinery and precision spare-parts manufacturing, recognized for engineering excellence, technological advancement, product reliability, and long-term customer relationships.";

export const coreValues = [
  "Quality & Reliability",
  "Customer Commitment",
  "Continuous Improvement",
  "Engineering Excellence",
  "Innovation & Technology",
];

export const materials = [
  "Tungsten carbide",
  "High-speed steel (HSS)",
  "Tool steel",
  "Zirconia ceramics",
  "Food-grade polymers",
];

/** Email recipients for an inquiry, based on the business the customer selected. */
export function recipientsFor(business: BusinessKey): string[] {
  if (business === "nehan") return [...companies.nehan.emails];
  if (business === "cis") return [...companies.cis.emails];
  return [...companies.nehan.emails, ...companies.cis.emails];
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}
