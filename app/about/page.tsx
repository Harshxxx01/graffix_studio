import { PageHeader } from "@/components/page-header";
import { Metadata } from "next";
import { CheckCircle2, Award, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us | Graffix Studio",
  description: "Learn about our journey, our team, and our mission to redefine digital design.",
};

const stats = [
  { label: "Projects Completed", value: "500+", icon: Award },
  { label: "Happy Clients", value: "200+", icon: Users },
  { label: "Countries Served", value: "15+", icon: Globe },
];

import { CtaBackgroundEffect } from "@/components/cta-background-effect";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative overflow-hidden pt-32 pb-20">
        <CtaBackgroundEffect />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
              <PageHeader
                title="We Are Graffix Studio"
                subtitle="Creative visionaries dedicated to elevating your brand."
                centered={false}
              />

              <p className="text-lg text-gray-400 leading-relaxed">
                Founded in 2020, Graffix Studio has grown from a small passion project into a global design agency.
                We believe that good design is not just about making things look pretty—it's about solving problems
                and communicating values effectively.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed">
                Our team comprises award-winning designers, illustrators, and strategists who share a common goal:
                to push the boundaries of creativity and deliver exceptional results for our clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {["Creativity First", "Pixel Perfect", "Strategic Approach", "Client Centric"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-[#D4AF37]" size={20} /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent blur-3xl rounded-full -z-10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-center items-center text-center">
                    <Award className="text-[#D4AF37] mb-4" size={40} />
                    <span className="text-3xl font-bold text-white block">10+</span>
                    <span className="text-gray-400 text-sm">Design Awards</span>
                  </div>
                  <div className="aspect-square bg-[#D4AF37] rounded-2xl p-6 flex flex-col justify-center items-center text-center text-black">
                    <Users className="text-black mb-4" size={40} />
                    <span className="text-3xl font-bold block">24/7</span>
                    <span className="text-black/70 text-sm">Client Support</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-center items-center text-center">
                    <Globe className="text-[#D4AF37] mb-4" size={40} />
                    <span className="text-3xl font-bold text-white block">15+</span>
                    <span className="text-gray-400 text-sm">Countries</span>
                  </div>
                  <div className="aspect-square bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-center items-center text-center">
                    <CheckCircle2 className="text-[#D4AF37] mb-4" size={40} />
                    <span className="text-3xl font-bold text-white block">500+</span>
                    <span className="text-gray-400 text-sm">Projects Done</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-[#050505] border-y border-white/5 mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <PageHeader title="Meet The Team" subtitle="The creative minds behind the magic." centered={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { name: "Alex Morgan", role: "Creative Director", image: "bg-gray-800" },
              { name: "Sarah Chen", role: "Lead Designer", image: "bg-gray-700" },
              { name: "Marcus Johnson", role: "Tech Lead", image: "bg-gray-900" }
            ].map((member, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all">
                <div className={`aspect-[3/4] ${member.image} w-full`} /> {/* Image Placeholder */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">{member.name}</h3>
                  <p className="text-gray-400 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <PageHeader title="Our Core Values" subtitle="The principles that guide every pixel we place." centered={true} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "Innovation", desc: "Pushing boundaries to create something new." },
              { title: "Integrity", desc: "Honest communication and transparent processes." },
              { title: "Excellence", desc: "Refusing to settle for anything less than perfect." },
              { title: "Collaboration", desc: "Working with you, not just for you." }
            ].map((val, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#D4AF37]/10 transition-colors text-center">
                <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                <p className="text-sm text-gray-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
