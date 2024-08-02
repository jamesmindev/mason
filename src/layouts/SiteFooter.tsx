import Logo from "@/components/Logo";
import Link from "next/link";

import styles from "./SiteFooter.module.scss";

const SiteFooter = () => {
  return (
    <footer className={styles.SiteFooter}>
      <div className="wrapper">
        <Logo fillColor="" height={64} />

        <div className="footer-nav-container">
          <nav>
            <ul>
              <li>
                <Link href="/#how-it-works">How It Works</Link>
              </li>
              <li>
                <Link href="/#faq">FAQs</Link>
              </li>
              <li>
                <Link href="/#why-choose-mason">Why Mason</Link>
              </li>
              <li>
                Mason Product Guide
              </li>
            </ul>
            <ul>
              <li>
                About Us
              </li>
              <li>
                Support
              </li>
              <li>
                Privacy Policy
              </li>
              <li>
                Terms of Service
              </li>
            </ul>
          </nav>

          <div className="site-info">
            <p className="notice">
              The financial products and services offered by Mason are subject to approval and may vary based on individual financial circumstances. All loan terms, including interest rates and repayment conditions, are subject to change and will be outlined in the final agreement. Mason does not guarantee approval or specific terms and conditions, which are determined based on a comprehensive review of your financial profile. Please consult with a financial advisor to ensure that our products are suitable for your personal financial situation. Mason is a concept project made by James Min. It is not affiliated with any real business.              
            </p>

            <p className="about-this-project"></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
