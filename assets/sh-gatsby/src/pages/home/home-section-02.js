import React from "react";

// Styles
const bannerStyles = {
  zIndex: 1
}
const slidesStyles = {
  verticalAlign: 'top'
}

const  Section02 = () => {
  return (
    <div className="banner clearfix">

      { /* slideshow */ }
      { /* ================ */ }
      <div className="slideshow">


        { /* slider revolution */ }
        { /* ================ */ }
        <div className="slider-banner-container" style={bannerStyles}>
          <div id="shCarousel1" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#shCarousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#shCarousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#shCarousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#shCarousel1" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#shCarousel1" data-bs-slide-to="4" aria-label="Slide 5"></button>
              <button type="button" data-bs-target="#shCarousel1" data-bs-slide-to="5" aria-label="Slide 6"></button>
              <button type="button" data-bs-target="#shCarousel1" data-bs-slide-to="6" aria-label="Slide 7"></button>
              <button type="button" data-bs-target="#shCarousel1" data-bs-slide-to="7" aria-label="Slide 8"></button>
              <button type="button" data-bs-target="#shCarousel1" data-bs-slide-to="8" aria-label="Slide 9"></button>
            </div>
            <ul className="carousel-inner" style={slidesStyles}>

              { /* slide */ }
              { /* ================ */ }
              <li className="carousel-item active" data-title="Earn a Home Staging Industry Accreditation">

                { /* main image */ }
                <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/shc-home-page.jpg"
                  alt="Staged Modern Living Room" data-bgposition="center top"
                  data-bgrepeat="no-repeat" data-bgfit="cover" />

                  { /* Transparent Background */ }
                  { /* <div className="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="
                                </div> */ }

                  { /* Main Contents */ }
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider-content-wrapper">

                    { /* LAYER NR. 1 */ }
                    <div className="large_white">
                      Earn a Home Staging Industry Accreditation
                    </div>

                    { /* LAYER NR. 2 */ }
                    <div className="hidden-xs">
                      <div className="separator dark"></div>
                    </div>

                    { /* LAYER NR. 3 */ }
                    <div className="medium_white hidden-xs">
                      Why Should I Become an ASP<sup>&reg;</sup> Home Stager, ASP<sup>&reg;</sup>
                      RE Agent,<br />
                      Accredited Staging Assistant (ASA<sup>&reg;</sup>),<br />
                      or Accredited Staging Professional Master (ASPM<sup>&reg;</sup>)?
                    </div>

                    { /* LAYER NR. 4 */ }
                    <div className="small_white">
                      <a href="aspcourseschmaps.php"
                        className="btn radius-50 btn-dark btn-animated">Register Today <i
                          className="fa fa-arrow-right"></i></a>
                      <span className="pl-5 pr-5">or</span> <a href="contactus.php"
                        className="btn radius-50 btn-default btn-animated">Contact Us <i
                          className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </li>
              { /* /slide */ }

              { /* slide start */ }
              { /* ================ */ }
              <li className="carousel-item" data-title="Professional Home Staging Classes from the company that started the industry...">

                { /* main image */ }
                <img src="https://d2itdnqewolu1g.cloudfront.net/images/couch-with-colorful-pillows.jpg"
                  alt="Couch with Colorful Pillows" data-bgposition="center top"
                  data-bgrepeat="no-repeat" data-bgfit="cover" />

                  { /* Transparent Background */ }
                  { /* <div className="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="
                                </div> */ }

                  { /* Main Contents */ }
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider-content-wrapper">

                    { /* LAYER NR. 1 */ }
                    <div className="large_white">
                      Professional Home Staging Classes<br /> from the company that started the
                      industry...
                    </div>

                    { /* LAYER NR. 2 */ }
                    <div className="hidden-xs">
                      <div className="separator dark"></div>
                    </div>

                    { /* LAYER NR. 3 */ }
                    <div className="medium_white hidden-xs">
                      Learn From The Company That Invented Home Staging!
                    </div>

                    { /* LAYER NR. 4 */ }
                    <div className="small_white">
                      <a href="aspcourseschmaps.php"
                        className="btn radius-50 btn-dark btn-animated">Register Today <i
                          className="fa fa-arrow-right"></i></a>
                      <span className="pl-5 pr-5">or</span> <a href="contactus.php"
                        className="btn radius-50 btn-default btn-animated">Contact Us <i
                          className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </li>
              { /* /slide */ }

              { /* slide start */ }
              { /* ================ */ }
              <li className="carousel-item" data-title="Be Featured">

                { /* main image */ }
                <img src="https://d2itdnqewolu1g.cloudfront.net/images/two-glass-cups-facing-backyard.jpg"
                  alt="Two Glass Cups Facing Backyard" data-bgposition="center top"
                  data-bgrepeat="no-repeat" data-bgfit="cover" />

                  { /* Transparent Background */ }
                  { /* <div className="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="
                                </div> */ }

                  { /* Main Contents */ }
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider-content-wrapper">

                    { /* LAYER NR. 1 */ }
                    <div className="large_white">
                      Be Featured
                    </div>

                    { /* LAYER NR. 2 */ }
                    <div className="hidden-xs">
                      <div className="separator dark"></div>
                    </div>

                    { /* LAYER NR. 3 */ }
                    <div className="medium_white hidden-xs">
                      Be Featured Here on the Home Staging<br />
                      Directory for People to Find Me As an Active ASP<sup>&reg;</sup>,<br />
                      ASP-RE<sup>&reg;</sup>, ASPM<sup>&reg;</sup> or ASA<sup>&reg;</sup>
                    </div>

                    { /* LAYER NR. 4 */ }
                    <div className="small_white">
                      <a href="aspcourseschmaps.php"
                        className="btn radius-50 btn-dark btn-animated">Register Today <i
                          className="fa fa-arrow-right"></i></a>
                      <span className="pl-5 pr-5">or</span> <a href="contactus.php"
                        className="btn radius-50 btn-default btn-animated">Contact Us <i
                          className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </li>
              { /* /slide */ }

              { /* slide start */ }
              { /* ================ */ }
              <li className="carousel-item" data-title="ASP&reg; Directory">

                { /* main image */ }
                <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/banner-default.png"
                  alt="Staged Modern Living Room" data-bgposition="center top"
                  data-bgrepeat="no-repeat" data-bgfit="cover" />

                  { /* Transparent Background */ }
                  { /* <div className="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="
                                </div> */ }

                { /* Main Contents */ }
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider-content-wrapper">
                    { /* LAYER NR. 1 */ }
                    <div className="large_white">
                      ASP<sup>&reg;</sup> Directory
                    </div>

                    { /* LAYER NR. 2 */ }
                    <div className="hidden-xs">
                      <div className="separator dark"></div>
                    </div>

                    { /* LAYER NR. 3 */ }
                    <div className="medium_white hidden-xs">
                      As an Active ASP<sup>&reg;</sup> Market my ASP<sup>&reg;</sup> Staged
                      Homes<br />
                      on the Staged Property Directory where Buyers look<br />
                      to Find Staged Homes for Sale
                    </div>

                    { /* LAYER NR. 4 */ }
                    <div className="small_white">
                      <a href="aspcourseschmaps.php"
                        className="btn radius-50 btn-dark btn-animated">Register Today <i
                          className="fa fa-arrow-right"></i></a>
                      <span className="pl-5 pr-5">or</span> <a href="contactus.php"
                        className="btn radius-50 btn-default btn-animated">Contact Us <i
                          className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </li>
              { /* /slide */ }

              { /* slide start */ }
              { /* ================ */ }
              <li className="carousel-item" data-title="Staging University&reg;">

                { /* main image */ }
                <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/banner-default.png"
                  alt="Modern Staged Living Room" data-bgposition="center top"
                  data-bgrepeat="no-repeat" data-bgfit="cover" />

                  { /* Transparent Background */ }
                  { /* <div className="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="
                                </div> */ }

                { /* Main Contents */ }
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider-content-wrapper">

                    { /* LAYER NR. 1 */ }
                    <div className="large_white">
                      Staging University<sup>&reg;</sup>
                    </div>

                    { /* LAYER NR. 2 */ }
                    <div className="hidden-xs">
                      <div className="separator dark"></div>
                    </div>

                    { /* LAYER NR. 3 */ }
                    <div className="medium_white hidden-xs">
                      Receive access to the private Staging University<sup>&reg;</sup><br />
                      with PROFESSIONAL Business Forms, Templates,<br />
                      Marketing Materials, Added Education and much more!
                    </div>

                    { /* LAYER NR. 4 */ }
                    <div className="small_white">
                      <a href="aspcourseschmaps.php"
                        className="btn radius-50 btn-dark btn-animated">Register Today <i
                          className="fa fa-arrow-right"></i></a>
                      <span className="pl-5 pr-5">or</span> <a href="contactus.php"
                        className="btn radius-50 btn-default btn-animated">Contact Us <i
                          className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </li>
              { /* /slide */ }

              { /* slide start */ }
              { /* ================ */ }
              <li className="carousel-item" data-title="Vendor Savings">

                { /* main image */ }
                <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/banner-default.png"
                  alt="Modern Living Room" data-bgposition="center top" data-bgrepeat="no-repeat"
                  data-bgfit="cover" />

                { /* Transparent Background */ }
                { /* <div className="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="
                                </div> */ }

                { /* Main Contents */ }
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider-content-wrapper">

                    { /* LAYER NR. 1 */ }
                    <div className="large_white">
                      Vendor Savings
                    </div>

                    { /* LAYER NR. 2 */ }
                    <div className="hidden-xs">
                      <div className="separator dark"></div>
                    </div>

                    { /* LAYER NR. 3 */ }
                    <div className="medium_white hidden-xs">
                      Become Part of our Vendor Program - and Save $ on Products<br />
                      and Services You Need to Succeed
                    </div>

                    { /* LAYER NR. 4 */ }
                    <div className="small_white">
                      <a href="aspcourseschmaps.php"
                        className="btn radius-50 btn-dark btn-animated">Register Today <i
                          className="fa fa-arrow-right"></i></a>
                      <span className="pl-5 pr-5">or</span> <a href="contactus.php"
                        className="btn radius-50 btn-default btn-animated">Contact Us <i
                          className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </li>
              { /* /slide */ }

              { /* slide */ }
              { /* ================ */ }
              <li className="carousel-item" data-transition="fade" data-slotamount="1" data-masterspeed="500"
                data-saveperformance="on"
                data-title="International Association of <br />Home Staging Professionals<sup>&reg;</sup>">

                { /* main image */ }
                <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/banner-default.png"
                  alt="Modern Living Room" data-bgposition="center top" data-bgrepeat="no-repeat"
                  data-bgfit="cover" />

                  { /* Transparent Background */ }
                  { /* <div className="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="
                                </div> */ }

                { /* Main Contents */ }
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider-content-wrapper">

                    { /* LAYER NR. 1 */ }
                    <div className="large_white">
                      International Association of <br />Home Staging
                      Professionals<sup>&reg;</sup>
                    </div>

                    { /* LAYER NR. 2 */ }
                    <div className="hidden-xs">
                      <div className="separator dark"></div>
                    </div>

                    { /* LAYER NR. 3 */ }
                    <div className="medium_white hidden-xs">
                      Membership in The International Association of Home Staging
                      Professionals<br />
                      (IAHSP) INCLUDED with Your Course
                    </div>

                    { /* LAYER NR. 4 */ }
                    <div className="small_white">
                      <a href="aspcourseschmaps.php"
                        className="btn radius-50 btn-dark btn-animated">Register Today <i
                          className="fa fa-arrow-right"></i></a>
                      <span className="pl-5 pr-5">or</span> <a href="contactus.php"
                        className="btn radius-50 btn-default btn-animated">Contact Us <i
                          className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </li>
              { /* /slide */ }

              { /* slide  */ }
              { /* ================ */ }
              <li className="carousel-item" data-transition="fade" data-slotamount="1" data-masterspeed="500"
                data-saveperformance="on" data-title="Continuous Support">

                { /* main image */ }
                <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/banner-default.png"
                  alt="Modern Living Room" data-bgposition="center top" data-bgrepeat="no-repeat"
                  data-bgfit="cover" />

                { /* Transparent Background */ }
                  { /* <div className="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="
                                </div> */ }

                { /* Main Contents */ }
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider-content-wrapper">
                    { /* LAYER NR. 1 */ }
                    <div className="large_white">
                      Continuous Support
                    </div>

                    { /* LAYER NR. 2 */ }
                    <div className="hidden-xs">
                      <div className="separator dark"></div>
                    </div>

                    { /* LAYER NR. 3 */ }
                    <div className="medium_white hidden-xs">
                      Fabulous Support From IAHSP<sup>&reg;</sup> Chapters, ASPM<sup>&reg;</sup>
                      <br /> Mentors, &amp; the StagedHomes.com&reg; Team
                    </div>

                    { /* LAYER NR. 4 */ }
                    <div className="small_white">
                      <a href="aspcourseschmaps.php"
                        className="btn radius-50 btn-dark btn-animated">Register Today <i
                          className="fa fa-arrow-right"></i></a>
                      <span className="pl-5 pr-5">or</span> <a href="contactus.php"
                        className="btn radius-50 btn-default btn-animated">Contact Us <i
                          className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </li>
              { /* /slide */ }

              { /* slide  */ }
              { /* ================ */ }
              <li className="carousel-item" data-transition="fade" data-slotamount="1" data-masterspeed="500"
                data-saveperformance="on" data-title="Plus 33 Other Reasons Why">

                { /* main image */ }
                <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/banner-default.png"
                  alt="Modern Living Room" data-bgposition="center top" data-bgrepeat="no-repeat"
                  data-bgfit="cover" />

                { /* Transparent Background */ }
                { /* <div className="tp-caption dark-translucent-bg" data-x="center" data-y="bottom" data-speed="600" data-start="
                                </div> */ }

                { /* Main Contents */ }
                <div className="carousel-caption d-none d-md-block">
                  <div className="slider-content-wrapper">

                    { /* LAYER NR. 1 */ }
                    <div className="large_white">
                      Plus 31 Other Reasons Why
                    </div>

                    { /* LAYER NR. 2 */ }
                    <div className="hidden-xs">
                      <div className="separator dark"></div>
                    </div>

                    { /* LAYER NR. 3 */ }
                    <div className="medium_white hidden-xs">
                      Call 800-392-7161 or Email Our ASP<sup>&reg;</sup> Course
                      <br /> Specialists for Information &amp; Savings
                    </div>

                    { /* LAYER NR. 4 */ }
                    <div className="small_white">
                      <a href="aspcourseschmaps.php"
                        className="btn radius-50 btn-dark btn-animated">Register Today <i
                          className="fa fa-arrow-right"></i></a>
                      <span className="pl-5 pr-5">or</span> <a href="contactus.php"
                        className="btn radius-50 btn-default btn-animated">Contact Us <i
                          className="fa fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </li>
              { /* /slide */ }
            </ul>
            <div className="tp-bannertimer"></div>
            <button className="carousel-control-prev" type="button" data-bs-target="#shCarousel1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#shCarousel1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> { /* /slider revolution */ }
      </div> { /* /slideshow */ }
    </div>
  )
}

export default Section02;
