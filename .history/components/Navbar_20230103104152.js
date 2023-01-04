import React from "react";

export function Navbar(props) {
  return (
    <>
      <nav>
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Habilities</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Services</li>
        </ul>
      </nav>

      <style jsx>{`
        nav {
          background-color: #000000-00;
          color: #000;
          padding: 1rem;
          height: 50px;
          box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 1);
        }
      `}</style>
    </>
  );
}
