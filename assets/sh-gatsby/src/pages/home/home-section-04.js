import React from "react";
import YAMLData from "../../data/testimonials.yaml";

const h2Styles = {
  marginTop: '5px'
};

const  Section04 = () => {
  return (
    <div>
      <section className="section usa-promo dark-translucent-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="call-to-action text-center">
                <div className="row">
                  <div className="col-md-8">
                    <h2 className="title text-trans-none" style={h2Styles}>
                      <strong>
                        StagedHomes.com is proud to offer a<br />
                        USA GRANT PROGRAM
                      </strong>
                    </h2>
                    <p>Call <a href="https://pages.stagedhomes.com/contact-us/">800-392-7161</a> or <a
                        href="https://pages.stagedhomes.com/contact-us">E-Mail Us Now</a></p>
                  </div>
                  <div className="col-md-4">
                    <a href="https://pages.stagedhomes.com/grantprogram/"
                      className="btn btn-gray-transparent btn-animated">Apply Today<i
                        className="fa fa-arrow-right pl-20"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section background-img-promo-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="call-to-action text-center">
                <div className="row">
                  <div className="col-md-3">
                    <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/aspm-web-logo-transparent-background.png"
                      className="center-block
                                      img-responsive space-bottom-15" width="120px" alt="ASPM Background Logo" />
                  </div>
                  <div className="col-md-6">
                    <p className="description"><strong>Master your business and grow to new heights of success!</strong></p>
                  </div>
                  <div className="col-md-3">
                    <a href="/aspmmastercourse.php" className="btn btn-animated btn-dark">View Info<i className="fa fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-translucent-bg testimonial-bg pv-20">
        <div id="shCarousel2" className="content-slider carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {
              YAMLData.content.map((data, index) => {
                return (
                  <button 
                    type="button"
                    data-bs-target="#shCarousel2"
                    data-bs-slide-to={index}
                    className={(index === 0 ? 'active' : '')}
                    aria-label={`Slide ${index}`}
                    key={index}
                  ></button>
                )
              })
            }
          </div>

          <div className="carousel-inner">
            {
              YAMLData.content.map((data, index) => {
                return (
                  <div className={`carousel-item testimonial text-center ` + (index === 0 ? 'active' : '')} key={index}>
                    <div className="testimonial-body space-bottom-15">
                      <blockquote>
                        <p dangerouslySetInnerHTML={{__html: data.description}}></p>
                      </blockquote>
                      <div className="testimonial-info-1">-
                        {data.name}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </section>
    </div>
  )
}

export default Section04;
