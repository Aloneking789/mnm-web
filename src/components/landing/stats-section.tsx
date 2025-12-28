"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { value: 10000, label: "Active Users" },
  { value: 1500, label: "Startups Founded" },
  { value: 500, label: "Investors" },
  { value: 25, label: "Million Raised" },
];

function AnimatedCounter({ endValue, duration = 2000 }: { endValue: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = endValue;
          if (start === end) return;

          const totalFrames = Math.round(duration / (1000 / 60));
          const increment = end / totalFrames;

          const counter = () => {
            start += increment;
            if (start < end) {
              setCount(Math.ceil(start));
              requestAnimationFrame(counter);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(counter);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration]);

  return <span ref={ref}>{Math.floor(count).toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section className="bg-card py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                <AnimatedCounter endValue={stat.value} />
                {stat.label.includes("Million") ? "M+" : "+"}
              </h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
