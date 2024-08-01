import Logo from "@/components/Logo";
import Link from "next/link";

import styles from "./SiteFooter.module.scss";

const SiteFooter = () => {
  return (
    <footer className={styles.SiteFooter}>
      <div className="wrapper">
        <div className="main-nav">
          <Logo fillColor="#ffffff" height={28} />

          <nav>
            <ul>
              <li>
                <Link href="/investments">Investments</Link>
              </li>
              <li>
                <Link href="/#focus-areas">Focus Areas</Link>
              </li>
              {/* <li>
                <Link href="/">News</Link>
              </li> */}
              <li>
                <Link href="/register">Register Interest</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about#careers">Careers</Link>
              </li>
              {/* <li>
                <Link href="/">Privacy Policy</Link>
              </li> */}
              <li>
                <Link href="/legal">Legal</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="site-info">
          <p className="copyright">
            Copyright &copy; 2020-{new Date().getFullYear()} Terrasage
            Investments. All rights reserved.&nbsp;
            <br className="mobile-hidden" />
            Terrasage is a concept project made by James Min. It is not
            affiliated with any real business.
          </p>

          <p className="about-this-project"></p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
