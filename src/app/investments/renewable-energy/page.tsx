import CallToAction from "@/layouts/CallToAction";
import DisplayImage from "@/layouts/DisplayImage";
import Image from "next/image";

const PageRenewableEnergy = () => {
  return (
    <main className="page page-investment page-renewable-energy">
      <section className="intro">
        <div className="wrapper">
          <h1>
            <span>Investing in</span>Renewable Energy
          </h1>
          <div>
            <p>
              As the world shifts towards a more sustainable and eco-conscious
              future, investing in the renewable energy sector emerges as a
              compelling opportunity for both financial growth and global
              environmental stewardship.
            </p>
            <p>
              We believe that sustainable investments are not just about profit.
              They are about making a positive impact on the planet and securing
              a brighter future for generations to come.
            </p>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-04.jpg" />

      <section className="our-expertise">
        <div className="wrapper">
          <h2>Our Expertise</h2>
          <p>
            At Terrasage Investments, we offer a range of eco-friendly
            investment opportunities in the renewable energy sector. Our
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
                Renewable energy sources are, by their very nature, sustainable.
                They are not finite resources and do not deplete over time,
                ensuring a long-term, reliable supply.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-whatshot.svg" />
              </div>
              <h3 className="heading">Environmental Impact</h3>
              <p className="body">
                Investing in renewable energy significantly reduces greenhouse
                gas emissions, combating climate change and improving air
                quality.
              </p>
            </div>
            <div className="feature">
              <div className="icon">
                <img src="/icons/icon-wind-power.svg" />
              </div>
              <h3 className="heading">Energy Security</h3>
              <p className="body">
                Renewable energy diversifies energy sources, reducing dependence
                on fossil fuels and enhancing energy security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="invest-with-terrasage">
        <div className="wrapper">
          <div className="content">
            <h2 className="heading">
              <span>Investing in</span>Renewable Energy with Terrasage
            </h2>
            <p>
              Our portfolio consistently outperforms conventional investments,
              providing robust returns to our clients while making a positive
              impact on the planet.{" "}
            </p>
            <p>
              We&apos;re proud to report that in the last five years, our
              renewable energy investments have achieved an average annual
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
                <h3 className="name">SolarHarbor Inc.</h3>
                <p className="info">
                  SolarHarbor specializes in large-scale solar farm development,
                  with a focus on innovative solar panel technology and
                  efficient energy storage solutions.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-01.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">WindTech</h3>
                <p className="info">
                  WindTech Solutions is a leader in wind turbine design and
                  manufacturing, known for its high-efficiency wind turbines for
                  onshore and offshore applications.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-02.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
            <div className="card">
              <div className="card-wrapper">
                <h3 className="name">HydroPower Dynamics</h3>
                <p className="info">
                  HydroPower Dynamics is involved in the construction of
                  hydroelectric power plants, harnessing the energy of flowing
                  rivers to generate clean electricity.
                </p>
                {/* <p className="link"></p> */}
              </div>
              <Image
                src="/images/company-profile-03.jpg"
                width={600}
                height={600}
                alt="portfolio image"
              />
            </div>
          </div>
        </div>
      </section>

      <DisplayImage src="/images/display-05.jpg" />
      <CallToAction />
    </main>
  );
};

export default PageRenewableEnergy;
