import React from "react";

const  Section05 = () => {
  return (
    <div>
      <section className="pv-30 clearfix">
        <div className="container">
          <div className="row">

            { /* ================================================
              Left Column
            ================================================ */ }
            <div className="col-md-3">
              <div className="card card-default">
                <div className="card-header text-center text-bold">
                  <i className="fa fa-pie-chart"></i> STAGING STATISTICS
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p className="text-center"><strong>STATS THAT SUPPORT PRO-STAGING!</strong></p>
                    </div>
                    <div className="col-md-12 col-lg-4 text-center">
                      <span className="text-40 text-bold text-default nowrap">88%</span>
                    </div>
                    <div className="col-md-12 col-lg-8">
                      <div>of Staged houses sell at or above list price, and SELL on average in 10.3
                        days versus 84.6 days for non-Staged houses.</div>
                    </div>
                  </div>{ /* /row */ }
                </div>{ /* /card-body */ }

                { /* footer */ }
                <div className="card-footer text-center">
                  <a href="http://homestagingstats.com/" target="_blank" rel="noopener noreferrer">Stats - click here!</a>
                </div>
              </div>{ /* /card */ }
            </div>{ /* /card */ }

            { /* ================================================
              Middle Column
            ================================================ */ }
            <div className="col-md-6">

              { /* Make money doing what you love */ }
              <div className="row">
                <div className="col-md-8 offset-md-2 text-bold">
                  <h2 className="text-center text-24">Make Money<br />
                    <span className="text-default">Doing What You Love</span>
                  </h2>
                  <div className="text-center text-24"><i className="fa fa-heart text-default"></i></div>
                  <div className="separator"></div>
                  <p className="large text-center"><i>and Change People's Lives Too!</i></p>
                  <p className="large text-center">Learn from the Industry's Largest and Most Experienced Home
                    Staging Training Company</p>
                </div>
              </div>{ /* /Make money doing what you love */ }
            </div>{ /* /col-lg-4 | END of Middle Column */ }

            { /* ================================================
              Right Column
            ================================================ */ }

            { /* Banners */ }
            <div className="col-md-3">
              <div className="row">

                { /* Staged Homes Blog */ }
                <div className="col-sm-4 col-md-12">
                  <a href="https://www.stagedhomes.com/blog">
                    <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/shc-blog.png"
                      className="center-block img-responsive space-bottom-15" width="290px"
                      alt="Staged Homes Blog" /></a>
                </div>

                { /* IAHSP */ }
                <div className="col-sm-4 col-md-12 col-md-12">
                  <a href="http://www.iahsp.com" target="_blank" rel="noopener noreferrer"><img
                    src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/banners/hp-banner-iahsp.png"
                      className="center-block img-responsive space-bottom-15" width="290px"
                      alt="International Association of Home Staging Professionals" /></a>
                </div>

              </div>
            </div>{ /* /col-md-3 */ }
          </div>
        </div>{ /* /row */ }
      </section>{ /* /section */ }
    </div>
  )
}

export default Section05;
