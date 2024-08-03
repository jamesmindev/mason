import CallToAction from "@/layouts/CallToAction";
import DisplayImage from "@/layouts/DisplayImage";
import Image from "next/image";

const PageSustainableAgriculture = () => {
  return (
    <main className="page page-investment page-renewable-energy">
      <section className="intro">
        <div className="wrapper">
          <h1>
            <span>Investing in</span>Sustainable Agriculture
          </h1>
          <div>
            <p>
              As the global demand for food rises, investing in sustainable
              agriculture becomes a key strategy for ensuring food security
              while protecting our natural resources.
            </p>
            <p>
              We believe that sustainable investments are not just about profit.
              They are about making a positive impact on the planet and securing
              a brighter future for generations to come.
            </p>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-06.jpg" />

      <section className="our-expertise">
        <div className="wrapper">
          <h2>Our Expertise</h2>
          <p>
            At Terrasage Investments, we offer a range of eco-friendly
            investment opportunities in the sustainable agriculture sector. Our
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
                Sustainable agriculture practices conserve resources, improve
                soil health, and increase biodiversity, ensuring long-term
                agricultural productivity.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-whatshot.svg" />
              </div>
              <h3 className="heading">Environmental Impact</h3>
              <p className="body">
                Investing in sustainable agriculture reduces carbon footprints,
                promotes water conservation, and enhances ecosystem resilience.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-egg.svg" />
              </div>
              <h3 className="heading">Food Security</h3>
              <p className="body">
                Sustainable agriculture practices improve food security by
                increasing crop yields and resilience to climate change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="invest-with-terrasage">
        <div className="wrapper">
          <div className="content">
            <h2 className="heading">
              <span>Investing in</span>Sustainable Agriculture with Terrasage
            </h2>
            <p>
              Our portfolio consistently outperforms conventional investments,
              providing robust returns to our clients while making a positive
              impact on the planet.{" "}
            </p>
            <p>
              We&apos;re proud to report that in the last five years, our
              sustainable agriculture investments have achieved an average
              annual return of 18%.
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
            src="/images/invest-with-terrasage-02.jpg"
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
                <h3 className="name">AgroFuture Farms</h3>
                <p className="info">
                  AgroFuture Farms focuses on organic farming practices and
                  sustainable crop production, providing healthy and
                  environmentally-friendly food products.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-04.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">GreenFields Cooperative</h3>
                <p className="info">
                  GreenFields Cooperative supports small-scale farmers by
                  providing access to sustainable farming techniques and fair
                  trade markets.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-05.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">BioHarvest Innovations</h3>
                <p className="info">
                  BioHarvest Innovations develops advanced agricultural
                  technologies that improve crop yields and reduce the
                  environmental impact of farming.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-06.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-09.jpg" />
      <CallToAction />
    </main>
  );
};

export default PageSustainableAgriculture;
