export function Projects() {
  return (
    <>
      <section id="Projects">
        <article>Algo</article>
        <article>Algo</article>
        <article>Algo</article>
        <article>Algo</article>
      </section>

      <style jsx>
        {`
          section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          }

          article {
            background-color: #ffffff;
          }
        `}
      </style>
    </>
  );
}
