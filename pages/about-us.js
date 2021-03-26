import Head from 'next/head';
import Link from 'next/link';
// import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div id="main">
      <Head>
        <title>About - Umesh Help Trust</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>Umesh HelpTrust</h1>
              <ul className="breadcrumb">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
