import React, { useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../FireBase/Firebase";

const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //! Register
  const register = async (email, password) => {
    setLoading(true);
    try {
      const userInformation = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userInformation.user;
      await sendEmailVerification(user);
      return user;
    } catch (error) {
      console.error("Registration Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  //! Login user
  const LoginUser = async (email, password) => {
    setLoading(true);
    try {
      const loginUser = await signInWithEmailAndPassword(auth, email, password);
      return loginUser;
    } catch (error) {
      return error.message;
    }
  };

  //! signInWithPopup
  const signInWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  //! Signout
  const Signout = () => {
    return signOut(auth);
  };

  // ! Reset password
  const ResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //! Observer and get user data
  useEffect(() => {
    setLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    register,
    loading,
    user,
    LoginUser,
    Signout,
    signInWithGoogle,
    ResetPassword,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
