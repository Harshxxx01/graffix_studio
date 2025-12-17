import { Palette, PenTool, Monitor, Megaphone, Globe, Smartphone, Camera, Video, Box } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Graffix Studio",
  description: "Explore our premium design services including branding, illustration, and web design.",
};

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Holistic brand strategy, logo design, and visual identity systems that define your market presence."
  },
  {
    icon: PenTool,
    title: "Illustration",
    description: "Custom digital illustrations, editorial art, and iconography tailored to your brand's unique style."
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "User-centric UI/UX design, responsive layouts, and interactive prototypes for modern web experiences."
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Social media graphics, ad creatives, and email marketing templates that drive engagement."
  },
  {
    icon: Smartphone,
    title: "App Design",
    description: "Intuitive mobile application interfaces for iOS and Android that delight users at every touchpoint."
  },
  {
    icon: Box,
    title: "Packaging Design",
    description: "Premium product packaging and label design that stands out on the shelf."
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionHeading
            title="Our Services"
            subtitle="Everything you need to build a world-class brand, all under one roof."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-100">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
