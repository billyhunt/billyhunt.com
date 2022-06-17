import { Row } from "react-bootstrap";
import "./Experience.css";
import Nav from "./Nav";

const Experience = () => {
  return (
    <div>
      <Nav />
      <section className="page-section" id="experience">
        <div className="container relative">
          <Row>
            <div className="col-sm-3">
              <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">
                Experience
              </h2>
            </div>

            <div className="col-sm-9">
              <div className="section-text">
                <Row>
                  <div className="col-md-2 black">2020-Present</div>
                  <div className="col-md-10">
                    <h4 className="mt-0 mb-0">Nava PBC</h4>
                    <p className="fw-bolder">Department of Justice</p>
                    Team lead for for{" "}
                    <a href="https://civilrights.justice.gov">
                      civilrights.justice.gov
                    </a>{" "}
                    for the Department of Justice using{" "}
                    <span className="fw-bold">Python</span>,{" "}
                    <span className="fw-bold">Django</span>,{" "}
                    <span className="fw-bold">Django Rest</span>, and{" "}
                    <span className="fw-bold">Javascript</span>. Mentored new
                    employees in best practices for coding and team norming.
                    Helped write new hiring standards for hiring engineers.
                    Developed way of working on new team.
                    <p className="fw-bolder">
                      <hr />
                      Center for Medicare and Medicaid Services
                    </p>
                    Created <span className="fw-bold">API</span> endpoints and
                    database migrations for{" "}
                    <a href="https://cloud.cms.gov">cloud.cms.gov</a> (CCG).
                    Coded large portion of CCG frontend using{" "}
                    <span className="fw-bold">Gatsby</span>,{" "}
                    <span className="fw-bold">React</span>,
                    <span className="fw-bold">HTML</span>, and{" "}
                    <span className="fw-bold">SCSS</span>. Designed and built{" "}
                    <span className="fw-bold">AWS</span> infrastructure using{" "}
                    <span className="fw-bold">Terraform</span>. Architected and
                    overseeing the first QA process at Nava. Implemented
                    continuous integration and continuous deployment of
                    cmscloudinfra- cns-ccg-frontend.
                  </div>
                </Row>
                <hr />
                <Row>
                  <div className="col-md-2 black">2017-2019</div>
                  <div className="col-md-10">
                    <h4 className="mt-0 mb-0">Astraea</h4>
                    Created and maintained web applications in a myriad of
                    frameworks in <span className="fw-bold">AngularJS</span>,
                    <span className="fw-bold">Vue</span>,{" "}
                    <span className="fw-bold">React</span>. Worked with
                    <span className="fw-bold">Mapbox</span> and{" "}
                    <span className="fw-bold">Leaflet</span> to create
                    interactive maps. Created data visualizations. Designed
                    wireframes for new products and new features on existing
                    products. Did local and remote usability tests on
                    wireframes, prototypes, and existing products. Grew front
                    end team from a team of one to a three person team,
                    mentoring the new hires along the way to ensure code
                    consistency and better communication. Worked with backend
                    team to design <span className="fw-bold">API’s</span> for
                    efficient communication.
                  </div>
                </Row>
                <hr />
                <div className="row">
                  <div className="col-md-2 black">2017</div>
                  <div className="col-md-10">
                    <h4 className="mt-0 mb-0">Co Owner - FreshKDS</h4>A company
                    used to create a mobile app for displaying orders in
                    restaurants. The app ties into the Square API to display
                    orders in realtime on a tablet.
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2 black">2016–2017</div>
                  <div className="col-md-10">
                    <h4 className="mt-0 mb-0">
                      UI Developer - Silverchair Information Systems
                    </h4>
                    Silverchair Information Systems delivers scholarly content
                    online. While there, I was lead UI developer for the
                    <a href="https://jamanetwork.com">
                      American Medical Association’s website
                    </a>
                    . Worked on other high profile sites like{" "}
                    <a href="https://global.oup.com/?cc=us">
                      Oxford University Press
                    </a>
                    , and assisted my coworkers when there were complicated
                    JavaScript problems.
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2 black">2015–2016</div>
                  <div className="col-md-10">
                    <h4 className="mt-0 mb-0">
                      Full Stack Developer - Center for Open Science
                    </h4>
                    COS is a non-profit technology company providing free and
                    open services to increase inclusivity and transparency of
                    research. My work is primarily on the Open Science
                    Framework, a research tool for scientists to publish, share,
                    and collaborate throughout the entire scientific process.
                    Within COS, I focused on UI/UX, working with our "Community"
                    team to try and better understand the user, to build a
                    better product.
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2 black">2015–2016</div>
                  <div className="col-md-10">
                    <h4 className="mt-0 mb-0">Owner - Powhatan Studios</h4>
                    Developer web and mobile applications for a variety of
                    customers using PHP, Javascript, HTML, CSS, Wordpress,
                    Drupal, and Objective C.
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2 black">2002–2013</div>
                  <div className="col-md-10">
                    <h4 className="mt-0 mb-0">
                      Owner - Billy Hunt Software, Photography, and Video
                    </h4>
                    Created and grew a full-service media company able to
                    produce mobile applications as well as quality imagery and
                    video for television, web, and film. Consulted with
                    businesses on the use of social media to build brand
                    awareness. Managed film crews of up to 25 people. Delivered
                    projects on time and on budget to clients all over the
                    world, including John Grisham, The Dave Matthews Band, Adult
                    Swim, BUST magazine, Modern Luxury, The Washington Post, The
                    Wall Street Journal, The Guardian, The New York Post, More
                    magazine, Virginia Living magazine, Urban Ink, and a ton of
                    cool bands, people, and businesses.
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Experience;
