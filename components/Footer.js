const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="footer-logo">
              <a href="index.html" title="Welcome to Charity">
                Umesh help trust
              </a>
            </div>
            <p>
              यह एक धन उगाहने वाला संघ है जो झारखंड में दान के माध्यम से शिक्षा में सहायता प्रदान
              करने के लिए काम करता है। उनके सदस्य दुनिया भर में यह सुनिश्चित करने के लिए फैल गए हैं
              कि धनराशि सही जगह पर और सही उद्देश्यों के लिए पहुंचाई जाए
            </p>
            <address itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span>
                <i className="fa fa-home"></i>
                <span itemProp="streetAddress">सी.सी.एल. कॉलोनी, </span>
                <span itemProp="addressLocality">गोविन्दपुर, पो० : बोकारो थर्मल</span>, India
              </span>
              <span>
                <i className="fa fa-phone-square"></i>{' '}
                <span itemProp="telephone">+91-8409026364</span>
              </span>
            </address>
          </div>
          <div className="col-xs-12 col-sm-6 twitter-update">
            <h6>Twitter Feed</h6>
            <p>
              <a href="#">
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
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <span> &copy; Copyright 2021, All Rights Reserved by PankajWp.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
