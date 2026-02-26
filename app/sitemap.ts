import type { MetadataRoute } from "next";

const baseUrl = "https://tradevastu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/contact",
    "/solutions",
    "/sales-infrastructure",
    "/crm-optimization",
    "/managed-support",
    "/digital-architecture",
    "/careers",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

