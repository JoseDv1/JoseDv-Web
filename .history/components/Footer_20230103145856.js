import PropTypes from "prop-types";

export function Footer({ theme, links, social, contact, brand }) {
  return (
    <>
      <footer>
        <section>
          <h3>{brand.name}</h3>
          <img src={brand.logo} alt={brand.name} />
        </section>

        <section>
          <h3>Links</h3>
        </section>
      </footer>

      <style jsx>{`
        footer {
          background-color: ${theme.background};
          color: ${theme.color};
          padding: 1rem;
          height: 50px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin: 0;
          position: fixed;
          bottom: 0;
          width: 100%;
        }

        footer p {
          margin: 0;
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
  