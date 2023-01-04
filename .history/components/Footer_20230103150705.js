import PropTypes from "prop-types";

export function Footer({ theme, links, social, contact, brand }) {
  return (
    <>
      <footer>
        <section className="brand">
          <img src={brand.logo} alt={brand.name} />
          <h3>{brand.name}</h3>
        </section>

        <section>
          <h3>Contact</h3>
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

          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: space-between;
          align-items: center;
        }

        section.brand {
          display: flex;
          align-items: center;
          justify-content: center;
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

Footer.propTypes = {
  theme: PropTypes.object,
  links: PropTypes.array,
  social: PropTypes.array,
  contact: PropTypes.array,
  brand: PropTypes.object,
};

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
