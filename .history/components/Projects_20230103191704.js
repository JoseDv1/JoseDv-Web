export function Projects() {
  return (
    <>
      <section id="Projects">
        <article>Algo</article>
      </section>

      <style jsx>
        {`
        section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        `}
      </style>
    </>
  );
}
