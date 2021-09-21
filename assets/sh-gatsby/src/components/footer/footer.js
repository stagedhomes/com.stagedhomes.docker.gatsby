import React from "react";
import "./footer.scss";

const bbbStyles = {
  border: 0
}

const  Footer = () => {
  return (
    <footer id="footer" className="clearfix">
      <div className="footer">
        <div className="container">
          top part of footer
        </div>
      </div> 

      <div className="subfooter">
        <div className="container">
          <div className="subfooter-inner">
            <div className="row">
              <div className="col-lg-12 text-black text-center space-bottom-15">
                <p>
                  <div className="text-bold">© 1999 - 2021 StagedHomes.com. All rights reserved.</div>
                  <div className="text-12">
                    Stage<sup>®</sup>, ASP<sup>®</sup>, ASPM<sup>®</sup>, StagedHomes.com<sup>®</sup>, IAHSP<sup>®</sup>, Accredited Staging Professional<sup>®</sup> are Federally Registered Trademarks of StagedHomes.com<sup>®</sup>
                  </div>
                  <div className="text-10">
                    By using this site, you are agreeing to our <a href="https://pages.stagedhomes.com/terms-of-use/">Terms of Use</a>, Federal CAN-SPAM Act<br />
                    The StagedHomes.com<sup>®</sup> website is designed by Barb Schwarz and <a href="https://stagedhomes.com/asps/asplist.php?zip=&state=Choose+State&text=Duane+Leem&groups=none&x=0&y=0">Duane Leem</a><br />
                    By providing this information you agree to receive text and email from stagedhomes.com and or IAHSP
                  </div>
                </p>
              </div>{ /* /col-md-6 */ }
              <div className="col-lg-12 text-center">
                <ul className="list-inline subfooter-list-inline">
                  <li className="list-inline-item"><img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/subfooter-logo-stager.png" className="subfooter-icons" alt="ASP Stagers" /></li>
                  <li className="list-inline-item"><img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/subfooter-logo-re.png" className="subfooter-icons" alt="ASP Real Estate Agents" /></li>
                  <li className="list-inline-item"><img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/asa-logo-transparent.png" className="subfooter-icons" alt="ASA Accredited Staging Assistant" /></li>
                  <li className="list-inline-item"><img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/subfooter-logo-aspm.png" className="subfooter-icons" alt="ASPM Masters" /></li>
                  <li className="list-inline-item"><a href="https://iahsp.com"><img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/logo-iahsp-footer.png" className="subfooter-icons" alt="International Association of Home Staging Professionals" /></a></li>
                  <li className="list-inline-item"><a href="https://iahsp.com/foundation.php"><img src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/iahsp-transparent.png" className="subfooter-icons" /></a></li>
                  <li className="list-inline-item"><a href="https://www.bbb.org/us/co/littleton/profile/home-staging/stagedhomes-com-0885-90249221/#sealclick" target="_blank" rel="noreferrer"><img src="https://seal-denver.bbb.org/seals/blue-seal-293-61-bbb-90249221.png" style={bbbStyles} alt="StagedHomes.com BBB Business Review" /></a></li>
                </ul>
              </div>{ /* /col-md-6 */ }
            </div>{ /* /row */ }
          </div>{ /* /subfooter-inner */ }
        </div>{ /* /container */ }
      </div>{ /* /subfooter */ }
    </footer>
  )
}

export default Footer;
