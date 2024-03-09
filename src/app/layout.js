"use client";

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar/NavBar";
import FooterPage from "@/Components/Footer/Footer";
import SideBarComponent from "@/Components/Sidebar/SideBar";
import '../Components/Sidebar/styles.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const handleTabClick = (index) => {
    const updatedNavigation = navigation.map((item, i) => ({
      ...item,
      current: i === index,
    }));
    setNavigation(updatedNavigation);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const User = { userName: "Jonathan", userProfile: "Admin" };
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <html>
      <body>
        <header>
        </header>
        {User.userProfile == "Admin" ? (
          <main className="">
            <div>
              {/* <NavBar /> */}
            </div>
            <div>
              <div className="">
                  <SideBarComponent children={children}/>
              </div>
            </div>
          </main>
        ) : (
          <>
            <main className="">
              <div>
                {/* <NavBar /> */}
              </div>
            </main>
          </>
        )}
      </body>
    </html>
  );
}
