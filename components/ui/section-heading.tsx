import { cn } from "@/lib/utils"

interface SectionHeadingProps {
    title: string
    subtitle?: string
    className?: string
    centered?: boolean
}

export function SectionHeading({ title, subtitle, className, centered = true }: SectionHeadingProps) {
    return (
        <div className={cn("mb-12 flex flex-col gap-4", centered && "items-center text-center", className)}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                {title}
            </h2>
            {subtitle && (
                <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                    {subtitle}
                </p>
            )}
            <div className={cn("h-1 w-20 bg-[#D4AF37] rounded-full mt-2", centered && "mx-auto")} />
        </div>
    )
}
