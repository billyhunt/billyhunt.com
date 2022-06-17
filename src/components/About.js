import Nav from "./Nav";
import "./About.css";
import headshot from "../images/headshot.jpg";
import "../style/animate.min.css";
import "../"

import { Container } from "react-bootstrap";

function About() {
  return (
    <div>
      <Nav />
      <section className="page-section" id="about">
        <Container className="relative">
          <h2 className="section-title">About Billy</h2>

          <div className="section-text mb-50 mb-sm-20">
            <div className=" row">
              <div className="col-md-6">
                <blockquote>
                  <p>
                    I love art like a nerd loves computers. I also love
                    computers, but I love art more.
                  </p>
                </blockquote>
                <p>
                  Software Developer with a passion for art, technology, and
                  design; an experienced developer with a maker’s aesthetic who
                  believes that creativity and attention to detail are both
                  needed to create good work.
                </p>
              </div>
              <div className=" col-sm-4 col-md-6 mb-xs-30 wow fadeInUp">
                <div className=" team-item">
                  <div className=" team-item-image">
                    <img src={headshot} alt="" />

                    <div className=" team-item-detail">
                      <h4 className="font-alt normal">Nice to Meet You!</h4>
                      <div className=" team-social-links">
                        <a
                          href=" https://www.facebook.com/billyhuntiii"
                          title="Facebook"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com/billyhunt" title="Twitter">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/billyhunt/"
                          title="LinkedIn+"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default About;
