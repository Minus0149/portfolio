import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"true"}
          />
          <link rel="icon" href="/asset/book.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />

          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Portfolio designed by minus for minus "
          />
          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, Portfolio, Minus"
          />
          <meta name="author" content="Minus" />
        </Head>
        <body className="h-full bg-gradient-to-r from-blue-700 to-teal-400 text-zinc-800 dark:text-slate-200 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
