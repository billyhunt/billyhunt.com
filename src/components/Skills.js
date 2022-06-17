import Nav from "./Nav";
import "./Skills.css";
import { Container } from "react-bootstrap";

function Skills() {
  return (
    <div classNameName="Skills">
      <Nav isTransparent="true" />
      <section className="page-section" id="skills">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <h1 className="text-center">SKILLS</h1>
        <Container>
          <div className="col-md-8 col-lg-offset-2">
            <div className="row ">
              <h4
                className="col-lg-2 col-md-2 col-sm-2 col-xs-1 skills-rank"
                style={{ color: "rgb(246, 23, 28)" }}
              >
                1
              </h4>
              <h4 className="col-lg-4 col-md-4 col-sm-4 col-xs-3">97%</h4>
              <h4
                className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
                style={{ color: "rgb(246, 23, 28)" }}
              >
                JAVASCRIPT
              </h4>
            </div>
            <div className="row">
              <h4
                className="col-lg-2 col-md-2 col-sm-2 col-xs-1 skills-rank"
                style={{ color: "rgb(226, 131, 250)" }}
              >
                2
              </h4>
              <h4
                className="col-lg-4 col-md-4 col-sm-4 col-xs-3"
                style={{ color: "rgb(226, 131, 250)" }}
              >
                97%
              </h4>
              <h4
                className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
                style={{ color: "rgb(226, 131, 250)" }}
              >
                REACT
              </h4>
            </div>
            <div className="row">
              <h4
                className="col-lg-2 col-md-2 col-sm-2 col-xs-1 skills-rank"
                style={{ color: "rgb(2, 253, 158)" }}
              >
                3
              </h4>
              <h4
                className="col-lg-4 col-md-4 col-sm-4 col-xs-3"
                style={{ color: "rgb(2, 253, 158)" }}
              >
                92%
              </h4>
              <h4
                className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
                style={{ color: "rgb(2, 253, 158)" }}
              >
                PYTHON
              </h4>
            </div>
            <div className="row">
              <h4
                className="col-lg-2 col-md-2 col-sm-2 col-xs-1 skills-rank"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                4
              </h4>
              <h4
                className="col-lg-4 col-md-4 col-sm-4 col-xs-3"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                91%
              </h4>
              <h4
                className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                GIT
              </h4>
            </div>
            <div className="row">
              <h4
                className="col-lg-2 col-md-2 col-sm-2 col-xs-1 skills-rank"
                style={{ color: "rgb(255, 253, 104)" }}
              >
                5
              </h4>
              <h4
                className="col-lg-4 col-md-4 col-sm-4 col-xs-3"
                style={{ color: "rgb(255, 253, 104)" }}
              >
                90%
              </h4>
              <h4
                className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
                style={{ color: "rgb(255, 253, 104)" }}
              >
                API DESIGN
              </h4>
            </div>
            <div className="row">
              <h4
                className="col-lg-2 col-md-2 col-sm-2 col-xs-1 skills-rank"
                style={{ color: "rgb(255, 3, 239)" }}
              >
                6
              </h4>
              <h4
                className="col-lg-4 col-md-4 col-sm-4 col-xs-3"
                style={{ color: "rgb(255, 3, 239)" }}
              >
                90%
              </h4>
              <h4
                className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
                style={{ color: "rgb(255, 3, 239)" }}
              >
                DESIGN
              </h4>
            </div>
            <div className="row">
              <h4
                className="col-lg-2 col-md-2 col-sm-2 col-xs-1 skills-rank"
                style={{ color: "rgb(70, 175, 255)" }}
              >
                7
              </h4>
              <h4
                className="col-lg-4 col-md-4 col-sm-4 col-xs-3"
                style={{ color: "rgb(70, 175, 255)" }}
              >
                88%
              </h4>
              <h4
                className="col-lg-6 col-md-6 col-sm-6 col-xs-6"
                style={{ color: "rgb(70, 175, 255)" }}
              >
                UX
              </h4>
            </div>
            <div className="row">
              <h4
                className="col-lg-2 col-md-2 col-sm-2 col-xs-1 skills-rank"
                style={{ color: "rgb(252, 186, 66)" }}
              >
                8
              </h4>
              <h4
                className="col-lg-4 col-md-4 col-sm-4 col-xs-3"
                style={{ color: "rgb(252, 186, 66)" }}
              >
                88%
              </h4>
              <h4
                className="col-lg-  6 col-md-6 col-sm-6 col-xs-6"
                style={{ color: "rgb(252, 186, 66)" }}
              >
                DJANGO
              </h4>
            </div>
            <div className="row">
              <h4 className="col-lg-2 col-md-2 col-sm-2 col-xs-1 skills-rank">
                9
              </h4>
              <h4 className="col-lg-4 col-md-4 col-sm-4 col-xs-3">84%</h4>
              <h4 className="col-lg-6 col-md-6 col-sm-6 col-xs-6">AWS</h4>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Skills;
