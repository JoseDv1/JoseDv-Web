import React from "react";
import { BlogForm } from "../../../components/BlogForm";
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
        <BlogForm />
      </main>

      <style jsx>
        {`
          main {
            padding-top: 300px
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            height: 100vh;
            width: 100vw;
          }
        `}
      </style>
    </>
  );
}

export default Dashboard;
