import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold tracking-tighter">
            GRAFFIX<span className="text-[#D4AF37]">.</span>
          </span>
          <p className="text-sm text-gray-400">
            Premium design solutions for modern brands.
          </p>
        </div>

        <nav className="flex gap-6 text-sm font-medium text-gray-400">
          <Link href="/services" className="hover:text-[#D4AF37] transition-colors">Services</Link>
          <Link href="/work" className="hover:text-[#D4AF37] transition-colors">Work</Link>
          <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About</Link>
          <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
        </nav>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Graffix Studio.
        </p>
      </div>
    </footer>
  )
}
