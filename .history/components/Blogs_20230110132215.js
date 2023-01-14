import React from "react";
import { useEffect, useState } from "react";
import {
  addDocToCollection,
  getDocsFromCollection,
} from "../firebase/firestore";

export function Blogs() {
  const blogIdSTATES = {
    SUCCESS: "Success",
    FAILED: "Failed",
    NONE: null,
  };
  const [blogId, setBlogId] = useState(null);
  const [blogIdStatus, setBlogIdStatus] = useState(blogIdSTATES.NONE);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getDocsFromCollection("blogs").then((docs) => setBlogs(docs));
  }, []);

  useEffect(() => {
    getDocsFromCollection("blogs").then((docs) => setBlogs(docs));
  }, [blogIdStatus]);

  console.log(blogs);
  const handlePostForm = (e) => {
    e.preventDefault();
    const title = document.querySelector("input");
    const content = document.querySelector("textarea");
    if (title.value && content.value) {
      const data = {
        title: title.value,
        content: content.value,
      };
      addDocToCollection("blogs", data).then((id) => setBlogId(id));
      title.value = "";
      content.value = "";
      setBlogIdStatus(blogIdSTATES.SUCCESS);
    } else {
      setBlogIdStatus(blogIdSTATES.FAILED);
    }
  };

  return (
    <>
      <section id="PostBlog">
        <h1>Post a blog</h1>
        <form>
          <label>Title</label>
          <input type="text" placeholder="Titulo" />
          <label>Content</label>
          <textarea placeholder="Contenido" cols="60" rows="8" />
          <button onClick={handlePostForm}>Post</button>
        </form>

        {blogIdStatus == blogIdSTATES.SUCCESS && (
          <div className="PostSuccess">
            <p>Blog posted successfully with id: {blogId}</p>
          </div>
        )}

        {blogIdStatus == blogIdSTATES.FAILED && (
          <div className="PostFailed">
            <p> Error: Por favor llena todos los campos </p>
          </div>
        )}
      </section>

      <section>
        <h1>Blogs</h1>
      </section>

      {/* Post Form Styles */}
      <style jsx>
        {`
          #PostBlog {
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

          #PostBlog h1 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          #PostBlog form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            width: 100%;
          }

          #PostBlog label {
            font-size: 1rem;
          }

          #PostBlog input {
            padding: 0.5rem;
            border: 1px solid #000000;
            border-radius: 0.5rem;
            background-color: #ffffff;
            color: #000000;
            font-size: 1rem;
            width: 100%;
            margin-bottom: 1rem;
          }

          #PostBlog button {
            padding: 0.5rem;
            border: 1px solid #000000;
            border-radius: 0.5rem;
            background-color: #000000;
            color: #ffffff;
            font-size: 1rem;
            cursor: pointer;
          }

          #PostBlog button:hover,
          #PostBlog button:focus,
          #PostBlog button:active {
            background-color: #ffffff;
            color: #000000;
          }

          #PostBlog textarea {
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

          #PostBlog .PostSuccess {
            background-color: #afa;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.5rem;
            color: #000000;
            width: 80%;
          }

          #PostBlog .PostFailed {
            background-color: #faa;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0.5rem;
            color: #000000;
            width: 80%;
          }
        `}
      </style>

      <style jsx>{``}</style>
    </>
  );
}
