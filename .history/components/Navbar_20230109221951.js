import propTypes from "prop-types";
import { useState, useEffect } from "react";
import { authState } from "../firebase/auth";

export function Navbar({ theme, links, search, brand }) {
  const [user, setUser] = useState(null);

  useEffect(() =>
    authState((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  ),
    [];

  console.log(user);

  return (
    <>
      <nav>
        <section>
          <a href="#">
            {brand.logo && <img src={brand.logo} alt={brand.name} />}
            <h1>{brand.name}</h1>
          </a>
        </section>

        {search && <input type="text" placeholder="Search" />}

        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        nav {
          background-color: transparent;
          background: linear-gradient(
            to bottom,

            ${theme.background + "88"} 0%,
            rgba(0, 0, 0, 0) 100%
          );
          color: ${theme.color};

          padding: 1rem;
          height: 50px;

          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;

          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 1.5rem;
        }

        section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        section img {
          width: 100%;
          max-width: 50px;
        }

        ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 20px;
        }

        li {
          font-weight: 500;
          transition: all 0.2s ease-in-out;
          border-bottom: 2px solid transparent;
        }

        li:hover {
          cursor: pointer;
          border-bottom: 2px solid ${theme.color};
        }

        input {
          border: none;
          border-radius: 100px;
          padding: 0.5rem;
          background-color: #fff;
          color: #000;
          width: 50%;
          margin: 0 1.5rem;
        }

        input:focus {
          outline: none;
          box-shadow: 0 0 10px 1px ${theme.color};
        }

        a {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </>
  );
}

Navbar.propTypes = {
  theme: propTypes.shape({
    background: propTypes.string,
    color: propTypes.string,
  }),
  links: propTypes.arrayOf(propTypes.object),
  search: propTypes.bool,
  brand: propTypes.shape({
    name: propTypes.string,
    logo: propTypes.string,
  }),
};

Navbar.defaultProps = {
  theme: {
    background: "#000000",
    color: "#ffffff",
  },
  links: ["About", "Experience", "Projects", "Contact", "Blog"],
  search: true,
  brand: {
    name: "BRANDNAME",
    logo: "",
  },
};
