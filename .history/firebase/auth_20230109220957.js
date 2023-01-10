import { app } from "./app";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);

export const signInWithGithub = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider);
};
