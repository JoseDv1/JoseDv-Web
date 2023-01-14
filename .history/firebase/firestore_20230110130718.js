import {
  getFirestore,
  addDoc,
  deleteDoc,
  updateDoc,
  collection,
} from "firebase/firestore";
import { app } from "./app";

const db = getFirestore(app);

export const addDocToCollection = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    return e;
  }
};

export const deleteDocFromCollection = async (collection, docId) => {
  try {
    await deleteDoc(doc(doc(db, collection, docId)));
  } catch (e) {
    console.error("Error removing document: ", e);
  }
};

export const updateDocInCollection = async (collection, docId, data) => {
  try {
    await updateDoc(doc(db, collection, docId), data);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
