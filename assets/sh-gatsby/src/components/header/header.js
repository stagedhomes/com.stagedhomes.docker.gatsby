import React from "react";
import "./header.scss";

const  Header = () => {
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-xs-3 col-sm-6 col-md-8">


              <div className="header-top-first clearfix">
                <ul className="social-links circle small clearfix hidden-xs">
                  <li className="facebook"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/stagedhomes"><i className="fa fa-facebook"></i></a></li>
                  <li className="twitter"><a target="_blank" rel="noreferrer" href="https://twitter.com/stagedhomescom"><i className="fa fa-twitter"></i></a></li>
                  <li className="linkedin"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jennie-norris-aspm-iahsp-2705159"><i className="fa fa-linkedin"></i></a></li>
                  <li className="youtube"><a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/stagedhomesvideos"><i className="fa fa-youtube-play"></i></a></li>
                  <li className="pinterest"><a target="_blank" rel="noreferrer" href="https://www.pinterest.com/jenniestager/"><i className="fa fa-pinterest"></i></a></li>
                  <li className="twitter"><a target="_blank" rel="noreferrer" href="https://drive.google.com/open?id=1Ih49GNKiHagKM5mxc1ZBTH8gCYtgvLv3"><i className="fa fa-home"></i></a></li>
                </ul>
                <div className="social-links d-none circle small">
                  <div className="btn-group dropdown">
                    <button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-share-alt"></i></button>
                    <ul className="dropdown-menu dropdown-animation">
                      <li className="facebook"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/stagedhomes"><i className="fa fa-facebook"></i></a></li>
                      <li className="twitter"><a target="_blank" rel="noreferrer" href="https://twitter.com/stagedhomescom"><i className="fa fa-twitter"></i></a></li>
                      <li className="linkedin"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jennie-norris-aspm-iahsp-2705159"><i className="fa fa-linkedin"></i></a></li>
                      <li className="youtube"><a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/stagedhomesvideos"><i className="fa fa-youtube-play"></i></a></li>
                      <li className="pinterest"><a target="_blank" rel="noreferrer" href="https://www.pinterest.com/jenniestager/"><i className="fa fa-pinterest"></i></a></li>
                      <li className="twitter"><a target="_blank" rel="noreferrer" href="https://drive.google.com/open?id=1Ih49GNKiHagKM5mxc1ZBTH8gCYtgvLv3"><i className="fa fa-home"></i></a></li>
                    </ul>
                  </div>
                </div>
                <ul className="list-inline hidden-sm hidden-xs">
                  <li className="list-inline-item"><i className="fa fa-phone pr-5 pl-10"></i><a className="text-bold text-14 text-black">+1 800 392 7161</a></li>
                  <li className="list-inline-item"><i className="fa fa-envelope-o pr-5 pl-10"></i> <a className="text-bold text-14 text-black" href="https://pages.stagedhomes.com/contact-us/">ASPCourses@StagedHomes.com</a></li>
                </ul>
              </div>

            </div>
            <div className="col-xs-9 col-sm-6 col-md-4">


              <div id="header-top-second" className="clearfix">


                <div className="header-top-dropdown text-right">
                  <div className="btn-group">
                    <a href="/">
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-home pr-10"></i><span className="hidden-xs"> Home</span></button>
                    </a>
                  </div>
                  <div className="btn-group">
                    <a href="https://stagedhomes.com/blog/">
                      <button type="button" className="btn btn-default btn-sm"><span className="hidden-xs"><i className="fa fa-comments-o pr-10" aria-hidden="true"></i></span> Blog</button>
                    </a>
                  </div>
                  <div className="btn-group dropdown">
                    <button type="button" className="btn dropdown-toggle btn-default btn-sm" data-toggle="dropdown"><i className="fa fa-university pr-10"></i><span className="hidden-xs"> University &nbsp;</span></button>
                    <ul className="dropdown-menu dropdown-menu-right dropdown-animation min-width-250 border-radius-5 padding-5 space-top-5">
                      <li>
                        <a href="/public/university.php" className="padding-0">
                          <button type="button" className="btn btn-primary btn-md btn-block text-right">
                            Member Login<i className="text-white fa fa-user"></i> </button>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <header className="header clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-2">


                <div className="header-left clearfix">

                  <div id="logo" className="logo">
                    <a href="/">
                      <img id="logo_img" src="https://d2itdnqewolu1g.cloudfront.net/images/the-project/stagedhomes/Logo-StagedHomes.png" alt="StagedHomes.com" />
                      </a>
                    </div>
                  </div>

                </div>
                        <div className="col-md-10">


                          <div className="header-right clearfix">






                            <div className="main-navigation  animated with-dropdown-buttons">


                              <nav className="navbar navbar-default navbar-expand-lg" role="navigation">
                                <div className="">

                                  <div className="navbar-header">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse-1">
                                      <span className="sr-only">Toggle navigation</span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                      <span className="icon-bar"></span>
                                    </button>
                                  </div>

                                  <div className="collapse navbar-collapse padding-right-2 padding-left-2" id="navbar-collapse-1">

                                    <ul className="navbar-nav text-bold space-0">
                                      <li className="nav-item"><a className="nav-link" href="https://pages.stagedhomes.com/why-stagedhomes-com/">WHY StagedHomes?</a></li>
                                      <li className="nav-item"><a className="nav-link" href="https://pages.stagedhomes.com/stagedhomes-courses-overview/">Home Staging Courses</a></li>



                                      <li className="nav-item"><a className="nav-link" href="/asps/asps.php">Find a Pro</a></li>
                                      <li className="nav-item"><a className="nav-link" href="/homes/homes.php">Staged Properties</a></li>
                                      <li className="nav-item"><a className="nav-link" href="/statistics/statistics.php">Industry Stats</a></li>


                                    </ul>

                                  </div>
                                </div>
                              </nav>

                            </div>

                          </div>

                        </div>
              </div>
            </div>
          </header>

      </div> 

    </div>
  )
}

export default Header;
