import React from "react";

export function Navbar(props) {
  return (
    <>
      <nav>
        <div>
          <section>
            <strong>LOGO</strong>
          </section>
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
            <li>Habilities</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Services</li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        nav {
          background-color: transparent;
          color: #000;
          padding: 1rem;
          height: 50px;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(255, 255, 255, 0) 100%
          );
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
        }

        div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
