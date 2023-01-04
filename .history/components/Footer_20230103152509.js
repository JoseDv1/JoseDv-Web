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
          <h3>Social</h3>
          <ul>
            {social.map((social, index) => (
              return(
              <li key={index}>
                <a href={social.url}>{social.name}</a>
              </li>
            )))}
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
  social: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/josedv1",
      icon: "facebook.svg",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/josedv1",
      icon: "twitter.svg",
    },
    {
      name: "Instagram",
      url: "",
      icon: "instagram.svg",
    },
    {
      name: "Github",
      url: "https://github.com/JoseDv1",
      icon: "github.svg",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/josedv1/",
      icon: "linkedin.svg",
    },
  ],
  contact: [],
  brand: {
    name: "JoseDv1 Web",
    logo: "logo.jpg",
  },
};
