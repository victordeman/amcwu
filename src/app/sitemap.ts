import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amcwu2026.wigweuniversity.edu.ng";

  const routes = [
    "",
    "/about",
    "/call-for-papers",
    "/speakers",
    "/dates",
    "/registration",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
