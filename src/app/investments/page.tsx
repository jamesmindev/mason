"use client";

import CallToAction from "@/layouts/CallToAction";
import FocusAreas from "@/layouts/FocusAreas";
import OurPerformance from "@/layouts/OurPerformance";
import { useState } from "react";
import clsx from "clsx";
import DisplayImage from "@/layouts/DisplayImage";
import PageAnim from "@/layouts/PageAnim";

const PageInvestments = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <PageAnim>
      <main className="page-investments page">
        <section className="page-intro">
          <div className="wrapper">
            <h1>Investments</h1>
          </div>
        </section>

        <FocusAreas />
        <OurPerformance />
        <DisplayImage src="/images/display-12.jpg" />

        <section className="investment-strategies">
          <div className="wrapper">
            <h2>Investment Strategies</h2>
            <p>
              Our investment strategies reflect our commitment to delivering
              financial returns with meaningful contributions to a more
              sustainable future.
            </p>

            <div className="investment-detail">
              <div>
                <div className="index">
                  <div
                    className={clsx("button", activeTab == 0 ? "active" : "")}
                    id="thematic-investing"
                    onClick={() => setActiveTab(0)}
                  >
                    <span className="active-dot"></span>Thematic Investing
                  </div>
                  <div
                    className={clsx("button", activeTab == 1 ? "active" : "")}
                    id="impact-investing-fund"
                    onClick={() => setActiveTab(1)}
                  >
                    <span className="active-dot"></span>Impact Investing Fund
                  </div>
                  <div
                    className={clsx("button", activeTab == 2 ? "active" : "")}
                    id="esg-integration"
                    onClick={() => setActiveTab(2)}
                  >
                    <span className="active-dot"></span>ESG Integration
                  </div>
                </div>
              </div>
              {activeTab == 0 && (
                <div className="content">
                  <h3 className="title">
                    <span>01</span>Thematic Investing
                  </h3>

                  <div className="details-layout">
                    <div className="details">
                      <h4 className="sub-heading">Overview</h4>
                      <p>
                        This strategy involves building a portfolio around
                        specific themes, such as renewable energy, clean
                        technology, or sustainable agriculture.
                      </p>
                      <h4 className="sub-heading">Execution</h4>
                      <p>
                        We conduct thorough research and analysis to identify
                        promising themes and invest in projects that align with
                        these themes.
                      </p>
                      <h4 className="sub-heading">Benefits</h4>
                      <p>
                        Thematic investing allows Terrasage to stay at the
                        forefront of sustainability trends, attract investors
                        with specific interests, and leverage its expertise in
                        niche areas of eco-friendly investing.
                      </p>
                    </div>
                    <img
                      className="main-image"
                      src="/images/investment-strategy-02.jpg"
                      alt="Investment strategy image"
                    />
                  </div>
                </div>
              )}

              {activeTab == 1 && (
                <div className="content">
                  <h3 className="title">
                    <span>02</span>Impact Investing Fund
                  </h3>

                  <div className="details-layout">
                    <div className="details">
                      <h4 className="sub-heading">Overview</h4>
                      <p>
                        This strategy focuses on investing in companies,
                        organizations, and funds that address global challenges
                        in sectors such as education, healthcare, renewable
                        energy, and sustainable agriculture.
                      </p>
                      <h4 className="sub-heading">Execution</h4>
                      <p>
                        Our team evaluates potential investments based on their
                        ability to deliver both financial returns and
                        significant social or environmental benefits.
                      </p>
                      <h4 className="sub-heading">Benefits</h4>
                      <p>
                        This approach helps attract socially conscious
                        investors, enhances our reputation as a leader in
                        responsible investing, and enables us to drive positive
                        change in communities around the world.
                      </p>
                    </div>
                    <img
                      className="main-image"
                      src="/images/investment-strategy-01.jpg"
                      alt="Investment strategy image"
                    />
                  </div>
                </div>
              )}

              {activeTab == 2 && (
                <div className="content">
                  <h3 className="title">
                    <span>03</span>ESG Integration
                  </h3>

                  <div className="details-layout">
                    <div className="details">
                      <h4 className="sub-heading">Overview</h4>
                      <p>
                        This strategy aims to identify sustainable and
                        responsible investment opportunities that align with our
                        commitment to long-term value creation.
                      </p>
                      <h4 className="sub-heading">Execution</h4>
                      <p>
                        We use a combination of proprietary research,
                        third-party data, and direct engagement with companies
                        to ensure that ESG considerations are fully integrated
                        into our investment process.
                      </p>
                      <h4 className="sub-heading">Benefits</h4>
                      <p>
                        This approach helps us attract investors who prioritize
                        sustainability, strengthens our commitment to
                        responsible investing, and positions us as a
                        forward-thinking leader in the investment community.
                      </p>
                    </div>
                    <img
                      className="main-image"
                      src="/images/investment-strategy-05.jpg"
                      alt="Investment strategy image"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
    </PageAnim>
  );
};

export default PageInvestments;
