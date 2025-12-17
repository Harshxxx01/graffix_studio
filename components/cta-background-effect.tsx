"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function CtaBackgroundEffect({ className }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let w = canvas.width = canvas.offsetWidth
        let h = canvas.height = canvas.offsetHeight
        let animationFrameId: number

        const handleResize = () => {
            w = canvas.width = canvas.offsetWidth
            h = canvas.height = canvas.offsetHeight
            initParticles()
        }
        window.addEventListener("resize", handleResize)

        // Mouse State
        const mouse = { x: -1000, y: -1000 }
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }
        window.addEventListener("mousemove", handleMouseMove)

        // Particle System configuration
        const PARTICLE_COUNT_FACTOR = 9000 // Higher = fewer particles
        const CONNECTION_DISTANCE = 120
        const MOUSE_DISTANCE = 180

        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number
            color: string
            baseX: number
            baseY: number

            constructor() {
                this.x = Math.random() * w
                this.y = Math.random() * h
                this.baseX = this.x
                this.baseY = this.y
                // Slower, smoother movement
                this.vx = (Math.random() - 0.5) * 0.3
                this.vy = (Math.random() - 0.5) * 0.3
                this.size = Math.random() * 2.5 + 0.5
                // White and Bright White particles for maximum visibility
                const isBright = Math.random() > 0.5
                this.color = isBright ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.5)"
            }

            update() {
                this.x += this.vx
                this.y += this.vy

                // Wrap around screen
                if (this.x < -50) this.x = w + 50
                if (this.x > w + 50) this.x = -50
                if (this.y < -50) this.y = h + 50
                if (this.y > h + 50) this.y = -50

                // Mouse avoidance/attraction
                const dx = mouse.x - this.x
                const dy = mouse.y - this.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < MOUSE_DISTANCE) {
                    const angle = Math.atan2(dy, dx)
                    // Gentle push away
                    const force = (MOUSE_DISTANCE - distance) / MOUSE_DISTANCE
                    const push = force * 1.5 // Multiplier for Push strength

                    this.x -= Math.cos(angle) * push
                    this.y -= Math.sin(angle) * push
                }
            }

            draw() {
                if (!ctx) return
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.fill()
            }
        }

        let particles: Particle[] = []
        const initParticles = () => {
            particles = []
            const particleCount = Math.floor((w * h) / PARTICLE_COUNT_FACTOR)
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        initParticles()

        const animate = () => {
            ctx.clearRect(0, 0, w, h)

            particles.forEach((particle) => {
                particle.update()
                particle.draw()
            })

            // Draw Connections
            ctx.lineWidth = 0.5
            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i]

                // Connect to Mouse
                const dxm = mouse.x - p1.x
                const dym = mouse.y - p1.y
                const distMouse = Math.sqrt(dxm * dxm + dym * dym)

                if (distMouse < MOUSE_DISTANCE) {
                    ctx.beginPath()
                    ctx.strokeStyle = `rgba(255,255,255, ${0.4 * (1 - distMouse / MOUSE_DISTANCE)})`
                    ctx.moveTo(p1.x, p1.y)
                    ctx.lineTo(mouse.x, mouse.y)
                    ctx.stroke()
                }

                // Connect to other particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < CONNECTION_DISTANCE) {
                        ctx.beginPath()
                        // Alpha based on distance
                        const alpha = 1 - distance / CONNECTION_DISTANCE
                        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.15})` // Subtle white lines
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className={cn("absolute inset-0 z-0", className)}>
            <canvas
                ref={canvasRef}
                className="w-full h-full block"
                style={{ touchAction: 'none' }}
            />
            {/* Overlay gradient for extra polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
        </div>
    )
}
