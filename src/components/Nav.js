import "./Nav.css";

function Nav({ isTransparent }) {
  const transparent = isTransparent === "true" ? "transparent" : "";
  return (
    <nav className={`main-nav dark ${transparent} stick-fixed`}>
      <div className="full-wrapper relative clearfix">
        <div className="nav-logo-wrap local-scroll">
          <a href="#top" className="logo">
            <h4>Billy Hunt III</h4>
          </a>
        </div>
        <div className="mobile-nav">
          <i className="fa fa-bars"></i>
        </div>
        <div className="inner-nav desktop-nav">
          <ul className="clearlist scroll-nav local-scroll">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/skills">Skills</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
