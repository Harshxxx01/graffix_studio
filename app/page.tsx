import { PenTool, Palette, Monitor, ArrowRight, CheckCircle2, Star, Zap, Search, Rocket, TrendingUp, ShieldCheck, Clock, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroBackground from "@/components/hero-background";
import { CtaBackgroundEffect } from "@/components/cta-background-effect";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TestimonialCarousel } from "@/components/testimonial-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-20 text-center">
        <HeroBackground />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="rounded-full bg-[#D4AF37]/10 px-6 py-2 text-sm font-bold text-[#D4AF37] border border-[#D4AF37] backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            Accepting New Projects for 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
            Unleash Creativity with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4C430] to-[#D4AF37] animate-pulse drop-shadow-sm">
              Graffix Studio
            </span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
            Premium graphic design solutions for brands that demand excellence.
            We transform visions into breathtaking visual realities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Link
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] hover:to-[#D4AF37] text-black font-extrabold rounded-full transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
            >
              Start Your Project <ArrowRight size={20} />
            </Link>
            <Link
              href="#work"
              className="px-8 py-4 bg-black/40 hover:bg-black/60 text-[#D4AF37] font-bold rounded-full border-2 border-[#D4AF37] backdrop-blur-md transition-all flex items-center justify-center hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-[2px] h-24 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent shadow-[0_0_10px_#D4AF37]" />
        </div>
      </section>

      {/* Infinite Marquee Section */}
      <section className="py-12 bg-[#D4AF37] border-y border-[#F4C430] overflow-hidden">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-16">
            {["Acme Corp", "Nebula", "Velocity", "FoxRun", "Circle", "Trio", "Hexagon", "Acme Corp", "Nebula", "Velocity"].map((item, i) => (
              <span key={i} className="text-3xl font-black text-black/80 uppercase tracking-tighter">
                {item}
              </span>
            ))}
          </div>
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-16">
            {["Acme Corp", "Nebula", "Velocity", "FoxRun", "Circle", "Trio", "Hexagon", "Acme Corp", "Nebula", "Velocity"].map((item, i) => (
              <span key={i} className="text-3xl font-black text-black/80 uppercase tracking-tighter">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-[#0a0a0a] relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <SectionHeading title="Why Graffix?" subtitle="We don't just design; we define markets." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: TrendingUp, title: "ROI Focused", desc: "Designs that are built to convert and grow your business." },
              { icon: ShieldCheck, title: "Quality Assured", desc: "Rigorous quality control for pixel-perfect results every time." },
              { icon: Clock, title: "Fast Turnaround", desc: "We respect your timelines without compromising on quality." },
              { icon: Star, title: "Top Rated", desc: "Consistently rated 5-stars by our global clientele." }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <SectionHeading title="How We Work" subtitle="A refined process for exceptional results." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent -z-10 opacity-30" />

            {[
              { icon: Search, title: "Discovery", desc: "We dive deep into your brand's core values and target audience." },
              { icon: Zap, title: "Creation", desc: "Our team crafts bespoke designs that align with your strategic goals." },
              { icon: Rocket, title: "Launch", desc: "We deliver polished assets ready to captivate your market." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-black border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)] z-10 relative">
                  <div className="absolute inset-0 rounded-full border border-[#D4AF37] animate-ping opacity-20 group-hover:opacity-0" />
                  <step.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-[#050505] relative border-t border-white/5">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">Our <span className="text-[#D4AF37]">Expertise</span></h2>
              <p className="text-xl text-gray-400">Comprehensive design solutions tailored to elevate your brand.</p>
            </div>
            <Link href="/services" className="px-6 py-3 rounded-full border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all flex items-center gap-2 font-medium">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Palette}
              title="Brand Identity"
              description="Logo design, color palettes, and visual strategy that create a lasting impression and set you apart from competitors."
            />
            <ServiceCard
              icon={PenTool}
              title="Illustration"
              description="Custom, bespoke illustrations and graphics for web, print, and social media that tell your unique story."
            />
            <ServiceCard
              icon={Monitor}
              title="Web Design"
              description="Modern, responsive, and high-performance websites designed to convert visitors into loyal customers."
            />
          </div>
        </div>
      </section>

      {/* New: Featured Work Section (Static Highlight) */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-7xl">
          <SectionHeading title="Featured Masterpieces" subtitle="A glimpse into our recent award-winning work." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
              <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20 mix-blend-overlay" />
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gray-800" />
              <div className="absolute bottom-0 left-0 p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Fintech</span>
                <h3 className="text-3xl font-bold text-white">Nova Bank Rebrand</h3>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
              <div className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-20 mix-blend-overlay" />
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gray-900" />
              <div className="absolute bottom-0 left-0 p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-2 block">Luxury</span>
                <h3 className="text-3xl font-bold text-white">Aura Perfume</h3>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/work" className="inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:text-white transition-colors text-lg border-b border-[#D4AF37] pb-1">
              View Full Portfolio <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Carousel) */}
      <section className="py-24 px-4 bg-black relative border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Testimonial Carousel */}
            <div>
              <SectionHeading title="Client Stories" subtitle="Don't just take our word for it." />

              <TestimonialCarousel />
            </div>

            {/* Right: Image/Visual */}
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 group">
              <Image
                src="/client.jpg"
                alt="Client Satisfaction"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Visual Element Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-48 h-48 rounded-full bg-black/60 blur-[40px]" />
                <div className="relative z-20 p-8 text-center backdrop-blur-sm bg-black/30 rounded-full border border-white/10">
                  <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">100%</h3>
                  <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New: FAQ Section */}
      <section className="py-24 px-4 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <SectionHeading title="Frequently Asked Questions" subtitle="Common questions about our services and process." />

          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "What is your typical turnaround time?", a: "Most branding projects take 2-4 weeks, while full web design projects can take 4-8 weeks depending on complexity. We prioritise quality and ensure every detail is perfect." },
                { q: "Do you offer ongoing support?", a: "Yes! We offer monthly retainer packages that include design updates, technical maintenance, and content changes to keep your digital presence fresh and secure." },
                { q: "What industries do you specialize in?", a: "We have extensive experience in Tech, Luxury Retail, Real Estate, and Startups. However, our strategic approach applies effectively to any ambitious brand looking to scale." },
                { q: "What is your payment process?", a: "We typically require a 50% deposit to secure your slot in our calendar, with the remaining 50% due upon project completion and your full satisfaction." },
                { q: "Can you rush a project?", a: "Rush projects are possible depending on our current workload. These will incur an additional rush fee to prioritize your deliverables without compromising quality." }
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-zinc-900/50 border border-white/10 rounded-2xl px-6 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-zinc-900/80 data-[state=open]:border-[#D4AF37] data-[state=open]:bg-zinc-900 data-[state=open]:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                >
                  <AccordionTrigger suppressHydrationWarning className="text-lg font-bold text-white hover:text-[#D4AF37] hover:no-underline py-6 [&[data-state=open]]:text-[#D4AF37]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6 animate-in fade-in slide-in-from-top-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* About/Feature Section */}
      <section id="about" className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-xl rounded-2xl -z-10" />
              <div className="aspect-square rounded-2xl border border-[#D4AF37]/30 p-2 relative overflow-hidden group">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src="/abt.jpg"
                    alt="About Graffix Studio"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="text-5xl font-black text-white block mb-1">Since</span>
                    <span className="text-7xl font-black text-[#D4AF37]">2020</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4C430]">Excellence</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Graffix Studio is a creative powerhouse specializing in branding, illustration, and digital design.
                Our mission is to transform ideas into visually stunning realities that captivate and inspire.
              </p>

              <ul className="space-y-4">
                {["Premium Quality Deliverables", "Strategic Design Thinking", "24/7 Dedicated Support"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white text-lg font-medium">
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-black">
                      <CheckCircle2 size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="inline-block bg-white text-black hover:bg-[#D4AF37] hover:text-black mt-4 rounded-full px-10 py-5 text-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Gold Background) */}
      <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-black">
        <CtaBackgroundEffect />
        <div className="container relative mx-auto max-w-5xl text-center z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Ready to Dominate Your Market?</h2>
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto opacity-90">Stop blending in. It's time to stand out with a brand identity that commands attention.</p>
          <Link href="#contact" className="inline-block bg-black text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 hover:shadow-2xl transition-all">
            Start Your Transformation
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 bg-black relative overflow-hidden">
        <div className="container mx-auto max-w-2xl relative z-10 text-center">
          <SectionHeading
            title="Get In Touch"
            subtitle="Let's collaborate to build something extraordinary together."
          />

          <form className="mt-10 flex flex-col gap-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Name</label>
                <input
                  suppressHydrationWarning
                  className="w-full rounded-xl px-4 py-4 bg-[#111] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Email</label>
                <input
                  suppressHydrationWarning
                  className="w-full rounded-xl px-4 py-4 bg-[#111] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-[#D4AF37] uppercase tracking-wider">Message</label>
              <textarea
                suppressHydrationWarning
                className="w-full rounded-xl px-4 py-4 bg-[#111] border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all min-h-[150px] resize-y"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            <button
              suppressHydrationWarning
              type="submit"
              className="mt-6 w-full rounded-xl py-5 text-xl font-black uppercase tracking-widest bg-[#D4AF37] hover:bg-[#F4C430] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 text-gray-500">
            Or email us directly at <a href="mailto:info@graffixstudio.com" className="text-[#D4AF37] hover:underline font-bold">info@graffixstudio.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
