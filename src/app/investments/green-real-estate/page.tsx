import CallToAction from "@/layouts/CallToAction";
import DisplayImage from "@/layouts/DisplayImage";
import Image from "next/image";

const PageGreenRealEstate = () => {
  return (
    <main className="page page-investment page-renewable-energy">
      <section className="intro">
        <div className="wrapper">
          <h1>
            <span>Investing in</span>Green Real Estate
          </h1>
          <div>
            <p>
              The real estate sector is evolving towards more sustainable and
              eco-friendly practices. Investing in green real estate not only
              yields financial returns but also contributes to building a
              healthier and more sustainable urban environment.
            </p>
            <p>
              We believe that sustainable investments are not just about profit.
              They are about making a positive impact on the planet and securing
              a brighter future for generations to come.
            </p>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-10.jpg" />

      <section className="our-expertise">
        <div className="wrapper">
          <h2>Our Expertise</h2>
          <p>
            At Terrasage Investments, we offer a range of eco-friendly
            investment opportunities in the green real estate sector. Our
            experienced team meticulously analyzes potential investments,
            ensuring they meet our rigorous environmental, social, and
            governance criteria.
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
                Green buildings utilize energy-efficient designs and materials,
                reducing energy consumption and minimizing environmental impact.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-whatshot.svg" />
              </div>
              <h3 className="heading">Environmental Impact</h3>
              <p className="body">
                Investing in green real estate reduces carbon emissions,
                promotes sustainable urban development, and enhances indoor
                environmental quality.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-cardiology.svg" />
              </div>
              <h3 className="heading">Health and Wellness</h3>
              <p className="body">
                Green buildings provide healthier living and working
                environments through improved air quality, natural lighting, and
                sustainable materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="invest-with-terrasage">
        <div className="wrapper">
          <div className="content">
            <h2 className="heading">
              <span>Investing in</span>Green Real Estate with Terrasage
            </h2>
            <p>
              Our portfolio consistently outperforms conventional investments,
              providing robust returns to our clients while making a positive
              impact on the planet.{" "}
            </p>
            <p>
              We&apos;re proud to report that in the last five years, our green
              real estate investments have achieved an average annual return of
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
            src="/images/invest-with-terrasage-03.jpg"
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
                <h3 className="name">EcoLiving Residences</h3>
                <p className="info">
                  EcoLiving Residences develops energy-efficient residential
                  buildings with a focus on sustainable design and renewable
                  energy integration.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-07.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">GreenSpace Commercial</h3>
                <p className="info">
                  GreenSpace Commercial specializes in eco-friendly office
                  spaces, enhancing employee well-being and reducing operational
                  costs through sustainable practices.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-08.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">UrbanRenew Projects</h3>
                <p className="info">
                  UrbanRenew Projects revitalizes urban areas by transforming
                  old buildings into modern, energy-efficient, and sustainable
                  structures.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-09.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-11.jpg" />
      <CallToAction />
    </main>
  );
};

export default PageGreenRealEstate;
