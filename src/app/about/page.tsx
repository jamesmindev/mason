"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import Logo from "@/components/Logo";
import CallToAction from "@/layouts/CallToAction";
import DisplayImage from "@/layouts/DisplayImage";
import OurPerformance from "@/layouts/OurPerformance";
import PageAnim from "@/layouts/PageAnim";
import Image from "next/image";

// GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

const About = () => {
  const pageRef = useRef();

  useGSAP(
    () => {
      gsap.from(".intro-hero > svg", {
        scale: 0.97,
        duration: 1.2,
        ease: CustomEase.create("custom", "M0,0 C0.399,0 0.157,1.036 1,1 "),
      });

      gsap.utils.toArray(".value")!.forEach((el: any, index: number) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "center+=200px bottom",
            // markers: true,
          },
          y: 20,
          opacity: 0,
        });
      });
    },
    { scope: pageRef },
  );

  return (
    <PageAnim>
      <main ref={pageRef} className="page page-about">
        <section className="intro-hero">
          {/* <Image src="/images/about-hero.png" alt="" width={2000} height={2000} /> */}
          <Logo fillColor="#ffffff" />
        </section>

        <section className="our-mission">
          <div className="wrapper">
            <h1 className="heading">Our Mission</h1>
            <p className="body">
              We empower individuals and organizations to invest in a brighter
              and more sustainable future. Together, we are building a world
              where prosperity and sustainability go hand in hand.
            </p>
          </div>
        </section>

        <section className="terrasage-values">
          <div className="wrapper">
            <div className="values-desc">
              <h2 className="heading">Terrasage values</h2>
              <p className="body">
                Our values reflect Terrasage Investments&apos; commitment to
                making a meaningful difference in the world by combining
                financial success with ethical, environmentally responsible, and
                socially conscious practices.
              </p>
            </div>
            <div className="values-list">
              <div className="value">
                <div className="value-image">
                  <img src="/icons/icon-eco-leaf.svg" alt="icon" />
                </div>
                <div className="value-info">
                  <h4 className="value-name">Sustainability</h4>
                  <p className="value-desc">
                    Terrasage Investments is deeply committed to environmental
                    sustainability. We prioritize investments that have a
                    positive impact on the planet, striving to contribute to a
                    more sustainable and resilient future.
                  </p>
                </div>
              </div>
              <div className="value">
                <div className="value-image">
                  <img src="/icons/icon-diversity.svg" alt="icon" />
                </div>
                <div className="value-info">
                  <h4 className="value-name">Ethical Investing</h4>
                  <p className="value-desc">
                    We adhere to the highest ethical standards in our investment
                    practices. Our commitment to responsible investing means we
                    prioritize companies and projects with strong environmental
                    and social governance practices.
                  </p>
                </div>
              </div>
              <div className="value">
                <div className="value-image">
                  <img src="/icons/icon-clear-day.svg" alt="icon" />
                </div>
                <div className="value-info">
                  <h4 className="value-name">Transparency</h4>
                  <p className="value-desc">
                    Transparency is at the core of our values. We believe in
                    open and honest communication with our clients, providing
                    them with clear and accurate information about their
                    investments and the impact they make.
                  </p>
                </div>
              </div>
              <div className="value">
                <div className="value-image">
                  <img src="/icons/icon-science2.svg" alt="icon" />
                </div>
                <div className="value-info">
                  <h4 className="value-name">Innovation</h4>
                  <p className="value-desc">
                    We embrace innovation in the field of sustainable finance.
                    We continually seek new and innovative ways to generate
                    positive environmental and social outcomes while delivering
                    competitive financial returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <OurPerformance />

        <DisplayImage src="/images/display-18.jpg" />

        <section className="careers" id="careers">
          <div className="wrapper">
            <div className="careers-intro">
              <h2>Careers</h2>
              <p>
                At Terrasage Investments, we&apos;re on a mission to
                revolutionize the world of sustainable finance. We&apos;re
                seeking talented individuals who are ready to embark on a
                rewarding journey that blends financial expertise with a
                commitment to a brighter, greener future.
              </p>
            </div>
            <div className="careers-positions">
              <h3 className="heading">
                <p>Open positions</p>
                <div className="line"></div>
              </h3>
              <div className="positions-list">
                {/* <div className="position">
                  <div>
                    <p className="position-name">
                      Investment Analyst - Renewable Energy
                    </p>
                    <p className="position-loc">Remote</p>
                  </div>
                  <div className="link-icon"></div>
                </div> */}

                <div className="position no-position">
                  <p>No open position at this time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </PageAnim>
  );
};

export default About;
