import { useEffect } from "react";

type SeoHeadProps = {
  title: string;
  description: string;
  path?: string;
};

const SITE = "https://faithtech.dev";

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

/**
 * Client-side SEO head updates for Vite SPA routes.
 * Unique title/description/canonical per page; crawlers that execute JS will see them.
 */
const SeoHead = ({ title, description, path = "/" }: SeoHeadProps) => {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:url", `${SITE}${path}`);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertCanonical(`${SITE}${path}`);
  }, [title, description, path]);

  return null;
};

export default SeoHead;
