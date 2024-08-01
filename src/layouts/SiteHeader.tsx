"use client";

import { useState, useRef } from "react";
import styles from "./SiteHeader.module.scss";

import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

// fixed z-50 w-full
const SiteHeader = () => {
  const siteHeaderRef = useRef(null);
  const siteHeaderWrapperRef = useRef(null);
  const mobileMenuLinksRef = useRef(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hideMobileMenu = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 300);
  };

  // GSAP animation
  useGSAP(() => {
    gsap.fromTo(
      siteHeaderRef.current,
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        // y: 80,
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
      },
    );

    // gsap.to(siteHeaderRef.current, {
    //   // x: 500,
    //   scrollTrigger: {
    //     trigger: siteHeaderRef.current,
    //     start: 40,
    //     // toggleClass: "scroll",
    //     end: "bottom+=1000000000px",
    //     toggleActions: "play complete complete reverse",
    //   },
    //   duration: 0.5,
    //   background: "rgba(255, 255, 255, 0.4)",
    //   ease: "sine.inOut",
    //   backdropFilter: "blur(5px)",
    // });
  });

  return (
    <header
      ref={siteHeaderRef}
      className={styles.SiteHeader}
      // style={{ opacity: 0 }}
    >
      <div
        ref={siteHeaderWrapperRef}
        className={`wrapper ${isMobileMenuOpen ? "white-bg" : ""}`}
      >
        <Link className="link-logo" href="/" onClick={hideMobileMenu}>
          <Logo fillColor="#E9E8E2"/>
        </Link>

        <div
          id="mobile-menu"
          onClick={(e) => {
            setIsMobileMenuOpen((prev) => !prev);
          }}
        >
          menu
        </div>

        <div
          className={`links-container ${isMobileMenuOpen ? "visible" : ""}`}
          ref={mobileMenuLinksRef}
          onClick={hideMobileMenu}
        >
          <nav className="">
            <ul className="">
              <li className="">
                <Link className="" href="/investments" onClick={hideMobileMenu}>
                  How it works
                </Link>
              </li>
              <li>
                <Link className="" href="/about">
                  Why Mason
                </Link>
              </li>
              <li>
                <Link className="" href="/about">
                  FAQ
                </Link>
              </li>
              <li>
                {/* <Link className="" href="/about">
                  Apply Now
                </Link> */}
                <Button href="/register" size="sm">
                  Apply Now
                </Button>
              </li>
            </ul>
          </nav>

          {/* <Button href="/register" size="sm">
            Register Interest
          </Button> */}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
