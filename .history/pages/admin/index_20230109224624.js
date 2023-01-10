import React from "react";
import { Navbar } from "../../components/Navbar";

function Admin() {
  return (
    <>
      <Navbar />
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
      `}</style>
    </>
  );
}

export default Admin;
