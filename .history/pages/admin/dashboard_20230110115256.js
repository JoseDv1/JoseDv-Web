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
            <h1>Post a blog</h1>
                <label>Title</label>
                <input type="text" placeholder="Title" />
                
            </input>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
