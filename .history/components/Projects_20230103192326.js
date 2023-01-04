export function Projects({ projects = [] }) {
  return (
    <>
      <section id="Projects">
        {projects.map((project, index) => (
          <article key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </section>

      <style jsx>
        {`
          section {
            margin: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1rem;
          }

          article {
            margin: 1rem;
            padding: 1rem;
            background-color: #ffffff;
            border-radius: 0.5rem;
            box-shadow: 5px 5px 20px 0 #000000;
          }
        `}
      </style>
    </>
  );
}
