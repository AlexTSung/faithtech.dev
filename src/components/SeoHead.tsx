import { useEffect } from "react";

type SeoHeadProps = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  /** Extra JSON-LD objects merged into a graph (Organization/Person already on index.html). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
};

export const SITE = "https://www.faithtech.dev";
export const DEFAULT_OG_IMAGE = `${SITE}/og-image.jpg`;

const JSON_LD_ID = "seo-json-ld";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function upsertJsonLd(data: Record<string, unknown> | Record<string, unknown>[] | undefined) {
  const existing = document.getElementById(JSON_LD_ID);
  if (!data) {
    existing?.remove();
    return;
  }
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };
  let el = existing as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = JSON_LD_ID;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(payload);
}

/**
 * Client-side SEO head updates for Vite SPA routes.
 * Unique title/description/canonical per page; crawlers that execute JS will see them.
 */
const SeoHead = ({
  title,
  description,
  path = "/",
  keywords,
  jsonLd,
  noindex = false,
}: SeoHeadProps) => {
  const jsonLdSerialized = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const url = `${SITE}${path === "/" ? "/" : path}`;
    document.title = title;
    upsertMeta("name", "description", description);
    if (keywords) upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);
    upsertMeta("property", "og:site_name", "FaithTech.dev");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);
    upsertCanonical(url);
    upsertJsonLd(jsonLdSerialized ? (JSON.parse(jsonLdSerialized) as Record<string, unknown> | Record<string, unknown>[]) : undefined);
  }, [title, description, path, keywords, jsonLdSerialized, noindex]);

  return null;
};

export default SeoHead;
