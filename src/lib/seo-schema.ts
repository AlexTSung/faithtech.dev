import { SITE } from "@/components/SeoHead";
import type { AudiencePage } from "@/data/audiences";

const LINKEDIN = "https://www.linkedin.com/in/alextimsung";

export const personSchema = {
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Alex Sung",
  url: SITE,
  jobTitle: "Head of Product, Partners at YouVersion; FaithTech product consultant",
  description:
    "Product leader and consultant helping churches, non-profits, and FaithTech teams with digital strategy and product leadership.",
  worksFor: {
    "@type": "Organization",
    name: "YouVersion",
  },
  sameAs: [LINKEDIN],
};

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "FaithTech.dev",
  url: SITE,
  logo: `${SITE}/favicon.svg`,
  sameAs: [LINKEDIN],
  founder: { "@id": `${SITE}/#person` },
};

export const professionalServiceSchema = {
  "@type": "ProfessionalService",
  "@id": `${SITE}/#service`,
  name: "FaithTech.dev Consulting",
  url: SITE,
  image: `${SITE}/og-image.jpg`,
  description:
    "Personalized digital strategy and product consulting for churches and pastors, non-profit directors, and FaithTech leaders.",
  provider: { "@id": `${SITE}/#person` },
  areaServed: "Worldwide",
  serviceType: [
    "Church technology consulting",
    "Non-profit product consulting",
    "FaithTech product consulting",
    "Ministry digital strategy",
  ],
};

export function homepageJsonLd() {
  return [organizationSchema, personSchema, professionalServiceSchema];
}

export function audienceJsonLd(audience: AudiencePage) {
  return [
    personSchema,
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}${audience.path}#service`,
      name: audience.metaTitle.replace(/\s*\|\s*FaithTech\.dev\s*$/, ""),
      url: `${SITE}${audience.path}`,
      image: `${SITE}/og-image.jpg`,
      description: audience.metaDescription,
      provider: { "@id": `${SITE}/#person` },
      areaServed: "Worldwide",
      serviceType: audience.metaTitle.split("|")[0].trim(),
      mainEntityOfPage: `${SITE}${audience.path}`,
    },
  ];
}

export const HOME_KEYWORDS =
  "church technology consultant, ministry product strategy, faith tech consultant, product consultant for churches, nonprofit product consultant, fractional CPO nonprofit, church digital transformation, ministry digital strategy, FaithTech product consulting";

export const audienceKeywords: Record<string, string> = {
  churches:
    "church technology consultant, church digital strategy, ministry technology consulting, product consultant for churches, church digital transformation, pastoral tech strategy",
  nonprofits:
    "nonprofit product consultant, ministry digital strategy, non-profit digital strategy, fractional CPO nonprofit, faith-based nonprofit consulting",
  faithtech:
    "faith tech consultant, FaithTech product consulting, ministry product strategy, AI product consultant faith, B2B2C product leader ministry",
};
