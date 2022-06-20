import React from "react";
import uxTalk from "../images/portfolio/ux-talk.jpg";
import ama from "../images/portfolio/ama.jpg";
import bookPortraits from "../images/portfolio/book-portrait1.jpg";
import osfImage from "../images/portfolio/osf.jpg";
import daBird from "../images/portfolio/da-bird.jpg";
import houseRadio from "../images/portfolio/House-Radio-Horiz.jpg";
import claw from "../images/portfolio/claw.jpg";
import childhoodDev from "../images/portfolio/childhood-dev.jpg";
import grisham from "../images/portfolio/grisham-thumb.jpg";
import Nav from "./Nav";

function Portfolio() {
  return (
    <div>
      <Nav />
      <section className="page-section pb-0" id="portfolio">
        <div className="relative">
          <h2 className="section-title font-alt mb-70 mb-sm-40">Portfolio</h2>
          {/* Works Filter */}
          <div className="works-filter font-alt align-center">
            <a href="#" className="filter active" data-filter="*">
              All works
            </a>
            <a href="#software" className="filter" data-filter=".software">
              Software
            </a>
            <a href="#video" className="filter" data-filter=".video">
              Video
            </a>
            <a
              href="#photography"
              className="filter"
              data-filter=".photography"
            >
              Photography
            </a>
          </div>

          <ul
            className="works-grid work-grid-3 work-grid-gut clearfix font-alt hover-white hide-titles"
            id="work-grid"
            style={{ position: "relative", height: "692.828px" }}
          >
            <li
              className="work-item mix software"
              style={{ position: "absolute", left: "0px", top: "0px" }}
            >
              <a href="https://jamanetwork.com/" className="work-ext-link">
                <div className="work-img">
                  <img src={ama} alt="Work" />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">American Medical Association</h3>
                  <div className="work-descr">
                    Lead Front End Developer for The American Medical
                    Association's JAMA website.
                  </div>
                </div>
              </a>
            </li>
            <li
              className="work-item mix design photography"
              style={{ position: "absolute", left: "349px", top: "0px" }}
            >
              <a href className="portfolio-lightbox-1 mfp-image">
                <div className="work-img">
                  <img src={bookPortraits} alt="Work" />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">Laser Portraits</h3>
                  <div className="work-descr"></div>
                </div>
              </a>
            </li>
            <li
              className="work-item mix design photography"
              style={{ position: "absolute", left: "698px", top: "0px" }}
            >
              <a href="./images/Usability_and_Design.pdf" target="_blank">
                <div className="work-img">
                  <img src={uxTalk} alt="Work" />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">Usability and Design</h3>
                  <div className="work-descr">
                    Presentation I created on usability and design delivered to
                    COS, based primarily on Donald Norman's book, "The Design of
                    Everyday Things".
                  </div>
                </div>
              </a>
            </li>
            <li
              className="work-item mix  software"
              style={{ position: "absolute", left: "0px", top: "236px" }}
            >
              <a href="http://www.osf.io" className="work-ext-link">
                <div className="work-img">
                  <img className="work-img" src={osfImage} alt="Work" />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">Open Science Framework</h3>
                  <div className="work-descr">
                    Full Stack Developer on The Open Science Framework
                  </div>
                </div>
              </a>
            </li>
            <li
              className="work-item mix video"
              style={{ position: "absolute", left: "349px", top: "236px" }}
            >
              <a
                href="https://vimeo.com/27917133"
                className="work-lightbox-link mfp-iframe"
              >
                <div className="work-img">
                  <img className="work-img" src={daBird} alt="Work" />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">Da Bird</h3>
                  <div className="work-descr">
                    Music Video for We Are Star Children
                  </div>
                </div>
              </a>
            </li>
            <li
              className="work-item mix software"
              style={{ position: "absolute", left: "698px", top: "236px" }}
            >
              <a
                href="https://itunes.apple.com/us/app/house-music-radio-free/id881989526?mt=8"
                className="work-ext-link"
              >
                <div className="work-img">
                  <img className="work-img" src={houseRadio} alt="Work" />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">House Music Radio</h3>
                  <div className="work-descr">
                    iOS app I created to discover new House Music
                  </div>
                </div>
              </a>
            </li>
            <li
              className="work-item mix design photography video"
              style={{ position: "absolute", left: "0px", top: "464px" }}
            >
              <a href className="portfolio-lightbox-2 mfp-image">
                <div className="work-img">
                  <img src={claw} alt="Work" />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">
                    Collective of Lady Arm Wrestlers
                  </h3>
                  <div className="work-descr"></div>
                </div>
              </a>
            </li>
            <li
              className="work-item mix software"
              style={{ position: "absolute", left: "349px", top: "464px" }}
            >
              <a
                href="https://itunes.apple.com/us/app/house-music-radio-free/id881989526?mt=8"
                className="work-ext-link"
              >
                <div className="work-img">
                  <img className="work-img" src={childhoodDev} alt="Work" />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">
                    Virginia's Milestones of Childhood Development
                  </h3>
                  <div className="work-descr">
                    iOS app I created for United Way of Richmond to help mothers
                    track their child's development, and seek treatment if
                    needed.
                  </div>
                </div>
              </a>
            </li>
            <li
              className="work-item mix design photography"
              style={{ position: "absolute", left: "698px", top: "464px" }}
            >
              <a href className="portfolio-lightbox-3 mfp-image">
                <div className="work-img">
                  <img src={grisham} alt="Work" />
                </div>
                <div className="work-intro">
                  <h3 className="work-title">John Grisham Author Photo</h3>
                  <div className="work-descr">
                    I had the privilege to shoot John Grisham’s Author photo for
                    his latest book, Grey Mountain. His main requirements were
                    that I be fast and not bring a lot of equipment. Check and
                    check. The whole shoot lasted 20 minutes. I gave him 5 or 6
                    to choose from, and he picked the best of the bunch. He
                    wanted a black and white image, and we went with a sort of
                    retro hip look informed by the Instagram generation, but not
                    beholden to it.
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
