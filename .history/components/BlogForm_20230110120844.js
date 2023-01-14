export function BlogForm() {
  return (
    <>
      <section>
        <h1>Post a blog</h1>
        <form>
          <label>Title</label>
          <input type="text" placeholder="Title" />
          <label>Content</label>
          <textarea placeholder="Content" />
          <button>Post</button>
        </form>
      </section>

      <style jsx>
        {`
          section {
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            border-radius: 0.5rem;
            color: #000000;
          }
        `}
      </style>
    </>
  );
}
