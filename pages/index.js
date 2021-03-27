import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    let isMobile = navigator.userAgent.match(
      /(iPhone|iPod|Android|BlackBerry|iPad|IEMobile|Opera Mini)/
    );

    if (!isMobile) {
      var animSection = function () {
        $('.anim-section').each(function () {
          if ($(window).scrollTop() > $(this).offset().top - $(window).height() / 1.15) {
            $(this).addClass('animate');
          }
        });
      };

      if ($('.anim-section').length) {
        animSection();
        $(window).scroll(function () {
          animSection();
        });
      }
    }

    // alert(isMobile);
    $('.testimonial .flexslider, .donation-holder .flexslider,.flex-slide.flexslider').flexslider({
      animation: 'slide',
      animationLoop: false,
    });
  }, []);

  return (
    <div id="main" itemScope itemType="https://schema.org/NGO">
      <Head>
        <title>Umesh Help Trust</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 itemProp="name">Umesh HelpTrust</h1>
              <ul className="breadcrumb">
                <li>
                  <b>Regd. No. : 2020/TEN/148/BK4/2</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="content-wrapper" id="page-info">
        <div className="container">
          <section className="our-story row">
            <div className="col-xs-12">
              <header className="story-heading section-header">
                <h2>
                  हम कौन हैं ?&nbsp;&nbsp;<strong>एक सामाजिक संस्था</strong>
                </h2>
              </header>
              <div className="row">
                <div className="col-xs-12 col-sm-5">
                  <section className="slider-wrap flex-slide flexslider">
                    <ul className="slides">
                      <li>
                        <img src="img/img-slide-01.jpg" alt="" />
                      </li>
                      <li>
                        <img src="img/img-slide-02.jpg" alt="" />
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="col-xs-12 col-sm-7">
                  <strong className="article-sammury">
                    दान एक व्यापक मंच है, जहाँ दुनिया के किसी भी हिस्से से कोई भी व्यक्ति जीवन स्तर
                    को बढ़ाने के लिए भाग्य के छोटे हिस्से को दान कर सकता है और साथ ही वंचित गरीब
                    लोगों और बच्चों की अन्य सभी बुनियादी जरूरतों को पूरा कर सकता है।
                  </strong>
                  <p className="article-sammury">
                    हम अपने लिए फंड नहीं जुटाते। वास्तव में, हम उन सभी निधियों का उपयोग करते हैं, जो
                    समग्र विकास के मामले में सबसे अच्छे तरीके से दान के माध्यम से आते हैं सभी आयु
                    वर्ग के बच्चे। हमारी टीम दिन-रात काम कर रही है ताकि यह सुनिश्चित हो सके कि हमारे
                    फंड डोनर को कोई परेशानी न हो।
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="our-works row anim-section">
            <div className="col-xs-12">
              <header className="work-block-heading section-header">
                <h2>
                  <strong>
                    मात्र 100/- रुपये सहयोग देकर प्रत्येक बुधवार को बाल एवं दाढ़ी मुफ्त में बनवायें
                    ।
                  </strong>
                </h2>
                <h3 className="message">
                  आपके सहयोग से जरूरतमंदो को निम्नलिखित सेवायें प्रदान किया जायेगा
                </h3>
              </header>
              <div className="row services  text-center">
                <div className="col-xs-12 col-sm-6 zoom">
                  <img src="/img/icon-service-06.png" alt="Umesh help trust provides Clothing" />
                  <h3 className="h3">Clothing</h3>
                  <p>
                    जो व्यक्ति गाड़ी चलाते समय एक वर्ष में कम से कम 300 दिनों तक हेलमेट पहनता है तो
                    उसे संस्था के द्वारा 12 सेट कपड़ा देकर सम्मानित किया जायेगा।
                  </p>
                </div>
                <div className="col-xs-12 col-sm-6 zoom ">
                  <img
                    src="/img/icon-service-02.png"
                    alt="Umesh help trust provides Education Support"
                  />
                  <h3 className="h3">Education Support</h3>
                  <p>
                    उमेश हेल्प ट्रस्ट गरीब छात्रों के लिए मुफ्त में अंग्रेजी बोली जाने वाली कक्षाओं
                    को सीखने का अवसर प्रदान करता है
                  </p>
                </div>
                <div className="col-xs-12 col-sm-6 anim-section zoom">
                  <img
                    src="/img/icon-service-03.png"
                    alt="Umesh help trust provides Health and Enviroment"
                  />
                  <h3 className="h3">Health and Enviroment</h3>
                  <p>
                    संस्था के द्वारा फलदार वृक्ष लगाकर उसकी देख भाल करने वाले व्यक्ति को संस्था की
                    ओर से एक मुफ्त मेडिकल कार्ड दिया जायेगा जिसमें 5 वर्षों तक किसी भी तरह का बिमारी
                    इलाज मुफ्त किया जायेगा।
                  </p>
                </div>
                <div className="col-xs-12 col-sm-6 anim-section zoom">
                  <img
                    src="/img/icon-service-04.png"
                    alt="Umesh help trust helps in Erasing Malnutrition"
                  />
                  <h3 className="h3">Erasing Malnutrition</h3>
                  <p>
                    सिर्फ एक कॉल पर रात्रि भोजन की व्ययवस्था मुफ्त में दिया जायेगा । <br />
                    मो0 : 8409026364
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 anim-section zoom">
                  <img src="/img/icon-service-01.png" alt="Umesh help trust provides Clothing" />
                  <h3 className="h3">Marriage</h3>
                  <p>संस्था के द्वारा लड़की की शादी पर 50 किलो चावल दिया जायेगा ।</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="helping-child parallax">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-7 col-md-5">
                <h2 className="h1" style={{ lineHeight: 1.2 }}>
                  हम झारखंड में बच्चों की &nbsp;
                  <strong className="border-none">मदद करते हैं</strong>
                </h2>
                <p>आप बच्चों के लिए मुस्कुराहट लाने के लिए बस कुछ ही क्लिक दूर हैं। </p>
                <Link href="/trust-donation-jharkhand">
                  <a className="btn btn-theme">Donate now</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="our-team text-center row">
            <div className="col-xs-12">
              <header className="team-info section-header">
                <h2>
                  उमेश हेल्प ट्रस्ट. <strong className="border-none">हमारी टीम के सदस्य</strong>
                </h2>
              </header>
              <div className="row">
                <div className="col-xs-12 col-sm-3 anim-section">
                  <div className="thumbnail">
                    <figure>
                      <img src="img/team-member1.jpg" alt="" />
                    </figure>
                    <div className="caption">
                      <h3>Jhony Waker</h3>
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3 anim-section">
                  <div className="thumbnail">
                    <figure>
                      <img src="img/team-member2.jpg" alt="" />
                    </figure>
                    <div className="caption">
                      <h3>Tony Vedvik</h3>
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3 anim-section">
                  <div className="thumbnail">
                    <figure>
                      <img src="img/team-member3.jpg" alt="" />
                    </figure>
                    <div className="caption">
                      <h3>John Doe </h3>
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-3 anim-section">
                  <div className="thumbnail">
                    <figure>
                      <img src="img/team-member4.jpg" alt="" />
                    </figure>
                    <div className="caption">
                      <h3>Bryant Cranford</h3>
                      <ul className="social-icons">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-google-plus"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
