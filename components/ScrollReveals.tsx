"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const revealSelectors = [
  ".narrow-copy",
  ".cards-grid > *, .stacked-list > *, .timeline-item, .audience-grid > *",
  ".benefits-copy > .section-tag, .benefits-copy > h2, .benefits-copy > .intro",
  ".benefits-visual",
  ".info-callout",
  ".booking-content > .section-tag, .booking-content > h2, .booking-content > p",
  ".booking-card",
  ".booking-form-wrap",
];

export default function ScrollReveals() {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isCompactLayout = window.matchMedia("(max-width: 1199px)").matches;
    const sections = gsap.utils.toArray<HTMLElement>("main .section-shell:not(.hero)");

    sections.forEach((section) => {
      revealSelectors.forEach((selector) => {
        const targets = Array.from(section.querySelectorAll<HTMLElement>(selector));

        if (targets.length === 0) {
          return;
        }

        const isStaggered = targets.length > 1;
        const isVisual = selector === ".benefits-visual";

        gsap.from(targets, {
          autoAlpha: 0,
          x: isVisual && !isCompactLayout ? 42 : 0,
          y: isVisual && isCompactLayout ? 24 : isVisual ? 0 : 32,
          duration: 0.85,
          ease: "power3.out",
          stagger: isStaggered ? 0.13 : 0,
          scrollTrigger: {
            trigger: targets[0],
            start: "top 86%",
            once: true,
          },
        });
      });

      const artwork = section.querySelector<HTMLElement>(".artwork-frame");

      if (artwork) {
        gsap.to(artwork, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        });
      }
    });

  }, []);

  return null;
}