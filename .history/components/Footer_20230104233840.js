export function Footer({ theme, social, contact, brand }) {
  return (
    <>
      <footer>
        <section className="brand">
          <img src={brand.logo} alt={brand.name} />
          <h3>{brand.name}</h3>
        </section>

        <section className="social">
          <h3>Social</h3>
          <ul>
            {social.map((item, index) => (
              <li key={index}>
                <a href={item.url}> {item.name} </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={`mailto: ${contact.email}`}> {contact.email} </a>
            </li>
            <li>
              <a href={`tel: ${contact.phone}`}> {contact.phone} </a>
            </li>
          </ul>
        </section>
      </footer>

      <style jsx>{`
        footer {
          background-color: ${theme.background};
          color: ${theme.color};
          height: max-content;

          bottom: 0;
          left: 0;
          right: 0;

          padding: 20px 0;

          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          justify-content: center;
          place-items: center;
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

        section ul {
          display: flex;
          gap: 10px;

          list-style: none;
          padding: 5px 0;
          margin: 0;
        }

        section h3 {
          margin: 5px 0;
        }

        section li {
          margin: 5px 0;
        }

        a {
          color: ${theme.color};
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        li {
          list-style: none;
        }

        ul {
          list-style: none;
          padding: 0;
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
  contact: {
    phone: "+57 3103652785",
    email: "jose123millon@gmail.com",
  },
  brand: {
    name: "JoseDv1 Web",
    logo: "logo.jpg",
  },
};
