import React from "react";
import { Blogs } from "../../../components/Blogs";
import { Navbar } from "../../../components/Navbar";

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
        <Blogs />
      </main>

      <style jsx>
        {`
          main {
            padding-top: 80px;
            display: flex;
            justify-content: center;
            align-items: start;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}

export default Dashboard;
