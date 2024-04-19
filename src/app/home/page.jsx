"use client";
import React from "react";
import { useState, useEffect } from "react";

import { auth, provider } from '../../Components/Firebase/firebase';
import { signInWithPopup } from "firebase/auth";

import "./styles.css";

const Home = () => {

  const [authUser, setAuthUser] = useState(null);

  // Function to handle Google authentication
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(provider);
      // User is now signed in, you can perform further actions
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const TestLogin = () => {
    alert("abriendo sesión...");
  };

  return (
    <>
      <div className="home-container">
        <h1>Bienvenido a la Intranet de IverChile</h1>
        <section className="logIn-Container">
          <section className="logInSection" onClick={signInWithGoogle}>
            <img
              src="https://antoniofernandez.com/assets/blog/node-google-login.png"
              alt=""
            />
            <p>Iniciar sesión con Google</p>
          </section>
          <section className="logInSection" onClick={TestLogin}>
            <img
              src="https://media.istockphoto.com/id/1180028723/es/vector/tel%C3%A9fono-con-el-icono-de-s%C3%ADmbolo-de-ondas-negro-simple-aislado-vector-stock-ilustraci%C3%B3n.jpg?s=612x612&w=0&k=20&c=W9TgvFdobzKSPPnhf3235H31XrGh2dtC2tsQnQ5Aroc="
              alt=""
            />
            <p>Iniciar sesión con teléfono</p>
          </section>
        </section>
      </div>
    </>
  );
};

export default Home;
