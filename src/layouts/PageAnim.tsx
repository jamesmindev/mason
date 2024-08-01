"use client";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

const PageAnim = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".page-anim",
      {
        opacity: 0,
        y: -10,
      },
      {
        duration: 1,
        // ease: "power3.out",
        ease: CustomEase.create("custom", "M0,0 C0.399,0 0.157,1.036 1,1 "),
        opacity: 1,
        y: 0,
      },
    );
  });

  return <div className="page-anim">{children}</div>;
};

export default PageAnim;
