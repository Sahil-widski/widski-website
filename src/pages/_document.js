import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="Widski Technologies, Mobile App Development Company, App Designing, UI/UX, Digital Marketing"
          />
          <meta
            name="description"
            content="Widski Technology - Mobile app development is indeed nowadays necessary for all the business. We, as a mobile application development company can provide high quality standard mobile app of any category. We have worked with diverse brands, organizations, startups and individuals to create powerful apps from excellent idea."
          />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-4JHCTFK45G"></script>
        </Head>

        <body>
          <Main />
          <NextScript />
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4JHCTFK45G"></script>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
