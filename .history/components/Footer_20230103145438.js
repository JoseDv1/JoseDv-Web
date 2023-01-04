import PropTypes from "prop-types";

export function Footer({ theme, links, social, contact }) {
  return (
    <>
      <footer>
        <section>
          <h3>Links</h3>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
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
