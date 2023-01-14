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
          margin: 1rem 2rem;
          padding: 1rem;
          width: 80%;

          background-color: #ffffff;
          border-radius: 0.5rem;
          color: #000000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
        }
      `}</style>
    </>
  );
}
