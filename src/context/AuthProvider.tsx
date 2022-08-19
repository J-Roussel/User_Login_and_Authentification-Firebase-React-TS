
import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import firebase, {getAuth, onAuthStateChanged} from "firebase/auth";

import {auth} from "../config/firebase";

export const AuthProvider: React.FC = ({ children }:PropsWithChildren) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};