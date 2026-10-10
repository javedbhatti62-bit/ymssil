import type { MetadataRoute } from "next";
import { divisions } from "@/data/divisions";

const siteUrl = "https://ymssil.com";
const pages = [
  "",
  "/about",
  "/divisions",
  "/research",
  "/news",
  "/careers",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((page) => ({ url: `${siteUrl}${page}` })),
    ...divisions.map((division) => ({ url: `${siteUrl}/divisions/${division.slug}` })),
  ];
}