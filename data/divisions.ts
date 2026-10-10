import {
  BookMarked,
  BookOpenCheck,
  Building2,
  GraduationCap,
  HeartPulse,
  Hospital,
  Microscope,
  Pill,
  ShieldCheck,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Division = {
  number: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  serviceAreas: string[];
  audience: string;
  contactTopicId: string;
};

export const divisions: Division[] = [
  {
    number: "01",
    slug: "premium-hospitals-healthcare-centers-clinics",
    title: "Young’s Premium Hospitals, Healthcare Centers & Clinics",
    description: "Healthcare delivery through hospital, center and clinic settings.",
    icon: Hospital,
    serviceAreas: ["Hospitals", "Healthcare centers", "Clinics"],
    audience: "Healthcare institutions and care teams",
    contactTopicId: "healthcare-institutions",
  },
  {
    number: "02",
    slug: "pharmacy-diagnostic-laboratories",
    title: "Young’s Pharmacy & Diagnostic Laboratories",
    description: "Pharmacy services and diagnostic laboratory solutions.",
    icon: Pill,
    serviceAreas: ["Pharmacy", "Diagnostic laboratories"],
    audience: "Pharmacy and diagnostic professionals",
    contactTopicId: "healthcare-institutions",
  },
  {
    number: "03",
    slug: "nursing-allied-health-college",
    title: "Young’s Nursing & Allied Health College",
    description: "Education pathways for nursing and allied health disciplines.",
    icon: GraduationCap,
    serviceAreas: ["Nursing education", "Allied health education"],
    audience: "Nursing and allied health learners and educators",
    contactTopicId: "universities-and-educational-institutions",
  },
  {
    number: "04",
    slug: "medical-nursing-professional-academy",
    title: "Young’s Medical, Nursing & Professional Academy",
    description: "Learning and professional development for healthcare teams.",
    icon: BookOpenCheck,
    serviceAreas: ["Medical learning", "Nursing learning", "Professional development"],
    audience: "Healthcare professionals and education providers",
    contactTopicId: "universities-and-educational-institutions",
  },
  {
    number: "05",
    slug: "resuscitation-emergency-care-academy",
    title: "Young’s Resuscitation & Emergency Care Academy",
    description: "Training focused on resuscitation and emergency care practice.",
    icon: HeartPulse,
    serviceAreas: ["Resuscitation", "Emergency care education"],
    audience: "Professionals working in emergency care",
    contactTopicId: "universities-and-educational-institutions",
  },
  {
    number: "06",
    slug: "scientific-research-innovation-center",
    title: "Young’s Scientific Research & Innovation Center",
    description: "Research support, methods, analysis and innovation services.",
    icon: Microscope,
    serviceAreas: ["Scientific research", "Research methods", "Innovation"],
    audience: "Researchers, clinicians and research organizations",
    contactTopicId: "researchers-and-publishers",
  },
  {
    number: "07",
    slug: "scientific-research-publishers",
    title: "Young’s Scientific & Research Publishers",
    description: "Publishing support for scientific and research communication.",
    icon: BookMarked,
    serviceAreas: ["Scientific publishing", "Research publishing", "Editorial support"],
    audience: "Researchers, authors and publishers",
    contactTopicId: "researchers-and-publishers",
  },
  {
    number: "08",
    slug: "healthcare-quality-safety-certification-services",
    title: "Young’s Healthcare Quality, Safety & Certification Services",
    description: "Quality, safety and certification support for healthcare services.",
    icon: ShieldCheck,
    serviceAreas: ["Healthcare quality", "Safety", "Certification services"],
    audience: "Healthcare organizations and quality teams",
    contactTopicId: "healthcare-institutions",
  },
  {
    number: "09",
    slug: "healthcare-manpower-solutions",
    title: "Young’s Healthcare Manpower Solutions",
    description: "Workforce solutions for healthcare employers and services.",
    icon: Users,
    serviceAreas: ["Healthcare workforce", "Manpower solutions"],
    audience: "Healthcare employers and workforce teams",
    contactTopicId: "healthcare-employers",
  },
  {
    number: "10",
    slug: "medical-supplies-international-trading",
    title: "Young’s Medical Supplies & International Trading",
    description: "Medical supplies and international trading capabilities.",
    icon: Truck,
    serviceAreas: ["Medical supplies", "International trading"],
    audience: "Healthcare procurement and supply teams",
    contactTopicId: "medical-equipment-suppliers",
  },
  {
    number: "11",
    slug: "international-builders-properties",
    title: "Young’s International Builders & Properties",
    description: "Building and property development within the group portfolio.",
    icon: Building2,
    serviceAreas: ["International building", "Properties"],
    audience: "Development and property-sector organizations",
    contactTopicId: "corporate-and-development-partners",
  },
];