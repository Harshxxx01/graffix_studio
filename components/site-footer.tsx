import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#D4AF37] text-black pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tighter">
                GRAFFIX<span className="text-white">.</span>
              </span>
            </Link>
            <p className="text-gray-900 leading-relaxed">
              Transforming ideas into innovative digital solutions. We build custom software that empowers businesses through AI integration and modern technology.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-black text-[#D4AF37] flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-900 hover:text-white transition-colors block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              Our Services
            </h3>
            <ul className="space-y-4">
              {["Web Development", "Mobile Applications", "UI/UX Design", "Cloud Solutions", "AI Integration"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-900 hover:text-white transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <span className="text-gray-900">
                  Vilankurichi, Coimbatore, India
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <span className="text-gray-900">+91 123456789</span>
              </li>
              <li className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <span className="text-gray-900">info@graffixstudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-black text-white rounded-2xl p-8 mb-12 flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-2xl font-bold mb-2 text-[#D4AF37]">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter for the latest news and insights.</p>
          </div>
          <div className="flex-1 w-full max-w-md flex flex-col md:flex-row gap-4">
            <input
              suppressHydrationWarning
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
            />
            <button suppressHydrationWarning className="bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-800">
          <p>&copy; {new Date().getFullYear()} Graffix Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
