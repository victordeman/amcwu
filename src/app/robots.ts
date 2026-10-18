import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://amcwu2026.wigweuniversity.edu.ng/sitemap.xml",
  };
}
