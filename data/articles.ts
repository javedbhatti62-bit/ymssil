export type DemonstrationArticle = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  contactHref: string;
};

export const demonstrationArticles: DemonstrationArticle[] = [
  {
    category: "Research & Methods",
    title: "Research methodology and data analysis",
    excerpt: "A demonstration editorial theme for future perspectives on research design and evidence.",
    image: "https://images.pexels.com/photos/5452228/pexels-photo-5452228.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Healthcare professionals discussing research in a modern workspace",
    contactHref: "/contact#researchers-and-publishers",
  },
  {
    category: "Professional Learning",
    title: "Learning across healthcare professions",
    excerpt: "A demonstration editorial theme for future ideas on continuing education and professional growth.",
    image: "https://images.pexels.com/photos/6129657/pexels-photo-6129657.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Healthcare professionals in discussion at a hospital",
    contactHref: "/contact#universities-and-educational-institutions",
  },
  {
    category: "Healthcare Systems",
    title: "Building connected healthcare systems",
    excerpt: "A demonstration editorial theme for future discussion of integrated healthcare and collaboration.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Healthcare team reviewing clinical information",
    contactHref: "/contact#healthcare-institutions",
  },
];