import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 transition-all hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/50">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                <Icon size={24} />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed">
                {description}
            </p>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37]/20 rounded-2xl transition-colors pointer-events-none" />
        </div>
    )
}
