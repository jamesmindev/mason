"use client";

/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import CallToAction from "@/layouts/CallToAction";
import DisplayImage from "@/layouts/DisplayImage";
import FocusAreas from "@/layouts/FocusAreas";
import SiteHeader from "@/layouts/SiteHeader";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import PageAnim from "@/layouts/PageAnim";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

export default function Home() {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      gsap.utils
        .toArray(".investment-strategies .card")
        .forEach((el: any, index: number) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top+=200px bottom",
              // end: "bottom bottom-=200px",
              // markers: true,
              // scrub: true,
              // toggleActions: "play complete reverse reverse",
            },
            y: 30,
            opacity: 0,
            delay: index * 0.2,
            ease: CustomEase.create("custom", "M0,0 C0.399,0 0.157,1.036 1,1 "),
          });
        });
    },
    { scope: containerRef },
  );

  return (
    <PageAnim>
      <main className="page-home" ref={containerRef}>

        <Logo />
        {/* Hero Section */}
        <section className="hero">
          <Image
            src="/images/home-hero.jpg"
            width={4000}
            height={4000}
            alt="Site hero image"
            className="hero-image"
          />

          <div className="wrapper">
            <h1 className="">
              We create a sustainable future with{" "}
              <br className="mobile-hidden" />
              innovative investment strategies
            </h1>
            <Button href="/register" size="md">
              Register Interest
            </Button>
          </div>
        </section>

        <section className="stats-container">
          <div className="wrapper">
            <div className="stat">
              <div className="stat-icon">
                <img src="/icons/icon-whatshot.svg" alt="stat icon" />
              </div>
              <div className="">
                <p className="stat1">18%</p>
                <p className="stat2">Avg. Annual Return</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <img src="/icons/icon-monetization.svg" alt="stat icon" />
              </div>
              <div className="">
                <p className="stat1">$1.5B</p>
                <p className="stat2">Total Investment Capital</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <img src="/icons/icon-trending-down.svg" alt="stat icon" />
              </div>
              <div className="">
                <p className="stat1">20%</p>
                <p className="stat2">Lower Volatility Rate</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <img src="/icons/icon-work.svg" alt="stat icon" />
              </div>
              <div className="">
                <p className="stat1">1,000+</p>
                <p className="stat2">Jobs Created</p>
              </div>
            </div>
          </div>
        </section>

        <section className="investment-strategies">
          <div className="wrapper">
            <h2>Investment Strategies</h2>
            <p>
              Our investment strategies reflect our commitment to delivering
              financial returns with meaningful contributions to a more
              sustainable future.
            </p>

            <div className="strategies">
              <div className="card">
                <div className="card-info">
                  <h3>
                    <span>01</span>Thematic Investing
                  </h3>
                  <p>
                    This strategy involves building a portfolio around specific
                    themes, such as renewable energy, clean technology, or
                    sustainable agriculture.
                  </p>
                </div>

                <Image
                  className="card-image"
                  src="/images/strategy-01.jpg"
                  width={500}
                  height={500}
                  alt="card-image"
                />
              </div>
              <div className="card">
                <div className="card-info">
                  <h3>
                    <span>02</span>Impact Investing Fund
                  </h3>
                  <p>
                    This strategy focuses on business initiatives that generate
                    measurable and positive environmental and social outcomes.
                  </p>
                </div>

                <Image
                  className="card-image"
                  src="/images/strategy-02.jpg"
                  width={500}
                  height={500}
                  alt="card-image"
                />
              </div>
              <div className="card">
                <div className="card-info">
                  <h3>
                    <span>03</span>ESG Integration
                  </h3>
                  <p>
                    This strategy involves assessing companies based on their
                    sustainability practices and selecting investments with
                    strong ESG performance.
                  </p>
                </div>

                <Image
                  className="card-image"
                  src="/images/strategy-03.jpg"
                  width={500}
                  height={500}
                  alt="card-image"
                />
              </div>
            </div>
          </div>
        </section>

        <DisplayImage src="/images/display-01.jpg" />

        <div id="focus-areas"></div>
        <FocusAreas />

        <CallToAction />
      </main>
    </PageAnim>
  );
}
