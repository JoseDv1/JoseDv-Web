import React from "react";

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
    </>
  );
}
