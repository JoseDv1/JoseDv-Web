import React from "react";

export function AboutMe() {
  return (
    <>
      <section id="AboutMe">
        <img src="images/profile.jpg" alt="JoseDv1" />
        <article>
          <h1>About Me</h1>
          <p>
            Soy un joven de 19 años apasionado por la programación y el
            desarrollo web. También disfruto de los videojuegos y estoy siempre
            buscando aprender más sobre tecnología, blockchain, desarrollo web,
            Desarrollo de videojuegos, Ciencia de datos, Machine Learning,
            Economía, Inversiones y nuevas habilidades.
          </p>

          <p>
            Además de mis intereses en la informática, Soy dueño de mi propio
            bar, lo que me ha dado una amplia gama de habilidades empresariales
            y de liderazgo
          </p>
          <p>
            Me encanta trabajar en equipo y aprender de los demás, así que no
            dudes en contactarme si quieres trabajar en un proyecto juntos.
          </p>
          <p>
            Esta es mi pagina web personal, donde comparto mis proyectos y
            experiencias. Espero que te guste.
          </p>
        </article>
      </section>

      <style jsx>{`
        section {
          background: #fec615;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(425px, 1fr));
          justify-content: center;
          place-items: center;

          gap: 10px;
          margin: 20px 50px 50px;
          padding: 20px;
          height: fit-content;
          width: fit-content;
          border: 5px solid #000000;
          border-radius: 5rem;
        }

        img {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          border: 5px solid #000000;
          box-shadow: 0px 15px 20px #000;
        }

        article {
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 5px;
          margin-left: 40px;

          font-size: 1.2rem;
          font-weight: 600;
          text-shadow: 5px 5px 20px #000;
        }

        h1 {
          margin: 0;
          padding: 0;
          font-size: 2rem;
          font-weight: 800;
        }

        p {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  );
}
