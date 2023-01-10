import { app } from "./app";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const auth = getAuth(app);

export const signInWithGithub = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider);
};

export const signOutUser = () => {
  signOut(auth);
};

export const authState = (callback) => {
  onAuthStateChanged(auth, callback);
};
