export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #656462;
          background-image: url("images/background.jpg");
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          width: 100vw;
        }

        @media (max-width: 425px) {
          body {
            width: fit-content;

        }
      `}</style>
    </>
  );
}
