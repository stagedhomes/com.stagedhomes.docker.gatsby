import React from "react";

const  Section01 = () => {
  return (
    <div className="container padding-top-bottom-40">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/Logo-StagedHomes.png"
                className="center-block img-responsive space-bottom-15" alt="StagedHomes.com Logo" />
              <p className="text-center space-top-10">
                Stagedhomes.com<sup>&reg;</sup> is the premier home staging accredited designation for professional 
                Home Stagers and Realtors<sup>&reg;</sup> in the real estate industry, providing on-trend continuous
                education, enabling students to apply their creativity, business acumen and ethics to positively 
                run successful businesses. Stagedhomes.com<sup>&reg;</sup> empowers our students to not only 
                provide strong leadership in their communities, but embrace serving and honoring clients and 
                community, with integrity and compassion.
              </p>
            </div>          
          </div> { /* /row */ }
          <div className="row">
            <div className="col-md-3">            
              <img src="https://d2itdnqewolu1g.cloudfront.net/images/iahsp-logo.png" className="center-block img-responsive space-bottom-15" 
              alt="IAHSP Logo" width="290px" />
            </div>
            <div className="col-md-9">
              <p>Membership in <a href="https://iahsp.com/" target="_blank" rel="noopener noreferrer" >IAHSP<sup>&reg;</sup></a> - the world's 
              largest Home Staging Industry Trade Association in INCLUDED with your course. Receive many added benefits including member chapters, 
              events, and added niche-specific education to help you grow your business.</p>
            </div>

            <div className="clearfix"></div>
          </div> { /* /row */ }

          <div className="row">
            { /* Home Staging Courses and Industry Resources  */ }
            <div className="col-md-4">
              <img src="https://d2itdnqewolu1g.cloudfront.net/images/staged-homes-course-catalog.jpg" 
              className="center-block img-responsive"
              alt="Home Staging Course Catalog" width="290px" />
              <div className="text-center">           
                <a href="http://stagingcourses.com" target="_blank" rel="noopener noreferrer" 
                  className="btn btn-animated btn-default space-bottom-15">View Catalog<i className="fa fa-book"></i></a>
              </div>
            </div>
            { /* Home Stagers Guide to the Home Staging Industry */ }
            <div className="col-md-4">
              <img src="https://d2itdnqewolu1g.cloudfront.net/images/home-stagers-guide-to-the-home-staging-industry.jpg" 
              className="center-block img-responsive space-bottom-8"
              alt="Home Staging Course Catalog" width="290px" />
              <div className="text-center">
                <p className="space-bottom-0"><strong>Stagers!</strong> Get Your Complimentary Guide!</p>
                <a href="https://pages.stagedhomes.com/home-stagers-guide-to-getting-started-in-staging/" target="_blank" rel="noopener noreferrer" 
                  className="btn btn-animated btn-default space-bottom-15">Click Here<i className="fa fa-book"></i></a>
              </div>
            </div>
            { /* Real Estate Agent's Guide to the Home Staging Industry */ }
            <div className="col-md-4">
              <img src="https://d2itdnqewolu1g.cloudfront.net/images/re-guide-to-home-staging-industry-cover.jpg" 
              className="center-block img-responsive space-bottom-8"
              alt="Home Staging Course Catalog" width="290px" />
              <div className="text-center">
                <p className="space-bottom-0"><strong>Real Estate Agents!</strong> Get Your Complimentary Guide!</p>  
                <a href="https://pages.stagedhomes.com/real-estate-agents-guide-home-staging-industry/" target="_blank" rel="noopener noreferrer" 
                  className="btn btn-animated btn-default space-bottom-15">Click Here<i className="fa fa-book"></i></a>
              </div>
            </div>      
          </div> { /* /row */ }
        </div> { /* /col-md-9 */ }

        <div className="col-md-3">
          <img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/shc-celebration.png"
              className="center-block img-responsive space-bottom-15" alt="Celebrating 22 years Logo" width="240px" />
          <img src="https://d2itdnqewolu1g.cloudfront.net/images/callout-star.png"
              alt="Callout for Staging Training Company" 
              className="center-block img-responsive space-bottom-15" width="290px" />
        </div> { /* col-md-3 */ }
      </div>
    </div>
  )
}

export default Section01;
