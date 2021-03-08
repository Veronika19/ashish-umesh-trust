import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>Charity</title>
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/bootstrap-theme.css" rel="stylesheet"></link>
        <link href="css/font-awesome.min.css" rel="stylesheet"></link>
        <link href="css/globals.css" rel="stylesheet"></link>
        <link href="css/style.css" rel="stylesheet"></link>
        <link href="css/responsive.css" rel="stylesheet"></link>
        <link href="css/skin.css" rel="stylesheet"></link>
      </Head>

      <div id="wrapper">
        <Navbar />
        {children}
        <Footer />
      </div>
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.easing.min.js"></script>
      <script src="js/jquery.flexslider.js"></script>
    </>
  );
};
export default Layout;
