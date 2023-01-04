export function Projects() {
  return (
    <>
      <section id="Projects">
        <article>
          <h2>Project 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </article>
      </section>

      <style jsx>
        {`
          section {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
          }

          article {
            background-color: #ffffff;
          }
        `}
      </style>
    </>
  );
}
