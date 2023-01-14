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

export const deleteDocFromCollection = async (collectionName, docId) => {
  try {
    await deleteDoc(doc(doc(db, collectionName, docId)));
  } catch (e) {
    console.error("Error removing document: ", e);
  }
};

export const updateDocInCollection = async (collectionName, docId, data) => {
  try {
    await updateDoc(doc(db, collectionName, docId), data);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const getDocsFromCollection = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({ id: doc.id, ...doc.data() });
  });
  return docs;
};
