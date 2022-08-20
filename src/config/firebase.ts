import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, getAuth, EmailAuthProvider} from 'firebase/auth';
import {initializeApp} from "firebase/app";
import config from "../auth/config";

const Firebase = initializeApp(config.firebaseConfig);

// authentification methods.
export const Providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
    github: new GithubAuthProvider(),
    email: new EmailAuthProvider()
};

export const auth = getAuth(Firebase);

export default Firebase;