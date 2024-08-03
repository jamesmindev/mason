"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./CustomerTestimonials.module.scss";
import { useRef } from "react";
import clsx from "clsx";
import Logo from "@/components/Logo";

// GSAP
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CustomEase } from "gsap/all";
// gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

const WhyChooseMason = () => {
  const containerRef = useRef(null);

  // GSAP
  // useGSAP(
  //   () => {
  //     gsap.utils.toArray(".card").forEach((el: any) => {
  //       gsap.from(el, {
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "center bottom",
  //           // markers: true,
  //         },
  //         y: 50,
  //         opacity: 0,
  //       });
  //     });
  //   },
  //   { scope: containerRef },
  // );

  return (
    <section id="customer-testimonials" className={styles.CustomerTestimonials} ref={containerRef}>
      <div className="wrapper">
        <h2>What our customers say</h2>

        <div className="testimonials">
          <div className="card">
            <div className="content">
              <img src="/images/customer-01.jpg" alt="customer-photo" />
              <p>Running a boutique retail store, we needed a robust POS system for in-store and online sales. State's POS system is easy to use with our inventory, streamlining operations and enhancing customer service.</p>
            </div>
            <div className="customer-info">
              <p>Michael Peterson</p>
              <p>Owner of Urban Boutique</p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img src="/images/customer-02.jpg" alt="customer-photo" />
              <p>Managing payments used to be a headache, but State's online payment processing has made it effortless. Our customers love the convenience, and we've seen more online orders. State's platform is intuitive and reliable.</p>
            </div>
            <div className="customer-info">
              <p>Emily Thompson</p>
              <p>Owner of Green Gardens</p>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <img src="/images/customer-03.jpg" alt="customer-photo" />
              <p>Our consulting firm relies heavily on accurate invoicing. State's invoicing system has transformed our billing process. The automated reminders and easy tracking have reduced our workload, allowing us to focus on clients.</p>
            </div>
            <div className="customer-info">
              <p>Ben Robertson</p>
              <p>Founder of Insight Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMason;
