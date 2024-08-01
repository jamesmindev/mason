"use client";

import Image from "next/image";
import styles from "./DisplayImage.module.scss";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const DisplayImage = ({ src }: { src: string }) => {
  const containerRef = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        "img",
        { scale: 1 },
        {
          scale: 1.1,
          // backgroundAttachment: "fixed",
          // ease: "power2.inOut",
          scrollTrigger: {
            trigger: "img",
            start: "top center", // Adjust the start point of the animation
            end: "bottom+=200 bottom", // Adjust the end point of the animation
            scrub: true, // Smooth scrubbing
            // markers: true,
          },
        },
      );
    },
    { scope: containerRef },
  );
  return (
    <section className={styles.DisplayImage} ref={containerRef}>
      <Image src={src} width={4000} height={4000} alt="section display image" />
    </section>
  );
};

export default DisplayImage;
