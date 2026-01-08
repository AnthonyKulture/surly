"use client";

import { useEffect, useRef } from "react";

interface Point {
    x: number;
    y: number;
    originX: number;
    originY: number;
    vx: number;
    vy: number;
}

export const HeroBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: 0, y: 0, isActive: false });
    const pointsRef = useRef<Point[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d", { alpha: true }); // Optimized context
        if (!ctx) return;

        // --- Configuration ---
        // Detect mobile (simple width check)
        const isMobile = window.innerWidth < 768;

        // --- Configuration ---
        const spacing = isMobile ? 64 : 50; // 50px desktop spacing = ~60% less points vs 32px
        const mouseRadius = 240;
        const mouseRadiusSq = mouseRadius * mouseRadius;
        const springFactor = 0.12; // Snappier
        const friction = 0.82; // Faster settle
        const baseColor = "#e5e7eb"; // Gray 200
        const accentColor = "#ecff73"; // Lime

        // --- Pre-render Sprites (Huge Performance Win) ---
        // 1. Normal Dot
        const dotCanvas = document.createElement('canvas');
        dotCanvas.width = 4;
        dotCanvas.height = 4;
        const dotCtx = dotCanvas.getContext('2d');
        if (dotCtx) {
            dotCtx.beginPath();
            dotCtx.arc(2, 2, 1.3, 0, Math.PI * 2);
            dotCtx.fillStyle = baseColor;
            dotCtx.fill();
        }

        // 2. Active Dot (Lime) - Pre-rendered bigger for scaling effect
        const activeDotCanvas = document.createElement('canvas');
        activeDotCanvas.width = 8;
        activeDotCanvas.height = 8;
        const activeCtx = activeDotCanvas.getContext('2d');
        if (activeCtx) {
            activeCtx.beginPath();
            activeCtx.arc(4, 4, 3, 0, Math.PI * 2); // Bigger radius
            activeCtx.fillStyle = accentColor;
            activeCtx.fill();
        }

        // --- Resize Handler ---
        const resize = () => {
            const { width, height } = container.getBoundingClientRect();
            // Rounding to prevent sub-pixel blurring
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap at 1.5x for performance (4k optimization)

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.scale(dpr, dpr);

            // Re-init points
            pointsRef.current = [];

            // Calculate grid
            const cols = Math.ceil(width / spacing) + 1;
            const rows = Math.ceil(height / spacing) + 1;

            // Center grid
            const offsetX = (width - ((cols - 1) * spacing)) / 2;
            const offsetY = (height - ((rows - 1) * spacing)) / 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = offsetX + i * spacing;
                    const y = offsetY + j * spacing;
                    pointsRef.current.push({
                        x, y,
                        originX: x,
                        originY: y,
                        vx: 0, vy: 0
                    });
                }
            }
        };

        resize();
        // Debounced resize could be added here if needed, but browser handles reasonably well now
        window.addEventListener("resize", resize);

        // --- Animation Loop ---
        let animationFrameId: number;

        const animate = () => {
            // Partial clear can be faster? No, clearRect is hardware accelerated usually.
            const { width, height } = canvas.getBoundingClientRect();
            ctx.clearRect(0, 0, width, height);

            const active = mouseRef.current.isActive;
            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Optimization: Iterate backwards? No real diff.
            // Using for loop is slightly faster than forEach for thousands of items.
            const points = pointsRef.current;
            const len = points.length;

            for (let i = 0; i < len; i++) {
                const point = points[i];

                // 1. Physics Calculation
                // Calculate distance squared (avoids expensive Math.sqrt)
                const dx = mx - point.x;
                const dy = my - point.y;
                const distSq = dx * dx + dy * dy;

                let isDisturbed = false;

                // Mouse interaction
                if (active && distSq < mouseRadiusSq) {
                    isDisturbed = true;
                    // We need actual distance for the force curve now, but we can approximate or use sqrt only here
                    const dist = Math.sqrt(distSq);
                    const force = (mouseRadius - dist) / mouseRadius;

                    // trig-free repulsion: cos(a) = dx/dist, sin(a) = dy/dist
                    // vx -= cos(a) * strength => vx -= (dx/dist) * strength
                    // strength = 20 * force
                    const strength = 20 * force;

                    point.vx -= (dx / dist) * strength;
                    point.vy -= (dy / dist) * strength;
                }

                // Spring physics (always apply to return to origin)
                const ox = point.originX - point.x;
                const oy = point.originY - point.y;

                const distToOriginSq = ox * ox + oy * oy;

                // SLEEP OPTIMIZATION: If close to origin, slow, and not being pushed by mouse -> SKIP
                if (!isDisturbed && distToOriginSq < 0.01 && Math.abs(point.vx) < 0.01 && Math.abs(point.vy) < 0.01) {
                    point.x = point.originX;
                    point.y = point.originY;
                    point.vx = 0;
                    point.vy = 0;
                    // Draw static dot fast
                    ctx.drawImage(dotCanvas, point.x - 2, point.y - 2);
                    continue;
                }

                // Apply forces
                point.vx += ox * springFactor;
                point.vy += oy * springFactor;
                point.vx *= friction;
                point.vy *= friction;
                point.x += point.vx;
                point.y += point.vy;

                // 2. Rendering
                if (active && distSq < mouseRadiusSq) {
                    // Active dot rendering
                    // Calculate scale/opacity based on distance (0 to 1)
                    // Re-use dist if we calc'd it? Or approximate.
                    const dist = Math.sqrt(distSq);
                    const t = 1 - (dist / mouseRadius);

                    // Only highlight if sufficiently close
                    if (t > 0.1) {
                        // Draw the active sprite
                        // We can scale it using drawImage parameters
                        // Sprite is 8x8. We want center at point.x, point.y
                        // Scale 0.5 to 1.2
                        const scale = 0.5 + t * 0.7;
                        const size = 8 * scale;
                        ctx.drawImage(activeDotCanvas, point.x - size / 2, point.y - size / 2, size, size);
                        continue;
                    }
                }

                // Default draw
                ctx.drawImage(dotCanvas, point.x - 2, point.y - 2);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Start loop
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current.x = e.clientX - rect.left;
        mouseRef.current.y = e.clientY - rect.top;
        mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
        mouseRef.current.isActive = false;
    };

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-0 overflow-hidden bg-white"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <canvas ref={canvasRef} className="block w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/90 pointer-events-none" />
        </div>
    );
};
