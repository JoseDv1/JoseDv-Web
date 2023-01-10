import React from "react";
import { Navbar } from "../../components/Navbar";

function Admin() {
  return (
    <>
      <Navbar
        theme={{ background: "#000000", color: "#ffffff" }}
        brand={{ name: "JoseDv1 Web", logo: "images/logo.jpg" }}
        links={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "About Me",
            url: "#AboutMe",
          },
          {
            name: "Projects",
            url: "#Projects",
          },
        ]}
        search={false}
      />
      <main>
        <section>
          <h1>Admin</h1>
          <p>Please Log in as an admin</p>
          <button>Github Login</button>
        </section>
      </main>

      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }
      `}</style>
    </>
  );
}

export default Admin;
