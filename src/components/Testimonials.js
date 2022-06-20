import Nav from "./Nav";

const Testimonials = () => {
  return (
    <div>
      <Nav />
      <section
        id="testimonials"
        className="page-section bg-dark bg-dark-alfa-90 fullwidth-slider owl-carousel owl-theme"
        data-background="images/full-width-images/section-bg-3.jpg"
        style={{
          backgroundImage: 'url("images/full-width-images/section-bg-3.jpg")',
          opacity: 1,
          display: "block",
        }}
      >
        <div
          className="owl-wrapper-outer autoHeight"
          style={{ height: "233px" }}
        >
          <div
            className="owl-wrapper"
            style={{ width: "10752px", left: "0px", display: "block" }}
          >
            <div className="owl-item" style={{ width: "1792px" }}>
              <div>
                <div className="container relative">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 align-center">
                      <div className="section-icon">
                        <span className="icon-quote" />
                      </div>
                      <h3 className="small-title font-alt">What people say?</h3>
                      <blockquote className="testimonial white">
                        <p>
                          "Billy was easy to work with, accommodated our needs
                          and requests, set clear expectations, and worked
                          within our budget. We were quite pleased with the
                          result, and I recommend him highly."
                        </p>
                        <footer className="testimonial-author">
                          Dave Norris - Former Mayor, City of Charlottesville
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "1792px" }}>
              <div>
                <div className="container relative">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 align-center">
                      {/* Section Icon */}
                      <div className="section-icon">
                        <span className="icon-quote" />
                      </div>
                      {/* Section Title */}
                      <h3 className="small-title font-alt">What people say?</h3>
                      <blockquote className="testimonial white">
                        <p>
                          Billy’s a seasoned full-stack developer with strong
                          skills in UX and Interactive design. He cares deeply
                          about the products he builds, from backend technical
                          architecture to front end interactions. And he’s a
                          total trip.
                        </p>
                        <footer className="testimonial-author">
                          Brian McDonald, UX Manager, Silverchair Information
                          Systems
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-item" style={{ width: "1792px" }}>
              <div>
                <div className="container relative">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 align-center">
                      {/* Section Icon */}
                      <div className="section-icon">
                        <span className="icon-quote" />
                      </div>
                      {/* Section Title */}
                      <h3 className="small-title font-alt">What people say?</h3>
                      <blockquote className="testimonial white">
                        <p>
                          Billy has an eye for building high quality products
                          and empathy for users that is rare for a software
                          developer. He is also the funnest person I have ever
                          worked with.
                        </p>
                        <footer className="testimonial-author">
                          Steve Loria, Senior Developer / Team Lead, Center for
                          Open Science
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-controls clickable">
          <div className="owl-pagination">
            <div className="owl-page active">
              <span className />
            </div>
            <div className="owl-page">
              <span className />
            </div>
            <div className="owl-page">
              <span className />
            </div>
          </div>
          <div className="owl-buttons">
            <div className="owl-prev">
              <i className="fa fa-angle-left" />
            </div>
            <div className="owl-next">
              <i className="fa fa-angle-right" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
