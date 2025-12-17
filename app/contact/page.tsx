import { SectionHeading } from "@/components/ui/section-heading";
import { Metadata } from "next";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Graffix Studio",
  description: "Get in touch with our team for your next design project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <SectionHeading
              title="Let's Talk"
              subtitle="We are always open to discussing new projects, creative ideas or opportunities to be part of your visions."
              centered={false}
            />

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shriink-0 text-[#D4AF37]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                  <p className="text-gray-400 mb-1">We'll get back to you within 24 hours.</p>
                  <Link href="mailto:info@graffixstudio.com" className="text-[#D4AF37] hover:underline font-medium">info@graffixstudio.com</Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shriink-0 text-[#D4AF37]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Call Us</h3>
                  <p className="text-gray-400 mb-1">Mon-Fri from 9am to 6pm.</p>
                  <Link href="tel:+15550001234" className="text-[#D4AF37] hover:underline font-medium">+1 (555) 000-1234</Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shriink-0 text-[#D4AF37]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Visit Us</h3>
                  <p className="text-gray-400">
                    123 Design Avenue,<br />
                    Creative District, NY 10012<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                  <input id="name" type="text" className="w-full rounded-xl px-4 py-3 bg-black/50 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                  <input id="email" type="email" className="w-full rounded-xl px-4 py-3 bg-black/50 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subject</label>
                <select id="subject" className="w-full rounded-xl px-4 py-3 bg-black/50 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Project Proposal</option>
                  <option>Career</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                <textarea id="message" rows={5} className="w-full rounded-xl px-4 py-3 bg-black/50 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-y" placeholder="Tell us about your project..." required></textarea>
              </div>

              <button type="submit" className="w-full rounded-xl py-4 bg-[#D4AF37] hover:bg-[#F4C430] text-black font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 transform hover:translate-y-[-2px]">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
