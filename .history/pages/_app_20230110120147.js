export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #202123;
          background-image: url("images/background.jpg");
          color: #ffffff;
          height: 100%;
          width: 100%;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
        }
      `}</style>
    </>
  );
}
