import React from "react";
import { useEffect, useState } from "react";
import {
  addDocToCollection,
  getDocsFromCollection,
  deleteDocFromCollection,
} from "../firebase/firestore";

export function Blogs() {
  const blogPostSTATES = {
    SUCCESS: "Success",
    FAILED: "Failed",
    NONE: null,
  };

  const blogDeleteSTATES = {
    SUCCESS: "Success",
    FAILED: "Failed",
    NONE: null,
  };

  const [blogPostStatus, setBlogPostStatus] = useState(blogPostSTATES.NONE);
  const [blogDeleteStatus, setBlogDeleteStatus] = useState(
    blogDeleteSTATES.NONE
  );
  const [blogId, setBlogId] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getDocsFromCollection("blogs").then((docs) => setBlogs(docs));
  }, []);

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
      setBlogPostStatus(blogPostSTATES.SUCCESS);
      getDocsFromCollection("blogs").then((docs) => setBlogs(docs));
    } else {
      setBlogPostStatus(blogPostSTATES.FAILED);
    }
  };

  const handleDelete = (id) => {
    deleteDocFromCollection("blogs", id);
    getDocsFromCollection("blogs").then((docs) => setBlogs(docs));
    setBlogDeleteStatus(blogDeleteSTATES.SUCCESS);
  };

  const handleEdit = (id) => {
    console.log(id);
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
          {blogPostStatus == blogPostSTATES.SUCCESS && (
            <div className="PostSuccess">
              <p>Blog posted successfully with id: {blogId}</p>
            </div>
          )}

          {blogPostStatus == blogPostSTATES.FAILED && (
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
                <button>Edit</button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(blog.id);
                    setBlogDeleteStatus(blogDeleteSTATES.NONE);
                  }}
                >
                  Delete
                </button>
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
            transition: transform 0.3s ease;
          }

          #PostBlog button:hover,
          #PostBlog button:focus,
          #PostBlog button:active {
            transform: scale(1.1);
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
            border-radius: 0.5rem;
            color: #000000;
            flex-wrap: wrap;
            width: 80%;
          }

          #GetBlogs h1 {
            font-size: 1.5rem;
          }

          #GetBlogs ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            list-style: none;
            padding: 0;
            gap: 1rem;
            margin: 0 1rem
          }

          #GetBlogs li {
            display: flex;
            flex-direction: rows;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            width: 100%;
            padding: 0 40px;
            border-radius: 0.5rem;
            border: 2px dashed #000000;
            gap: 1rem;
            transition: all 0.3s ease;
          }

          #GetBlogs li div {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            text-align: center;
            flex-wrap: wrap;
            overflow: hidden;
          }

          #GetBlogs li div button {
            padding: 0.5rem;
            border-radius: 0.5rem;
            color: #ffffff;
            font-size: 1rem;
            cursor: pointer;
            border: none;
            transition: all 0.3s ease-in-out;
          }

          #GetBlogs li div button:nth-child(1) {
            background-color: #00cc00;
          }
          #GetBlogs li div button:nth-child(2) {
            background-color: #ffcc00;
          }
          #GetBlogs li div button:nth-child(3) {
            background-color: #cc0000;
          }


          #GetBlogs li div button:hover,
          #GetBlogs li div button:focus,
          #GetBlogs li div button:active {
            transform: scale(1.1);
        `}
      </style>
    </>
  );
}
