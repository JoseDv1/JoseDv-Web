import React from "react";

export function AboutMe() {
  return (
    <>
      <section>
        <img src="images/profile.jpg" alt="JoseDv1" />
        <article>
          <h1>About Me</h1>
          <p>
            Soy un joven de 19 años apasionado por la programación y el
            desarrollo web. También disfruto de los videojuegos y estoy siempre
            buscando aprender más sobre tecnología, blockchain, desarrollo web,
            Desarrollo de videojuegos, Ciencia de datos, Machine Learning,
            Economía, Inversiones y nuevas habilidades. Además de mis intereses
            en la informática, Soy dueño de mi propio bar, lo que me ha dado una
            amplia gama de habilidades empresariales y de liderazgo.{" "}
          </p>
        </article>
      </section>

      <style jsx>{`
        section {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 20px;
          height: 70vh;
        }

        img {
          width: 400px;
          height: 400px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}
