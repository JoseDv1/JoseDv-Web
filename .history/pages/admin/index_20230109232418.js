import React from "react";
import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { signInWithGithub, authState } from "../../firebase/auth";

function Admin() {
  function handleClick() {
    signInWithGithub();
  }

  const [user, setUser] = useState({});
  setTimeout(() => {
    authState(setUser);
    user.uid == "faxS8t0CWpbdKQD9yl5BDzznOj42";
  }, 200);

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
          <button onClick={handleClick}>Github Login</button>
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
          background-image: url("images/noise.png");
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
          transition: all 0.3s ease-in-out;
        }

        button:hover {
          background-color: #666;
          color: #000000;
        }
      `}</style>
    </>
  );
}

export default Admin;
