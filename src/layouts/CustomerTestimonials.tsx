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
          <div className="bento-left">
            <div className="icons">
              <img src="/icons/icon-sentiment-satisfied.svg" alt="" />
              <img src="/icons/icon-chat.svg" alt="" />
              <img src="/icons/icon-favorite.svg" alt="" />
            </div>
            <div className="testimonial-highlight">
              <div className="copy">
                <div className="icon">
                  <img src="/icons/icon-favorite.svg" alt="" />
                </div>
                <p>I was worried about the upfront costs of buying a home, but Mason's flexible financing options made it affordable. Their customer service is top-notch!</p>
              </div>
              <p className="customer-name">David L.</p>
            </div>
          </div>

          <div className="bento-right">
            <div className="bento-top">
              <div className="testimonial-basic">
                <p>Mason made buying our first home a reality with just a 5% deposit. The process was smooth, and the team was incredibly supportive throughout. We felt informed and confident every step of the way. Thanks to Mason, we're now proud homeowners!</p>
                <p className="customer-name">John D.</p>
              </div>
              <div className="testimonial-highlight">
                <div className="copy">
                  <div className="icon">
                    <img src="/icons/icon-sentiment-satisfied.svg" alt="" />
                  </div>
                  <p>Mason’s team was always available to answer my questions and their support made all the difference in purchasing my new home.</p>
                </div>
                <p className="customer-name">Nick C.</p>
              </div>
            </div>
            <div className="bento-btm">
              <div className="testimonial-basic">
                <p>Mason simplified the entire home-buying process for us. From application to moving in, everything was straightforward and stress-free. We appreciated their transparency and constant communication. We highly recommend Mason to anyone looking to buy a home.</p>
                <p className="customer-name">Alex and Maria T.</p>
              </div>
              <div className="logo-container">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMason;
