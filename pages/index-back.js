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
                  Who we are? <strong>Read our Story</strong>
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
                    Charity is an extensive platform, where anyone from any part of the world can
                    donate the little part of the fortune to enhance living standard and education
                    system as well as fulfill all other basic needs of deprived African children.
                  </strong>
                  <p>
                    We do not raise fund for ourselves. Indeed, we use all the funds that come
                    through charity in the best of the best way in terms of holistic development of
                    children of all age groups. Our team is relentlessly working day and night to
                    ensure that there will no hassle for our fund donor.
                  </p>
                  <p>
                    We work for children welfare, who are daily exploited and living in the
                    condition deprived of healthy environment, proper eduction, food, cloth and
                    medical care.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="our-works row anim-section">
            <div className="col-xs-12">
              <header className="work-block-heading section-header">
                <h2>
                  What we do? <strong>See Our Works</strong>
                </h2>
              </header>
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="thumbnail zoom">
                    <h3>Personal Funds</h3>
                    <a href="blog-full-width.html" className="img-thumb">
                      <figure>
                        <img src="img/img-slide-01.jpg" alt="" />
                      </figure>
                    </a>
                    <p>
                      We support to you raise fund for charity causes that can be used to improve
                      the quality of African children, who are living in the worst condition.
                    </p>
                    <p>
                      <a
                        href="blog-full-width.html"
                        className="btn btn-default btn-sm"
                        role="button"
                      >
                        READ MORE
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="thumbnail zoom">
                    <h3>Creative Events</h3>
                    <a href="blog-full-width.html" className="img-thumb">
                      <figure>
                        <img src="img/img-slide-02.jpg" alt="" />
                      </figure>
                    </a>
                    <p>
                      Charity organizes different event to raise money for children’s welfare. We
                      have generated around 80% of the resource through different events.
                    </p>
                    <p>
                      <a
                        href="blog-full-width.html"
                        className="btn btn-default btn-sm"
                        role="button"
                      >
                        READ MORE
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="thumbnail zoom">
                    <h3>Sponsorships</h3>
                    <a href="blog-full-width.html" className="img-thumb">
                      <figure>
                        <img src="img/img-slide-05.jpg" alt="" />
                      </figure>
                    </a>
                    <p>
                      Our sponsorships program has not only helped us achieve mission, but also
                      helped sponsor boost their businesses.
                    </p>
                    <p>
                      <a
                        href="blog-full-width.html"
                        className="btn btn-default btn-sm"
                        role="button"
                      >
                        READ MORE
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3">
                  <div className="thumbnail">
                    <h3>Investors</h3>
                    <a href="blog-full-width.html" className="img-thumb">
                      <figure>
                        <img src="img/img-slide-03.jpg" alt="" />
                      </figure>
                    </a>
                    <p>
                      Join us? Be a part of our family of investors, whose contribution have
                      propelled us to reach to the envisioned goal without any problem.
                    </p>
                    <p>
                      <a
                        href="blog-full-width.html"
                        className="btn btn-default btn-sm"
                        role="button"
                      >
                        READ MORE
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="helping-child parallax">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-7 col-md-5">
                <h2 className="h1">
                  Helping child in <strong className="border-none">Africa</strong>
                </h2>
                <p>You are Just A Few Clicks Away To Bring Smile To Children. </p>
                <a
                  data-toggle="modal"
                  href="external.html"
                  data-target=".donate-form"
                  className="btn btn-theme"
                >
                  Donate now
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="our-team text-center row">
            <div className="col-xs-12">
              <header className="team-info section-header">
                <h2>
                  We are Real. <strong className="border-none">Meet the Team</strong>
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
