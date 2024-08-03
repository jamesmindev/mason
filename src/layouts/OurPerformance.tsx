"use client";
import { useRef } from "react";
import styles from "./OurPerformance.module.scss";
import clsx from "clsx";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

const OurPerformance = () => {
  const containerRef = useRef();
  useGSAP(
    () => {
      gsap.utils.toArray(".stat").forEach((el: any, index: number) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: ".stats-container",
            start: "+=50px bottom",
            // markers: true,
          },
          y: 20,
          opacity: 0,
          delay: index * 0.12,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section className={styles.OurPerformance} ref={containerRef}>
      <div className="wrapper">
        <h2>Our Performance</h2>
        <div className="stats-container">
          <div className="stat">
            <p>
              <span>18%</span>Avg. Annual Return
            </p>
          </div>
          <div className="stat">
            <p>
              <span>$1.5B</span>Total Investment Capital
            </p>
          </div>
          <div className="stat">
            <p>
              <span>20%</span>Lower Volatility Rate
            </p>
          </div>
          <div className="stat">
            <p>
              <span>3,000+</span>Jobs Created
            </p>
          </div>
          <div className="stat">
            <p>
              <span>$5B</span>Energy Cost Reduction
            </p>
          </div>
          <div className="stat">
            <p>
              <span>7%</span>Overall Fund Growth
            </p>
          </div>
          <div className="stat">
            <p>
              <span>3.7M tons</span>CO2 Emission Reduction
            </p>
          </div>
          <div className="stat">
            <p>
              <span>796</span>Total Investors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPerformance;
