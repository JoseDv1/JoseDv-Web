export function Footer({ theme, links, social, contact, brand }) {
  return (
    <>
      <footer>
        <section className="brand">
          <img src={brand.logo} alt={brand.name} />
          <h3>{brand.name}</h3>
        </section>

        <section>
          <h3>Social</h3>
          <ul>
            {
              social.map((item, index) => (
                <li key={index}>
            }
          </ul>
        </section>
      </footer>

      <style jsx>{`
        footer {
          background-color: ${theme.background};
          color: ${theme.color};
          padding: 1rem;
          height: 100px;
          position: fixed;
          margin: 0;
          bottom: 0;
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: space-beetween;
        }

        section.brand {
          margin: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        section img {
          height: 100%;
          width: 100px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}

Footer.defaultProps = {
  theme: {
    background: "#000000",
    color: "#00000",
  },
  links: [],
  social: [],
  contact: [],
  brand: {
    name: "JoseDv1 Web",
    logo: "logo.jpg",
  },
};
