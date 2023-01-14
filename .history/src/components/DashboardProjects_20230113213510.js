import React, { useEffect, useState } from "react";
import {
  addDocToCollection,
  deleteDocFromCollection,
  getDocsFromCollection,
  updateDocInCollection,
} from "../firebase/firestore";

export function DashboardProjects() {
  return (
    <>
      <section>
        <h1> Insert a Project</h1>
        <form>
          <label> Titulo </label>
          <input type="text" name="title" />
          <label> Description </label>
          <textarea name="description" />
          <label> Github </label>
          <input type="text" name="github" />
          <label> Demo </label>
          <input type="text" name="demo" />
          <button type="submit"> Insert </button>
        </form>
      </section>

      <style jsx>{`
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

        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: start;
          width: 100%;
        }

        form label {
          margin: 0.5rem 0;
        }

        form input,
        form textarea {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #000000;
          border-radius: 0.5rem;
          margin: 0.5rem 0;
        }
      `}</style>
    </>
  );
}
