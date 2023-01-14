import { getFirestore, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export const addDocToCollection = async (collection, data) => {
  try {
    const docRef = await addDoc(collection(db), data);
    console.log("Document written with ID: ", docRef.id);
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
