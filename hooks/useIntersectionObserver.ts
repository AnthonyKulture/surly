"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement>({
  threshold = 0.1,
  rootMargin = "0px 0px -5% 0px",
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export const useScrollAnimation = (delay: number = 0) => {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted on client to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isMounted, isVisible, delay]);

  return { ref, shouldAnimate };
};

export const useCounter = (
  target: number,
  duration: number = 1500,
  startOnVisible: boolean = true
) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.5,
    triggerOnce: true,
  });
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target, duration]);

  useEffect(() => {
    if (startOnVisible && isVisible) {
      animate();
    }
  }, [isVisible, startOnVisible, animate]);

  return { ref, count, isVisible };
};

