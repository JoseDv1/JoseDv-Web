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
          margin: 0 10px 20px;
          padding: 20px;
          height: 80vh;
          border: 5px solid #000000;
          border-radius: 3rem;
        }

        img {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          border: 5px solid #000000;
        }

        article {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          gap: 5px;
          margin-left: 40px;

          font-size: 1.2rem;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
