// components/StatsCounter.tsx
"use client";

import { useEffect, useRef } from "react";

interface Stat {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    let hasRun = false;

    const animateValue = (
      el: HTMLElement,
      target: number,
      prefix = "",
      suffix = "",
      duration = 2000
    ) => {
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        el.textContent = prefix + value.toLocaleString() + suffix;

        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          hasRun = true;
          const elements = section?.querySelectorAll(".count-up") || [];
          elements.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target") || "0");
            const prefix = el.getAttribute("data-prefix") || "";
            const suffix = el.getAttribute("data-suffix") || "";
            animateValue(el as HTMLElement, target, prefix, suffix);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-24 bg-emerald-900 text-white"
    >
      <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map(({ id, label, value, prefix = "", suffix = "" }) => (
            <div key={id} className="text-center space-y-1">
              <p className="text-lg md:text-xl lg:text-4xl font-bold text-white">
                <span
                  className="count-up"
                  data-target={value}
                  data-prefix={prefix}
                  data-suffix={suffix}
                >
                  {prefix}0{suffix}
                </span>
              </p>
              <p className="text-emerald-200 text-xs md:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
