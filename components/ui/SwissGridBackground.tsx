"use client";

import { useEffect, useState, useMemo, useCallback, memo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Configuration - Very subtle values for Swiss Design
const GRID_SIZE = 80; // Larger grid = more elegant
const HIGHLIGHT_INTERVAL = 4000; // Less frequent
const MAX_ACTIVE_HIGHLIGHTS = 2; // Fewer active at once

interface GridHighlight {
  id: number;
  x: number;
  y: number;
}

interface Beam {
  id: number;
  isVertical: boolean;
  position: number;
  duration: number;
  delay: number;
}

// Ultra-subtle grid using SVG
const GridPattern = memo(function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="swiss-grid"
          width={GRID_SIZE}
          height={GRID_SIZE}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`}
            fill="none"
            stroke="black"
            strokeWidth="0.5"
            opacity="0.04"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#swiss-grid)" />
    </svg>
  );
});

// Ultra-subtle beam - almost invisible moving line
const MovingBeam = memo(function MovingBeam({ beam }: { beam: Beam }) {
  return (
    <motion.div
      className="absolute will-change-transform"
      style={
        beam.isVertical
          ? {
            width: "1px",
            height: "120px",
            left: `${beam.position}%`,
            background:
              "linear-gradient(to bottom, transparent, rgba(0,0,0,0.03), transparent)",
          }
          : {
            height: "1px",
            width: "120px",
            top: `${beam.position}%`,
            background:
              "linear-gradient(to right, transparent, rgba(0,0,0,0.03), transparent)",
          }
      }
      initial={beam.isVertical ? { top: "-120px" } : { left: "-120px" }}
      animate={
        beam.isVertical ? { top: "calc(100% + 120px)" } : { left: "calc(100% + 120px)" }
      }
      transition={{
        duration: beam.duration,
        repeat: Infinity,
        ease: "linear",
        delay: beam.delay,
      }}
    />
  );
});

// Subtle highlight - tiny square that fades
const GridHighlightCell = memo(function GridHighlightCell({
  highlight,
}: {
  highlight: GridHighlight;
}) {
  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        left: highlight.x * GRID_SIZE,
        top: highlight.y * GRID_SIZE,
        width: GRID_SIZE - 1,
        height: GRID_SIZE - 1,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <div className="w-full h-full bg-black/[0.015]" />
    </motion.div>
  );
});

export const SwissGridBackground = memo(function SwissGridBackground() {
  const [highlights, setHighlights] = useState<GridHighlight[]>([]);
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0 });
  const highlightCounterRef = useRef(0);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Set mounted state on client side only
  useEffect(() => {
    setMounted(true);

    // Detect mobile viewport
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const cols = Math.ceil(window.innerWidth / GRID_SIZE);
      const rows = Math.ceil(window.innerHeight / GRID_SIZE);
      setDimensions({ cols, rows });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Beams configuration - slow, subtle movement
  const beams = useMemo<Beam[]>(
    () => [
      { id: 1, isVertical: true, position: 20, duration: 25, delay: 0 },
      { id: 2, isVertical: true, position: 65, duration: 35, delay: 8 },
      { id: 3, isVertical: false, position: 40, duration: 40, delay: 15 },
    ],
    []
  );

  // New state for initial highlighted cells, initialized client-side
  const [initialHighlightedCells, setInitialHighlightedCells] = useState<GridHighlight[]>([]);

  // Effect to initialize a fixed number of highlighted cells once after mount
  useEffect(() => {
    if (mounted && dimensions.cols > 0 && dimensions.rows > 0 && initialHighlightedCells.length === 0) {
      const newHighlightedCells: GridHighlight[] = Array.from({ length: 8 }, (_, index) => ({
        id: -(index + 1), // Use negative IDs for initial cells to avoid conflicts
        x: Math.floor(Math.random() * dimensions.cols),
        y: Math.floor(Math.random() * dimensions.rows),
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 2,
      }));
      setInitialHighlightedCells(newHighlightedCells);
    }
  }, [mounted, dimensions.cols, dimensions.rows, initialHighlightedCells.length]);


  const generateHighlight = useCallback(() => {
    if (!mounted || dimensions.cols === 0 || dimensions.rows === 0) return;

    // Get current counter value and increment atomically
    const currentId = highlightCounterRef.current;
    highlightCounterRef.current += 1;

    const newHighlight: GridHighlight = {
      id: currentId,
      x: Math.floor(Math.random() * dimensions.cols),
      y: Math.floor(Math.random() * dimensions.rows),
    };

    setHighlights((prev) => {
      const updated = [...prev, newHighlight];
      if (updated.length > MAX_ACTIVE_HIGHLIGHTS) {
        return updated.slice(-MAX_ACTIVE_HIGHLIGHTS);
      }
      return updated;
    });

    setTimeout(() => {
      setHighlights((prev) => prev.filter((h) => h.id !== newHighlight.id));
    }, 3000);
  }, [mounted, dimensions.cols, dimensions.rows]);

  useEffect(() => {
    // Skip interval setup on mobile
    if (!mounted || dimensions.cols === 0 || dimensions.rows === 0 || isMobile) return;

    const initialDelay = setTimeout(() => {
      generateHighlight();
    }, 2000);

    const interval = setInterval(generateHighlight, HIGHLIGHT_INTERVAL);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [generateHighlight, dimensions.cols, dimensions.rows, isMobile]);

  // Render simple background on mobile (no animations)
  if (isMobile) {
    return (
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-background"
        aria-hidden="true"
      />
    );
  }

  // Full desktop experience with animations
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-background"
      aria-hidden="true"
    >
      {/* Ultra-subtle base grid */}
      <GridPattern />

      {/* Slow moving beams */}
      {beams.map((beam) => (
        <MovingBeam key={beam.id} beam={beam} />
      ))}

      {/* Rare, subtle highlights */}
      <AnimatePresence mode="popLayout">
        {highlights.map((highlight) => (
          <GridHighlightCell key={highlight.id} highlight={highlight} />
        ))}
      </AnimatePresence>
    </div>
  );
});
