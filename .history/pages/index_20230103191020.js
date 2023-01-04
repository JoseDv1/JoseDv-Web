import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AboutMe } from "../components/AboutMe";

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
        ]}
        search={false}
      />

      <AboutMe />

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
          background-color: #666666;
        }
      `}</style>
    </>
  );
}
