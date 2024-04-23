"use client";

import React, { useContext } from "react";
import { AuthProvider } from "@/Context/UserContext";
import { AuthContext } from "@/Context/UserContext";
import { useState } from "react";
import { useRouter } from "next/router";

import { Inter } from "next/font/google";
import "./globals.css";
import SideBarComponent from "@/Components/Sidebar/SideBar";
import "../Components/Sidebar/styles.css";

import Home from "./home/page";
import Calendar from "./calendar/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // Moved the useContext inside the return statement
  return (
    <AuthProvider>
      <html>
        <body>
          <LayoutContent children={children} />
        </body>
      </html>
    </AuthProvider>
  );
}

function LayoutContent({ children }) {
  const { authUser, signInWithGoogle, signOut } = useContext(AuthContext);
  // const router = useRouter();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
  // const [selectedPage, setSelectedPage] = useState(null);

  console.log("User data:", authUser);

  // {
  //   authUser ? router.push("/dashboard") : router.push("/home");
  // } // Navigates to the /dashboard page

  return (
    <>
      {!authUser ? (
        <main className="main-container">
          <Home
            authUser={authUser}
            signInWithGoogle={signInWithGoogle}
            signOut={signOut}
          />
        </main>
      ) : (
        <main className="main-container">
          <SideBarComponent
            // onLinkClick={handleSidebarLinkClick}
            children={children}
          />
        </main>
      )}
    </>
  );
}
