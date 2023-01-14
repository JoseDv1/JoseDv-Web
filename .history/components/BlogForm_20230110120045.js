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
        {" "}
        {`
          section {
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
          }
        `}{" "}
      </style>
    </>
  );
}
