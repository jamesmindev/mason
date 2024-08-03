import CallToAction from "@/layouts/CallToAction";
import DisplayImage from "@/layouts/DisplayImage";
import Image from "next/image";

const PageCarbonOffsetting = () => {
  return (
    <main className="page page-investment page-renewable-energy">
      <section className="intro">
        <div className="wrapper">
          <h1>
            <span>Investing in</span>Carbon Offsetting
          </h1>
          <div>
            <p>
              Carbon offsetting is a vital strategy in the fight against climate
              change. Investing in carbon offset projects helps reduce global
              greenhouse gas emissions and supports sustainable development.
            </p>
            <p>
              We believe that sustainable investments are not just about profit.
              They are about making a positive impact on the planet and securing
              a brighter future for generations to come.
            </p>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-13.jpg" />

      <section className="our-expertise">
        <div className="wrapper">
          <h2>Our Expertise</h2>
          <p>
            At Terrasage Investments, we offer a range of eco-friendly
            investment opportunities in the carbon offsetting sector. Our
            experienced team meticulously analyzes potential investments,
            ensuring they meet our rigorous environmental, social, and
            governance criteria.
          </p>
        </div>
      </section>

      <section className="why-invest">
        <div className="wrapper">
          <h2>Why Invest in Carbon Offsetting?</h2>
          <div className="features grid">
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-eco-friendly.svg" />
              </div>
              <h3 className="heading">Sustainability</h3>
              <p className="body">
                Carbon offset projects promote sustainability by supporting
                renewable energy, reforestation, and other initiatives that
                reduce carbon footprints.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-whatshot.svg" />
              </div>
              <h3 className="heading">Environmental Impact</h3>
              <p className="body">
                Investing in carbon offsets directly contributes to reducing
                greenhouse gas emissions and mitigating the effects of climate
                change.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-globe-asia.svg" />
              </div>
              <h3 className="heading">Global Responsibility</h3>
              <p className="body">
                Carbon offsetting projects support global sustainability goals
                and promote environmental responsibility across industries and
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="invest-with-terrasage">
        <div className="wrapper">
          <div className="content">
            <h2 className="heading">
              <span>Investing in</span>Carbon Offsetting with Terrasage
            </h2>
            <p>
              Our portfolio consistently outperforms conventional investments,
              providing robust returns to our clients while making a positive
              impact on the planet.{" "}
            </p>
            <p>
              We&apos;re proud to report that in the last five years, our carbon
              offsetting investments have achieved an average annual return of
              18%.
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
            src="/images/invest-with-terrasage-04.jpg"
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
                <h3 className="name">ReforestNation</h3>
                <p className="info">
                  ReforestNation focuses on reforestation projects worldwide,
                  restoring degraded lands and sequestering carbon dioxide
                  through tree planting initiatives.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-10.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">CleanEnergy Credits</h3>
                <p className="info">
                  CleanEnergy Credits invests in renewable energy projects that
                  generate carbon credits, supporting the transition to a
                  low-carbon economy.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-11.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">CarbonCapture Technologies</h3>
                <p className="info">
                  CarbonCapture Technologies develops innovative solutions for
                  capturing and storing carbon dioxide, reducing atmospheric
                  greenhouse gas levels.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-12.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-14.jpg" />
      <CallToAction />
    </main>
  );
};

export default PageCarbonOffsetting;
