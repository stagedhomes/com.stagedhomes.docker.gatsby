import React from "react";

const  Section03 = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="space-bottom-15">
              <h3 className="text-center text-trans-none">Welcome to StagedHomes.com!</h3>
              <video width="100%" controls controlsList="nodownload">
                <source src="https://d2itdnqewolu1g.cloudfront.net/videos/shc-site-welcome.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="space-bottom-15">
              <h3 className="text-center text-trans-none">StagedHomes.com Frequently Asked Questions</h3>
              <video width="100%" controls controlsList="nodownload">
                <source src="https://d2itdnqewolu1g.cloudfront.net/videos/shc-faqs.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>{ /* /row */ }
      </div>
    </section>
  )
}

export default Section03;
