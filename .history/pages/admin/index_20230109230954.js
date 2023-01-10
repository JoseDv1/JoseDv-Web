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
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        section {
          background-color: #f0f0f0;
          padding: 2rem;
          border-radius: 2rem;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        h1 {
          font-size: 3rem;
          margin: 0;
          padding: 0;
        }

        p {
          font-size: 1.5rem;
        }

        button {
          background-color: #000000;
          color: #ffffff;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.5rem;
          border-radius: 5px;
          margin-top: 1rem;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background-color: #888;
          color: #000000;
        }
      `}</style>
    </>
  );
}

export default Admin;
