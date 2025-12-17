import { SectionHeading } from "@/components/ui/section-heading";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | Graffix Studio",
  description: "Browse our portfolio of award-winning design projects.",
};

const projects = [
  {
    title: "Lumina Tech",
    category: "Brand Identity",
    color: "bg-blue-900",
  },
  {
    title: "Velvet Interiors",
    category: "Web Design",
    color: "bg-purple-900",
  },
  {
    title: "Apex Fitness",
    category: "Mobile App",
    color: "bg-teal-900",
  },
  {
    title: "Golden Hour",
    category: "Packaging",
    color: "bg-orange-800",
  },
  {
    title: "Nexus Events",
    category: "Social Media",
    color: "bg-red-900",
  },
  {
    title: "EcoFuture",
    category: "Brand Strategy",
    color: "bg-green-900",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <SectionHeading
            title="Selected Work"
            subtitle="A showcase of our most impactful projects."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative aspect-video overflow-hidden rounded-2xl ${project.color} border border-white/10 hover:border-[#D4AF37]/50 transition-all cursor-pointer`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#D4AF37] text-sm font-medium uppercase tracking-wider mb-2 block animate-in fade-in slide-in-from-bottom-2">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                  View Case Study <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
