import React from "react";
import {
  addDocToCollection,
  deleteDocFromCollection,
  updateDocInCollection,
} from "../firebase/firestore";

export function BlogForm() {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <>
      <section id="PostBLog">
        <h1>Post a blog</h1>
        <form>
          <label>Title</label>
          <input type="text" placeholder="Title" />
          <label>Content</label>
          <textarea placeholder="Content" cols="60" rows="8" />
          <button onClick={handleClick}>Post</button>
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
            width: 80%;
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
          }

          input {
            padding: 0.5rem;
            border: 1px solid #000000;
            border-radius: 0.5rem;
            background-color: #ffffff;
            color: #000000;
            font-size: 1rem;
            width: 100%;
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

          button:hover,
          button:focus,
          button:active {
            background-color: #ffffff;
            color: #000000;
          }

          textarea {
            display: block;
            max-width: 100%;
            overflow: none;
            padding: 0.5rem;
            border: 1px solid #000000;
            border-radius: 0.5rem;
            background-color: #ffffff;
            color: #000000;
            font-size: 1rem;
            width: 100%;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  );
}
