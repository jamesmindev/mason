"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./FAQ.module.scss";
import { useRef } from "react";
import clsx from "clsx";

const data = [
  {
    title: "How much do I need for a deposit?",
    desc: "With Mason, you only need a 5% deposit of the property price to get started.",
  },
  {
    title: "What types of properties can I purchase with Mason?",
    desc: "Mason’s financial product can be used to purchase various residential properties such as houses, townhouses, and apartments.",
  },
  {
    title: "What are the interest rates on the loan?",
    desc: "Interest rates vary based on your financial profile and current market conditions. Contact us for personalized rate information.",
  },
  {
    title: "Can I use Mason’s product if I have a low credit score?",
    desc: "We consider various factors beyond just credit scores. Contact us to discuss your specific situation and explore your options.",
  },
  {
    title: "How do I apply for Mason’s financial product?",
    desc: "Simply fill out our online application form with your basic financial information, and our team will review it to provide tailored financing options.",
  },
  {
    title: "Is there any flexibility in the loan repayment terms?",
    desc: "Yes, we offer flexible loan repayment terms to suit your financial needs and goals. Our team will work with you to find the best solution.",
  },
  {
    title: "How long does the approval process take?",
    desc: "The approval process can take from a few days to a few weeks, depending on the completeness of your application and the complexity of your financial situation.",
  },
  {
    title: "Are there any additional fees or hidden costs?",
    desc: "Mason is committed to transparency. Any fees or costs associated with our financial product will be clearly outlined upfront, so there are no surprises.",
  },
];

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

const FAQ = () => {
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
    <section id="faq" className={styles.faq} ref={containerRef}>
      <div className="wrapper">
        <h2>FAQs</h2>

        <div className="areas">
          {data.map((el, index) => {
            return (
              <div className="card" key={index}>
                <div>
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

export default FAQ;
