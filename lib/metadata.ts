import type { Metadata } from "next";

const siteUrl = "https://ymssil.com";
const socialImage =
  "https://images.pexels.com/photos/6129657/pexels-photo-6129657.jpeg?auto=compress&cs=tinysrgb&w=1200";

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  const canonical = new URL(pathname, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "YOUNG’S",
      locale: "en_US",
      type: "website",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Healthcare professionals" }],
    },
  };
}