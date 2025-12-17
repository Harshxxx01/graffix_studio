import { Palette, PenTool, Monitor, Megaphone, Globe, Smartphone, Camera, Video, Box } from "lucide-react";
import { PageHeader } from "@/components/page-header";
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

import { CtaBackgroundEffect } from "@/components/cta-background-effect";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative overflow-hidden pt-32 pb-20">
        <CtaBackgroundEffect />
        <div className="container mx-auto px-4 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <PageHeader
              title="Our Services"
              subtitle="Everything you need to build a world-class brand, all under one roof."
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">

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

      {/* Process Section */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <PageHeader title="Our Process" subtitle="From concept to launch, we've got you covered." centered={true} />

          <div className="relative mt-20">
            {/* Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Discover", desc: "Research & Strategy" },
                { step: "02", title: "Define", desc: "Concept & Wireframing" },
                { step: "03", title: "Design", desc: "Visuals & Prototyping" },
                { step: "04", title: "Deliver", desc: "Launch & Support" },
              ].map((p, i) => (
                <div key={i} className="group bg-black border border-white/10 p-8 rounded-2xl text-center hover:border-[#D4AF37] transition-all">
                  <div className="inline-block px-4 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] font-bold text-sm mb-4 border border-[#D4AF37]/20 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    {p.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#C5A028] rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tighter">Ready for a Custom Quote?</h2>
              <p className="text-black/80 text-xl max-w-2xl mx-auto mb-8 font-medium">Every project is unique. Let's discuss your specific needs and create a tailored package just for you.</p>
              <div className="flex justify-center gap-4">
                <a href="/contact" className="px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">Get a Quote</a>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </section>
    </div >
  );
}
