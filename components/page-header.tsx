import { cn } from "@/lib/utils"

interface PageHeaderProps {
    title: string
    subtitle?: string
    className?: string
    centered?: boolean
}

export function PageHeader({ title, subtitle, className, centered = false }: PageHeaderProps) {
    return (
        <div className={cn("mb-16 flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000", centered && "items-center text-center", className)}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                {title}
                <span className="text-[#D4AF37]">.</span>
            </h1>
            {subtitle && (
                <p className="max-w-[42rem] text-lg text-gray-400 sm:text-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
            <div className={cn("h-1.5 w-24 bg-[#D4AF37] rounded-full mt-4", centered && "mx-auto")} />
        </div>
    )
}
