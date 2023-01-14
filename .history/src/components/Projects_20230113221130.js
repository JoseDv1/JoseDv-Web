import { getDocsFromCollection } from "firebase/firestore.js";

Projects.getInitialProps = async () => {
  const projects = await getDocsFromCollection("projects");
  return { projects };
};

export function Projects() {
  return (
    <>
      <section id="Projects">
        {projects.map((project, index) => (
          <article key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="links">
              {project.links.github && (
                <a className="github" href={project.links.github}>
                  <img src="images/github.png" alt="Github" />
                  <p> GitHub</p>
                </a>
              )}
              {project.links.demo && (
                <a className="demo" href={project.links.demo}>
                  <img src="images/demo.png" alt="Demo" />
                  <p> Demo </p>
                </a>
              )}
            </div>
          </article>
        ))}
      </section>

      <style jsx>
        {`
          section {
            margin: 1rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
            gap: 1rem;
            color: #000000;
          }

          article {
            margin: 1rem;
            padding: 1rem;
            background-color: #ffffff;
            border-radius: 0.5rem;
            box-shadow: 5px 5px 20px 0 #000000;
          }

          article .links {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 1rem;
          }
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}
