"use client";

import { Star } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
    { name: "Sarah J.", role: "CEO, TechFlow", text: "Graffix Studio transformed our outdated brand into something truly world-class. The attention to detail is unmatched and the process was seamless from start to finish." },
    { name: "Michael R.", role: "Founder, Zenith", text: "The team understood our vision perfectly. The new web design has increased our conversion rate by 40% and we've received countless compliments from stakeholders." },
    { name: "Elena V.", role: "Marketing Dir, Aura", text: "Professional, creative, and timely. They delivered a comprehensive brand identity that we are proud of. Highly recommend their services for any serious business." },
    { name: "David K.", role: "CTO, Nexus", text: "Exceptional quality code and design. The integration of modern animations made our platform feel alive. A true partner in our digital journey." },
    { name: "Olivia P.", role: "Owner, Luxe", text: "They just 'get it'. I didn't have to explain much, they captured the essence of our luxury brand immediately. The results speak for themselves." }
];

export function TestimonialCarousel() {
    return (
        <div className="mt-12 relative px-12">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                orientation="vertical"
                className="w-full"
            >
                <CarouselContent className="-mt-1 h-[400px]">
                    {testimonials.map((t, i) => (
                        <CarouselItem key={i} className="pt-1 md:basis-1/2">
                            <div className="p-1">
                                <div className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-[#D4AF37] transition-all hover:bg-[#151515] h-full">
                                    <div className="flex gap-1 text-[#D4AF37] mb-6">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={18} fill="currentColor" strokeWidth={0} />
                                        ))}
                                    </div>
                                    <p className="text-lg text-gray-300 italic mb-8 leading-relaxed line-clamp-4">
                                        "{t.text}"
                                    </p>
                                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] to-black border border-[#D4AF37] flex items-center justify-center text-black font-bold text-xl shrink-0">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg">{t.name}</p>
                                            <p className="text-sm text-[#D4AF37] font-medium">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -top-12 left-1/2 -translate-x-1/2 rotate-90 bg-white/5 border-white/10 hover:bg-[#D4AF37] hover:text-black text-white" />
                <CarouselNext className="hidden md:flex -bottom-12 left-1/2 -translate-x-1/2 rotate-90 bg-white/5 border-white/10 hover:bg-[#D4AF37] hover:text-black text-white" />
            </Carousel>
        </div>
    );
}
