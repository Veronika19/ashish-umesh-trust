const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="footer-logo">
              <a href="index.html" title="Welcome to Charity">
                <img src="img/logo.png" alt="Charity" />
              </a>
            </div>
            <p>
              It is a fundraising association that works globally to provide support in education
              via charity. Their members have spread worldwide to ensure that fundraising amount to
              delivering at the right place and for the right purposes
            </p>
            <address>
              <span>
                {' '}
                <i className="fa fa-home"></i> <span>A-105, Sector-82, Agra, 282001, India</span>{' '}
              </span>
              <span>
                {' '}
                <i className="fa fa-phone-square"></i> <span>+1 123 456 7890</span>{' '}
              </span>
              <span>
                {' '}
                <i className="fa fa-envelope"></i>{' '}
                <span>
                  <a href="/cdn-cgi/l/email-protection#82e1edecf6e3e1f6c2e1eae3f0ebf6fbace1edef">
                    <span
                      className="__cf_email__"
                      data-cfemail="5f3c30312b3e3c2b1f3c373e2d362b26713c3032"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </span>{' '}
              </span>
            </address>
          </div>
          <div className="col-xs-12 col-sm-4 twitter-update">
            <h6>Twitter Feed</h6>
            <p>
              <a href="#">
                {' '}
                <span className="charity">@charity</span> We are a charity trust that dedicatedly
                work for several countries around the globe. Twitter Alerts will provide your some
                critical information about those people that need help of yours.{' '}
                <span className="comment-time">2 hours ago</span>{' '}
              </a>
            </p>
            <p>
              <a href="#">
                {' '}
                <span className="charity">@charity</span> Use Twitter as the best conversation
                platform to make the people aware of the worst situation that many of Africans are
                facing. Tweet for them and raise fund in the best possible way.{' '}
                <span className="comment-time">2 hours ago</span>{' '}
              </a>
            </p>
          </div>
          <div className="col-xs-12 col-sm-4">
            <h6>Newsletter Signup</h6>
            <p>
              Sign up your account to check our newsletter that will undoubtedly help you acquainted
              with current scenario.
            </p>
            <form role="form" className="sign-up">
              <div className="input-group">
                <input className="form-control" type="email" placeholder="Email" />
                <div className="input-group-addon">
                  <input type="submit" className="btn btn-theme" value="Submit" />
                </div>
              </div>
            </form>

            <h6>Follow us</h6>
            <ul className="social-icons">
              <li>
                <a href="../../../index.htm" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-1.htm" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-2.htm" target="_blank">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-3.htm" target="_blank">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="../../../ServiceLogin.html" target="_blank">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="../../../index-4.htm" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <span> &copy; Copyright 2014, All Rights Reserved by Charity Theme.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
