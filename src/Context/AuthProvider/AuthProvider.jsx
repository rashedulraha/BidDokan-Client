import React, { useEffect, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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

  // ! delete user

  const deleteUserAccount = async () => {
    try {
      const currentUser = auth.currentUser;

      if (!currentUser) {
        return "no user";
      }

      return await deleteUser(user);
    } catch {
      return "no user";
    }
  };
  // ! Reset password
  const ResetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //! update user
  const updateUser = async (displayName, photoURL) => {
    const updateUserData = {
      displayName,
      photoURL,
    };

    await updateProfile(auth.currentUser, updateUserData);

    const updateUser = auth.currentUser;
    setUser({ ...updateUser });
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
    updateUser,
    deleteUserAccount,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
