"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./WhyChooseMason.module.scss";
import { useRef } from "react";

const data = [
  {
    title: "Low Deposit Requirement",
    desc: "At Mason, we believe that owning a home should be accessible to everyone. That's why we offer the opportunity to purchase residential properties with low deposits.",
    iconSrc: "/icons/icon-savings.svg",
  },
  {
    title: "Flexible Financing",
    desc: "We understand that every financial situation is unique and our flexible loan options ensure you get the most suitable terms for your financial circumstances.",
    iconSrc: "/icons/icon-account-tree.svg",
  },
  {
    title: "Streamlined Process",
    desc: "From application to approval, our dedicated team work to ensure a smooth and stress-free experience, so you can focus on finding your perfect home.",
    iconSrc: "/icons/icon-acute.svg",
  },
  {
    title: "Expert Support",
    desc: "Our knowledgeable team is here to guide you through every step of the process. We provide personalized support to help you make informed decisions.",
    iconSrc: "/icons/icon-volunteer-activism.svg",
  },
  {
    title: "Transparent and Trustworthy",
    desc: "With commitment to transparency, we provide clear information about our financial products, so you can make decisions with confidence.",
    iconSrc: "/icons/icon-search-check.svg",
  },
  {
    title: "Customer-Centric",
    desc: "Our customers are at the heart of everything we do. We’re dedicated to providing a personalized experience tailored to your specific needs and goals.",
    iconSrc: "/icons/icon-diversity.svg",
  },
];

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";
import clsx from "clsx";
gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

const WhyChooseMason = () => {
  const containerRef = useRef(null);

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
    <section id="why-choose-mason" className={styles.WhyChooseMason} ref={containerRef}>
      <div className="wrapper">
        <h2>Why Choose Mason</h2>
        {/* <p>
          We diversify our portfolio across environmentally conscious areas that
          align with our mission and values.
        </p> */}

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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMason;
