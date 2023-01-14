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

          h1 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            width: 100%;
          }

          label {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          input,
          textarea {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #000000;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
          }

          button {
            padding: 0.5rem;
            border: 1px solid #000000;
            border-radius: 0.5rem;
            background-color: #000000;
            color: #ffffff;
            font-size: 1rem;
            cursor: pointer;
          }

          button:hover {
            background-color: #ffffff;
            color: #000000;
          }

          textarea {
            width: 20rem
            height: 10rem;
          }
        `}
      </style>
    </>
  );
}
