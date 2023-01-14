import React from "react";
import { Blogs } from "../../../components/DasboardBlogs";
import { DashboardProjects } from "../../../components/DashboardProjects";
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
        <DashboardProjects />
      </main>

      <style jsx>
        {`
          main {
            padding-top: 80px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            gap: 1.5rem;
          }
        `}
      </style>
    </>
  );
}

export default Dashboard;
