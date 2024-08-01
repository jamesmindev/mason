import PageAnim from "@/layouts/PageAnim";

const PageLegal = () => {
  return (
    <PageAnim>
      <div className="page-legal">
        <div className="page-intro">
          <div className="wrapper">
            <h1>Legal</h1>
          </div>
        </div>
        <div className="content">
          <div className="wrapper">
            <div className="legal-notice">
              <h2 className="heading">Legal Notice &amp; Disclaimer</h2>
              <div className="section">
                <h3 className="sub-heading">Non-Financial Advice</h3>
                <p>
                  The content on this website is provided for informational
                  purposes only and does not constitute financial, legal, or
                  investment advice. Users should seek advice from a qualified
                  professional before making any investment decisions.
                </p>
              </div>
              <div className="section">
                <h3 className="sub-heading">Investment Risks</h3>
                <p>
                  All investments carry inherent risks. Terrasage does not
                  guarantee the performance of any investment, and past
                  performance is not indicative of future results. Users should
                  be aware that investments can fluctuate in value and that they
                  may lose some or all of their initial investment.
                </p>
              </div>
              <div className="section">
                <h3 className="sub-heading">Environmental Focus</h3>
                <p>
                  While Terrasage focuses on environmentally friendly projects,
                  it does not provide any warranty or guarantee regarding the
                  environmental impact or sustainability of the investments.
                  Users are encouraged to conduct their own research and due
                  diligence.
                </p>
              </div>
              <div className="section">
                <h3 className="sub-heading">Third-Party Links</h3>
                <p>
                  This website may contain links to third-party websites.
                  Terrasage is not responsible for the content or privacy
                  practices of these external sites.
                </p>
              </div>
            </div>

            <div className="privacy-policy">
              <h2 className="heading">Privacy Policy</h2>
              <div className="section">
                <h3 className="sub-heading">1. Introduction</h3>
                <p>
                  Terrasage is committed to protecting your privacy. This policy
                  outlines how we collect, use, and safeguard your personal
                  information.
                </p>
              </div>

              <div className="section">
                <h3 className="sub-heading">2. Information We Collect</h3>
                <ul>
                  <li>
                    <em>Personal Information</em>: We may collect personal
                    information such as your name, email address, phone number,
                    and mailing address when you interact with our website or
                    services.
                  </li>

                  <li>
                    <em>Usage Data</em>: We collect information about how you
                    use our website, such as your IP address, browser type,
                    pages visited, and the date and time of your visit.
                  </li>
                </ul>
              </div>

              <div className="section">
                <h3 className="sub-heading">3. How We Use Your Information</h3>
                <ul>
                  <li>
                    <em>Service Provision</em>: To provide and maintain our
                    services, including responding to inquiries and processing
                    transactions.
                  </li>
                  <li>
                    <em>Communication</em>: To send you updates, newsletters,
                    and other communications related to our services. You can
                    opt-out of these communications at any time.
                  </li>
                  <li>
                    <em>Improvement</em>: To improve our website and services
                    based on user behavior and feedback.
                  </li>
                </ul>
              </div>

              <div className="section">
                <h3 className="sub-heading">4. Information Sharing</h3>
                <ul>
                  <li>
                    <em>Third-Party Service Providers</em>: We may share your
                    information with third-party service providers who assist us
                    in operating our website and conducting our business. These
                    providers are bound by confidentiality agreements and are
                    not permitted to use your information for any other purpose.
                  </li>
                  <li>
                    <em>Legal Requirements</em>: We may disclose your
                    information if required by law or in response to valid
                    requests by public authorities.
                  </li>
                </ul>
              </div>

              <div className="section">
                <h3 className="sub-heading">5. Security</h3>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information from unauthorized access,
                  use, or disclosure.
                </p>
              </div>

              <div className="section">
                <h3 className="sub-heading">6. Your Rights</h3>
                <ul>
                  <li>
                    <em>Access</em>: You have the right to request access to the
                    personal information we hold about you.
                  </li>
                  <li>
                    <em>Correction</em>: You have the right to request the
                    correction of inaccurate personal information.
                  </li>
                  <li>
                    <em>Deletion</em>: You have the right to request the
                    deletion of your personal information, subject to certain
                    legal obligations.
                  </li>
                </ul>
              </div>

              <div className="section">
                <h3 className="sub-heading">7. Changes to This Policy</h3>
                <p>
                  We may update this policy from time to time. Any changes will
                  be posted on this page with an updated effective date.
                </p>
                <p>Effective Date: 3 July 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageAnim>
  );
};

export default PageLegal;
