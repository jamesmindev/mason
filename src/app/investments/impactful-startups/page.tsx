import CallToAction from "@/layouts/CallToAction";
import DisplayImage from "@/layouts/DisplayImage";
import Image from "next/image";

const PageImpactfulStartups = () => {
  return (
    <main className="page page-investment page-renewable-energy">
      <section className="intro">
        <div className="wrapper">
          <h1>
            <span>Investing in</span>Impactful Startups
          </h1>
          <div>
            <p>
              Investing in impactful startups drives innovation and supports
              entrepreneurs who are developing solutions for some of the
              world&apos;s most pressing environmental and social challenges.
            </p>
            <p>
              We believe that sustainable investments are not just about profit.
              They are about making a positive impact on the planet and securing
              a brighter future for generations to come.
            </p>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-15.jpg" />

      <section className="our-expertise">
        <div className="wrapper">
          <h2>Our Expertise</h2>
          <p>
            At Terrasage Investments, we offer a range of eco-friendly
            investment opportunities in impactful startups. Our experienced team
            meticulously analyzes potential investments, ensuring they meet our
            rigorous environmental, social, and governance criteria.
          </p>
        </div>
      </section>

      <section className="why-invest">
        <div className="wrapper">
          <h2>Why Invest in Renewable Energy?</h2>
          <div className="features grid">
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-eco-friendly.svg" />
              </div>
              <h3 className="heading">Sustainability</h3>
              <p className="body">
                Impactful startups are at the forefront of developing
                sustainable solutions that address environmental and social
                challenges.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-whatshot.svg" />
              </div>
              <h3 className="heading">Environmental Impact</h3>
              <p className="body">
                Investing in impactful startups supports the creation of
                innovative products and services that reduce environmental
                footprints and promote sustainability.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-science.svg" />
              </div>
              <h3 className="heading">Innovation</h3>
              <p className="body">
                Startups bring fresh perspectives and innovative approaches to
                solving global problems, driving progress and positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="invest-with-terrasage">
        <div className="wrapper">
          <div className="content">
            <h2 className="heading">
              <span>Investing in</span>Impactful startups with Terrasage
            </h2>
            <p>
              Our portfolio consistently outperforms conventional investments,
              providing robust returns to our clients while making a positive
              impact on the planet.{" "}
            </p>
            <p>
              We&apos;re proud to report that in the last five years, our
              impactful startups investments have achieved an average annual
              return of 18%.
            </p>

            <div className="stats">
              <div className="stat">
                <p className="number">18%</p>
                <p>Avg. Annual Return</p>
              </div>

              <div className="stat">
                <p className="number">$1.5B</p>
                <p>Total Investment Capital</p>
              </div>

              <div className="stat">
                <p className="number">372</p>
                <p>Total Portfolio</p>
              </div>

              <div className="stat">
                <p className="number">12%</p>
                <p>Lower Volatility Rate</p>
              </div>
            </div>
          </div>

          <Image
            className="image"
            src="/images/invest-with-terrasage-05.jpg"
            width={1000}
            height={1000}
            alt="Image for invest with terrasage"
          />
        </div>
      </section>

      <section className="our-portfolio">
        <div className="wrapper">
          <h2 className="heading">Our Investment Portfolio</h2>
          <div className="portfolios">
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">EcoInnovate Labs</h3>
                <p className="info">
                  EcoInnovate Labs supports early-stage startups developing
                  cutting-edge technologies for renewable energy, waste
                  reduction, and sustainable living.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-16.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">GreenTech Ventures</h3>
                <p className="info">
                  GreenTech Ventures invests in startups focused on creating
                  environmentally-friendly technologies that enhance energy
                  efficiency and reduce pollution.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-17.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">SustainFuture Enterprises</h3>
                <p className="info">
                  SustainFuture Enterprises partners with startups working on
                  social and environmental impact projects, providing funding
                  and mentorship to scale their solutions.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-18.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-16.jpg" />
      <CallToAction />
    </main>
  );
};

export default PageImpactfulStartups;
