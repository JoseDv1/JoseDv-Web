import React from "react";
import { Navbar } from "../../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar
        theme={{ background: "#000000", color: "#ffffff" }}
        brand={{ name: "JoseDv1 Web", logo: "/images/logo.jpg" }}
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
          <h1>Dashboard</h1>
          <p>Admin Dashboard</p>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
