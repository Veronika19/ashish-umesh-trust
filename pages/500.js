import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  <div id="main" itemScope itemType="https://schema.org/NGO">
    <Head>
      <title>Error - Umesh Help Trust</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="breadcrumb-section">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1>No Page Found</h1>
            <ul className="breadcrumb">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">404 Error</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <section className="container" id="page-info">
      <div className="row">
        <div className="col-xs-12 col-md-8 col-md-offset-2 four-zero-four">
          <strong>404</strong>

          <header className="page-header">
            <h2>Something Went Wrong To Find Page</h2>
            <p>
              The page you are looking for had an accident due to wrong URL, so try with right URL
              to reach at the target page.
            </p>
          </header>
          <Link href="/">
            <a className="btn btn-default">BACK TO HOMEPAGE</a>
          </Link>
        </div>
      </div>
    </section>
  </div>;
}
