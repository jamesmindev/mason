"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./FocusAreas.module.scss";
import { useRef } from "react";

const data = [
  {
    title: "Renewable Energy",
    desc: "Investing in renewable energy sources such as solar, wind, and hydropower projects, as well as companies involved in clean energy technology and infrastructure.",
    iconSrc: "/icons/icon-wind-power.svg",
    linkTo: "/investments/renewable-energy",
  },
  {
    title: "Sustainable Agriculture",
    desc: "Investing in sustainable farming practices, organic food production, and companies that promote environmentally friendly agricultural techniques.",
    iconSrc: "/icons/icon-agriculture.svg",
    linkTo: "/investments/sustainable-agriculture",
  },
  {
    title: "Green Real Estate",
    desc: "Supporting sustainable real estate development and property management practices, including green building certifications and energy-efficient housing.",
    iconSrc: "/icons/icon-holiday-village.svg",
    linkTo: "/investments/green-real-estate",
  },
  {
    title: "Carbon Offsetting",
    desc: "Investing in carbon offset projects and technologies that reduce or capture greenhouse gas emissions.",
    iconSrc: "/icons/icon-nature.svg",
    linkTo: "/investments/carbon-offsetting",
  },
  {
    title: "Eco-friendly Infrastructure",
    desc: "Backing projects and companies involved in eco-friendly infrastructure development, such as green transportation, renewable energy grids, and sustainable urban planning.",
    iconSrc: "/icons/icon-eco-friendly.svg",
    linkTo: "/investments/ecofriendly-infrastructure",
  },
  {
    title: "Impactful Startups",
    desc: "Supporting early-stage companies and startups that have innovative solutions for addressing environmental and sustainability challenges.",
    iconSrc: "/icons/icon-science.svg",
    linkTo: "/investments/impactful-startups",
  },
];

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";
import clsx from "clsx";
gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

const FocusAreas = () => {
  const containerRef = useRef();

  // GSAP
  useGSAP(
    () => {
      gsap.utils.toArray(".card").forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "center bottom",
            // markers: true,
          },
          y: 50,
          opacity: 0,
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section className={styles.FocusAreas} ref={containerRef}>
      <div className="wrapper">
        <h2>Focus Areas</h2>
        <p>
          We diversify our portfolio across environmentally conscious areas that
          align with our mission and values.
        </p>

        <div className="areas">
          {data.map((el, index) => {
            return (
              <div className="card" key={index}>
                <div>
                  <div className="card-icon">
                    <img src={el.iconSrc} alt="icon" />
                  </div>
                  <h3 className="card-heading">{el.title}</h3>
                  <p className="card-body">{el.desc}</p>
                </div>

                <p className="card-link">
                  <Link href={el.linkTo}>
                    Find out more <img src="/icons/icon-arrow-forward.svg" />
                  </Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
