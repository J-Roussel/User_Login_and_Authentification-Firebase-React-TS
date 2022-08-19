import firebase from 'firebase/app';
import {GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, getAuth} from 'firebase/auth';
import config from './config';

const Firebase = firebase.initializeApp(config.firebase);

// authentification methods.
export const Providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
    github: new GithubAuthProvider()
};

export const auth = getAuth();
export default Firebase;