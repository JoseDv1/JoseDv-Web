import {
  getFirestore,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
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
    console.error("Error adding document: ", e);
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

export const getDocsFromCollection = async (collection) => {
  const querySnapshot = await getDocs(collection(db, collection));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({ id: doc.id, ...doc.data() });
  });
  return docs;
};
