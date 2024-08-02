"use client";

/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import CallToAction from "@/layouts/CallToAction";
import DisplayImage from "@/layouts/DisplayImage";
import WhyChooseMason from "@/layouts/WhyChooseMason";
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
import CustomerTestimonials from "@/layouts/CustomerTestimonials";
import FAQ from "@/layouts/FAQ";
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

        {/* Hero Section */}
        <section className="hero">
          <div className="wrapper">
            <div className="hero-content">
              <h1 className="">Your home, with as little as 5% deposit</h1>
              <p>With as little as a 5% deposit and financing the rest through a manageable loan, Mason helps you purchase your dream home sooner.</p>
              <Button href="/apply" size="rg">
                Apply Now
              </Button>
            </div>
            <div className="image-container">
              <img src="/images/home-01.jpg" alt="" />
              <img src="/images/home-02.jpg" alt="" />
            </div>
          </div>
        </section>


        <section id="how-it-works" className="how-it-works">
          <div className="wrapper">
            <div className="sticky-container">
              <div className="section-intro">
                <h2>How it works</h2>
                <p>With Mason, secure your dream home with just a 5% deposit and a seamless, supportive process, making homeownership more accessible and stress-free than ever before.</p>
                <Button href="/apply" orange={true}>Start Your Application</Button>
              </div>
            </div>
            <div className="steps">
              <div className="step">
                <div className="number">1</div>
                <div className="description">
                  <p>Apply Online</p>
                  <p>Start by completing a simple application form.</p>
                </div>
              </div>
              <div className="step">
                <div className="number">2</div>
                <div className="description">
                  <p>Get Approved</p>
                  <p>Our team will review your application and provide you with financing options.</p>
                </div>
              </div>
              <div className="step">
                <div className="number">3</div>
                <div className="description">
                  <p>Find Your Home</p>
                  <p>With your financing in place, you can start house-hunting with confidence.</p>
                </div>
              </div>
              <div className="step">
                <div className="number">4</div>
                <div className="description">
                  <p>Move In</p>
                  <p>Once you've chosen your property, we'll help finalize the purchase so you can enjoy your new home.</p>
                </div>
              </div>
              <div className="more-info">
                <div className="description">
                  <p>Need more information?</p>
                  <p>Download our comprehensive Mason Product Guide for all the details and insights you need.</p>
                </div>
                <div className="link">
                  <Button href="/#" size="sm">Download Product Guide</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseMason />
        <DisplayImage src="/images/display-01.jpg" />
        <CustomerTestimonials />
        <FAQ />
        <CallToAction />
      </main>
    </PageAnim>
  );
}
