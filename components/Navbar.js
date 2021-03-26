import Link from 'next/link';
import { useRouter } from 'next/router';

/** Note: for logging out I have used javascript instead of router.push as,
 * using push the layout header
 * menu section were not hiding the login and register menu
 * */

const Navbar = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="row primary-header">
          <Link href="/">
            <a className="col-xs-12 col-sm-2 brand" title="Welcome to Umesh help trust">
              <img className="logo" src="umesh-help-trust.png" alt="Umesh help trust" />
            </a>
          </Link>
          <div className="social-links col-xs-12 col-sm-10">
            <a href="volunteer.html" className="btn btn-default btn-volunteer">
              Become volunteer
            </a>
            <ul className="social-icons hidden-xs">
              <li>
                <a href="../../../index.htm" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="../../../ServiceLogin.html" target="_blank">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-1.htm" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-2.htm" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-3.htm" target="_blank">
                  <i className="fa fa-vimeo-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <nav>
              <ul className="nav navbar-nav">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">
                    <a>About Us</a>
                  </Link>
                </li>

                <li>
                  {/* <a href="javascript:;" data-toggle="dropdown" className="submenu-icon">
                    Causes <span className="glyphicon glyphicon-chevron-down"></span>{' '}
                    <span className="glyphicon glyphicon-chevron-up"></span>{' '}
                  </a> */}

                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="causes.html">Causes Home</a>
                      </li>
                      <li>
                        <a href="causes-detail.html">Causes Details full width</a>
                      </li>
                      <li>
                        <a href="causes-detail-with-sidebar.html">Causes Details with sidebar</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  {/* <a href="javascript:;" data-toggle="dropdown" className="submenu-icon">
                    features <span className="glyphicon glyphicon-chevron-down"></span>{' '}
                    <span className="glyphicon glyphicon-chevron-up"></span>{' '}
                  </a> */}

                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="our-story.html">Our Story</a>
                      </li>
                      <li>
                        <a href="our-mission.html">Our Mission</a>
                      </li>
                      <li>
                        <a href="volunteer.html">Become a Volunteer</a>
                      </li>
                      <li>
                        <a href="gallery-two-column.html">Gallery 2 Columns</a>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery 3 Columns</a>
                      </li>
                      <li>
                        <a href="faq.html">Faq </a>
                      </li>
                      <li>
                        <a href="error404.html">404 Error </a>
                      </li>
                      <li>
                        <a href="event.html">event </a>
                      </li>
                      <li>
                        <a href="event-details.html">Event-Details </a>
                      </li>

                      <li>
                        <a href="donation-payment-fail.html">Payment-Fail </a>
                      </li>
                      <li>
                        <a href="donation-payment-success.html">Payment-Success </a>
                      </li>
                      <li>
                        <a href="launch.html">launch </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  {/* <a href="javascript:;" data-toggle="dropdown" className="submenu-icon">
                    Gallery <span className="glyphicon glyphicon-chevron-down"></span>{' '}
                    <span className="glyphicon glyphicon-chevron-up"></span>{' '}
                  </a> */}

                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="portfolio-detail.html">Portfolio Detail</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  {/* <a href="javascript:;" data-toggle="dropdown" className="submenu-icon">
                    Blog <span className="glyphicon glyphicon-chevron-down"></span>{' '}
                    <span className="glyphicon glyphicon-chevron-up"></span>{' '}
                  </a> */}

                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a href="blog-full-width.html">Blog Full Width</a>
                      </li>
                      <li>
                        <a href="blog-full-width-details.html">Blog Detail Full Width</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/contact-us">
                    <a>contact us</a>
                  </Link>
                </li>
              </ul>
            </nav>

            <form className="navbar-form navbar-right search-form" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Here" />
              </div>
              <button type="submit">
                <i className="icon-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
