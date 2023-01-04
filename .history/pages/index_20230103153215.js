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
      />
    </>
  );
}
