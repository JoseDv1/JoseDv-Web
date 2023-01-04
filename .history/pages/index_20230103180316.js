import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar
        theme={{ background: "#000000", color: "#00000" }}
        brand={{ name: "JoseDv1 Web", logo: "logo.jpg" }}
        search={false}
      />

      <Footer
        theme={{ background: "#000000", color: "#ffffff" }}
        brand={{ name: "JoseDv1 Web", logo: "logo.jpg" }}
        social={[
          {
            name: "Facebook",
            url: "https://www.facebook.com/josedv1",
            icon: "facebook.svg",
          },
          {
            name: "Twitter",
            url: "https://twitter.com/josedv1",
            icon: "twitter.svg",
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/josedv1",
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
      />
    </>
  );
}
