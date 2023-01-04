import PropTypes from "prop-types";

export function Navbar({ theme, links, search, brand }) {
  return (
    <>
      <nav>
        <section>
          <strong>NAME AND LOGO</strong>
        </section>

        {search && <input type="text" placeholder="Search" />}

        <ul>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        nav {
          background-color: transparent;
          background: linear-gradient(
            to bottom,

            ${theme.background} 0%,
            rgba(0, 0, 0, 0) 100%
          );
          color: ${theme.color};

          padding: 1rem;
          height: 50px;

          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;

          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }

        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 20px;
        }

        li {
          cursor: pointer;
        }

        input {
          border: none;
          border-radius: 5px;
          padding: 0.5rem;
          background-color: #fff;
          color: #000;
        }

        input:focus {
          outline: none;
        }
      `}</style>
    </>
  );
}

Navbar.PropTypes = {
  theme: PropTypes.shape({
    background: PropTypes.string,
    color: PropTypes.string,
  }),

  links: PropTypes.arrayOf(PropTypes.string),

  search: PropTypes.bool,
};

Navbar.defaultProps = {
  theme: {
    background: "#000000",
    color: "#ffffff",
  },

  links: ["About", "Experience", "Projects", "Contact", "Blog"],

  search: true,

  brand: {
    name: "NAME",
    logo: "LOGO",
  },
};
