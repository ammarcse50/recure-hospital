import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth/cordova";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { sendPasswordResetEmail } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiosPublic();

  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updateUser = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser?.email };

        axiosPublic.post("/jwt", userInfo).then((res) => {
          // console.log("token", res.data.token);

          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);

            setLoading(false);
          }
        });
      } else {
        // remove item
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      console.log("current User", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, [axiosPublic]);

  const userInfo = {
    user,
    logIn,
    logOut,

    createUser,
    updateUser,
    loading,
    passwordReset,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
