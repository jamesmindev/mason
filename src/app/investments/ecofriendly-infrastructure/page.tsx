import CallToAction from "@/layouts/CallToAction";
import DisplayImage from "@/layouts/DisplayImage";
import Image from "next/image";

const PageEcoFriendlyInfrastructure = () => {
  return (
    <main className="page page-investment page-renewable-energy">
      <section className="intro">
        <div className="wrapper">
          <h1>
            <span>Investing in</span>Eco-Friendly Infrastructure
          </h1>
          <div>
            <p>
              Eco-friendly infrastructure is essential for creating sustainable
              and resilient cities. Investing in this sector supports the
              development of green transportation, energy-efficient buildings,
              and sustainable urban planning.
            </p>
            <p>
              We believe that sustainable investments are not just about profit.
              They are about making a positive impact on the planet and securing
              a brighter future for generations to come.
            </p>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-17.jpg" />

      <section className="our-expertise">
        <div className="wrapper">
          <h2>Our Expertise</h2>
          <p>
            At Terrasage Investments, we offer a range of eco-friendly
            investment opportunities in the eco-friendly infrastructure sector.
            Our experienced team meticulously analyzes potential investments,
            ensuring they meet our rigorous environmental, social, and
            governance criteria.
          </p>
        </div>
      </section>

      <section className="why-invest">
        <div className="wrapper">
          <h2>Why Invest in Eco-Friendly Infrastructure?</h2>
          <div className="features grid">
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-eco-friendly.svg" />
              </div>
              <h3 className="heading">Sustainability</h3>
              <p className="body">
                Eco-friendly infrastructure promotes sustainable urban
                development by reducing energy consumption, minimizing waste,
                and enhancing resource efficiency.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-whatshot.svg" />
              </div>
              <h3 className="heading">Environmental Impact</h3>
              <p className="body">
                Investing in eco-friendly infrastructure reduces environmental
                degradation, improves air quality, and supports climate
                resilience.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-person-play.svg" />
              </div>
              <h3 className="heading">Quality of Life</h3>
              <p className="body">
                Eco-friendly infrastructure projects improve the quality of life
                by providing clean transportation, green spaces, and
                energy-efficient buildings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="invest-with-terrasage">
        <div className="wrapper">
          <div className="content">
            <h2 className="heading">
              <span>Investing in</span>Eco-Friendly Infrastructure with
              Terrasage
            </h2>
            <p>
              Our portfolio consistently outperforms conventional investments,
              providing robust returns to our clients while making a positive
              impact on the planet.{" "}
            </p>
            <p>
              We&apos;re proud to report that in the last five years, our
              eco-friendly infrastructure investments have achieved an average
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
            src="/images/invest-with-terrasage-01.jpg"
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
                <h3 className="name">GreenTransit Networks</h3>
                <p className="info">
                  GreenTransit Networks develops sustainable public
                  transportation systems, reducing traffic congestion and
                  lowering carbon emissions in urban areas.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-13.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">EcoBuild Constructors</h3>
                <p className="info">
                  EcoBuild Constructors specializes in constructing
                  energy-efficient buildings and infrastructure projects with a
                  focus on sustainability and resilience.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-14.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">UrbanEco Solutions</h3>
                <p className="info">
                  UrbanEco Solutions provides sustainable urban planning
                  services, creating eco-friendly communities that prioritize
                  environmental stewardship and quality of life.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-15.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-04.jpg" />
      <CallToAction />
    </main>
  );
};

export default PageEcoFriendlyInfrastructure;
