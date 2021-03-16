import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

const MainHome = () => {
  useEffect(() => {
    /** adding progree bar for cause */
    if ($('.progressbar').length) {
      $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
          $('.progressbar')
            .find('.progress')
            .each(function () {
              var val = parseInt($(this).find('.progress-bar').attr('aria-valuenow'));
              $(this)
                .find('.progress-bar')
                .width(val + '%');
            });
        }
      });
    }

    if ($('.flexslider').length) {
      $('.our-causes .flexslider').flexslider({
        animation: 'slide',
        animationLoop: false,
        itemWidth: 360,
        itemMargin: 30,
        start: function (slider) {
          $('body').removeClass('loading');
        },
      });
    }
  }, []);

  return (
    <div id="main">
      <Head>
        <title>Home - Umesh Help Trust</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="our-causes">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="page-header section-header clearfix">
                <h2>
                  Help multifarious people with your little donation.{' '}
                  <strong> Go Through Our Causes</strong>
                </h2>
              </div>

              <div className="article-list flexslider article-slider progressbar">
                <ul className="slides">
                  <li>
                    <div className="items zoom">
                      <h3 className="h6">Help African Children Get Their Own Homes</h3>
                      <a href="#" className="img-thumb">
                        <figure>
                          <img src="img/img-slide-01.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-value">72% </span>
                        </div>
                      </div>
                      <span className="donation">
                        Donation :{' '}
                        <span className="value">
                          $78,354 <small>/ $1,26,500</small>
                        </span>
                      </span>
                      <p>
                        Improve living style of people, who are affected by several health issues &
                        poverty and unable to come out this situation.
                      </p>
                      <a
                        data-toggle="modal"
                        href="external.html"
                        data-target=".donate-form"
                        className="btn btn-default"
                      >
                        DONATE NOW
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="items zoom">
                      <h3 className="h6">Make Girls Educated To Aid Them Earn Reputed Position</h3>
                      <a href="#" className="img-thumb">
                        <figure>
                          <img src="img/img-slide-02.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-value">60% </span>
                        </div>
                      </div>
                      <span className="donation">
                        Donation :{' '}
                        <span className="value">
                          $78,354 <small>/ $1,26,500</small>
                        </span>
                      </span>
                      <p>
                        Give an opportunity to girls to become educated, so that, they can stand
                        with boys and get a self exposure worldwide.
                      </p>
                      <a
                        data-toggle="modal"
                        href="external.html"
                        data-target=".donate-form"
                        className="btn btn-default"
                      >
                        DONATE NOW
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="items zoom">
                      <h3 className="h6">Help us to send Vegetables to Africa</h3>
                      <a href="#" className="img-thumb">
                        <figure>
                          <img src="img/img-slide-03.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-value">80% </span>
                        </div>
                      </div>
                      <span className="donation">
                        Donation :{' '}
                        <span className="value">
                          $78,354 <small>/ $1,26,500</small>
                        </span>
                      </span>
                      <p>
                        You can offer your support by sending vegetables that we can further send to
                        these children in Africa
                      </p>
                      <a
                        data-toggle="modal"
                        href="external.html"
                        data-target=".donate-form"
                        className="btn btn-default"
                      >
                        DONATE NOW
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="items zoom">
                      <h3 className="h6">Help African Children Get Their Own Homes 2</h3>
                      <a href="#" className="img-thumb">
                        <figure>
                          <img src="img/img-slide-01.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-value">72% </span>
                        </div>
                      </div>
                      <span className="donation">
                        Donation :{' '}
                        <span className="value">
                          $78,354 <small>/ $1,26,500</small>
                        </span>
                      </span>
                      <p>
                        Improve living style of people, who are affected by several health issues &
                        poverty and unable to come out this situation.
                      </p>
                      <a
                        data-toggle="modal"
                        href="external.html"
                        data-target=".donate-form"
                        className="btn btn-default"
                      >
                        DONATE NOW
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="items zoom">
                      <h3 className="h6">
                        Make Girls Educated To Aid Them Earn Reputed Position 2
                      </h3>
                      <a href="#" className="img-thumb">
                        <figure>
                          <img src="img/img-slide-02.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-value">60% </span>
                        </div>
                      </div>
                      <span className="donation">
                        Donation :{' '}
                        <span className="value">
                          $78,354 <small>/ $1,26,500</small>
                        </span>
                      </span>
                      <p>
                        Give an opportunity to girls to become educated, so that, they can stand
                        with boys and get a self exposure worldwide.
                      </p>
                      <a
                        data-toggle="modal"
                        href="external.html"
                        data-target=".donate-form"
                        className="btn btn-default"
                      >
                        DONATE NOW
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="items zoom">
                      <h3 className="h6">Help us to send Vegetables to Africa</h3>
                      <a href="#" className="img-thumb">
                        <figure>
                          <img src="img/img-slide-03.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-value">80% </span>
                        </div>
                      </div>
                      <span className="donation">
                        Donation :{' '}
                        <span className="value">
                          $78,354 <small>/ $1,26,500</small>
                        </span>
                      </span>
                      <p>
                        You can offer your support by sending vegetables that we can further send to
                        these children in Africa
                      </p>
                      <a
                        data-toggle="modal"
                        href="external.html"
                        data-target=".donate-form"
                        className="btn btn-default"
                      >
                        DONATE NOW
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="items zoom">
                      <h3 className="h6">Help African Children Get Their Own Homes 3</h3>
                      <a href="#" className="img-thumb">
                        <figure>
                          <img src="img/img-slide-01.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="72"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-value">72% </span>
                        </div>
                      </div>
                      <span className="donation">
                        Donation :{' '}
                        <span className="value">
                          $78,354 <small>/ $1,26,500</small>
                        </span>
                      </span>
                      <p>
                        Improve living style of people, who are affected by several health issues &
                        poverty and unable to come out this situation.
                      </p>
                      <a
                        data-toggle="modal"
                        href="external.html"
                        data-target=".donate-form"
                        className="btn btn-default"
                      >
                        DONATE NOW
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="items zoom">
                      <h3 className="h6">
                        Make Girls Educated To Aid Them Earn Reputed Position 3
                      </h3>
                      <a href="#" className="img-thumb">
                        <figure>
                          <img src="img/img-slide-02.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-value">60% </span>
                        </div>
                      </div>
                      <span className="donation">
                        Donation :{' '}
                        <span className="value">
                          $78,354 <small>/ $1,26,500</small>
                        </span>
                      </span>
                      <p>
                        Give an opportunity to girls to become educated, so that, they can stand
                        with boys and get a self exposure worldwide.
                      </p>
                      <a
                        data-toggle="modal"
                        href="external.html"
                        data-target=".donate-form"
                        className="btn btn-default"
                      >
                        DONATE NOW
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="items zoom">
                      <h3 className="h6">Help us to send Vegetables to Africa</h3>
                      <a href="#" className="img-thumb">
                        <figure>
                          <img src="img/img-slide-03.jpg" alt="" />
                        </figure>
                      </a>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="progress-value">80% </span>
                        </div>
                      </div>
                      <span className="donation">
                        Donation :{' '}
                        <span className="value">
                          $78,354 <small>/ $1,26,500</small>
                        </span>
                      </span>
                      <p>
                        You can offer your support by sending vegetables that we can further send to
                        these children in Africa
                      </p>
                      <a
                        data-toggle="modal"
                        href="external.html"
                        data-target=".donate-form"
                        className="btn btn-default"
                      >
                        DONATE NOW
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainHome;
