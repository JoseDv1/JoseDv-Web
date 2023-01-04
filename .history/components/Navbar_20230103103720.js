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
          background-color: #fff;
          color: #000;
          padding: 1rem;
          height: 50px;
        }
      `}</style>
    </>
  );
}
