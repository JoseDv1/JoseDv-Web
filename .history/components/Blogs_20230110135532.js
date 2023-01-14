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

  // HTML code
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

        <div className="message">
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
        </div>
      </section>

      <section id="GetBlogs">
        <h1>Blogs</h1>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <div>
                <h2>{blog.title}</h2>
                <strong>{blog.id}</strong>
              </div>
              <div className="buttons">
                <button>Read More</button>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Post BLogs */}
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

          #PostBlog .message {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            width: 100%;
          }
        `}
      </style>
      {/* GetBlogs */}
      <style jsx>
        {`
          #GetBlogs {
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

          #GetBlogs h1 {
            font-size: 1.5rem;
          }

          #GetBlogs ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            width: 100%;
            list-style: none;
            padding: 0;
            gap: 1rem;
          }

          #GetBlogs li {
            display: flex;
            flex-direction: rows;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0 40px;
            border-radius: 0.5rem;
            border: 2px dashed #000000;
            gap: 1rem;
            transition: all 0.3s ease;
          }

          #GetBlogs li:hover {
            background-color: #ccc;
          }

          #GetBlogs li div {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          #GetBlogs li div button:nth-child(1) {
            padding: 0.5rem;
            border-radius: 0.5rem;
            background-color: #ffaa00;
            color: #ffffff;
            font-size: 1rem;
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
