import { app } from "./app";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const auth = getAuth(app);

export const signInWithGithub = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider);
};

export const logOut = () => {
  signOut(auth);
};

export const authState = (callback) => {
  onAuthStateChanged(auth, callback);
};
