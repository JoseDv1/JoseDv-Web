import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import projectsList from "../data/projects";

export default function Home() {
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
        <AboutMe />
        <Projects projects={projectsList} />
      </main>

      <Footer
        theme={{ background: "#000000", color: "#ffffff" }}
        brand={{ name: "JoseDv1 Web", logo: "images/logo.jpg" }}
        social={[
          {
            name: "Facebook",
            url: "https://www.facebook.com/JoseDv23",
            icon: "facebook.svg",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/Jose_Dv1",
            icon: "twitter.svg",
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/jose_dv1/",
            icon: "instagram.svg",
          },
          {
            name: "Github",
            url: "https://github.com/JoseDv1",
            icon: "github.svg",
          },
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/josedv1",
            icon: "linkedin.svg",
          },
        ]}
        contact={{
          phone: "+57 3103652785",
          email: "Jose123millon@gmail.com",
        }}
      />

      <style jsx global>{`
        body {
          background-color: #656462;
          background-image: url("images/background.jpg");
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          width: fit-content;
        }
      `}</style>
    </>
  );
}
