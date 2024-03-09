"use client";
import Link from "next/link";
import * as HiIcons from "react-icons/hi";
import {
  HiChartPie,
  HiHome,
  HiUserGroup,
  HiTicket,
  HiCalendar,
  HiAdjustments,
  HiUser,
  HiUsers,
  HiQuestionMarkCircle,
  HiDatabase,
  HiViewList,
} from "react-icons/hi";

import "../Sidebar/styles.css";

import React, { useState, useEffect } from "react";

const SideBarComponent = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  // const [sideBarWidth, setSideBarWidth] = useState("100px");

  useEffect(() => {
    setSidebarCollapsed(true);
  }, []);

  const toggleShowSideBar = () => {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
    setSidebarCollapsed((previsSidebarCollapsed) => !previsSidebarCollapsed);
    console.log(showSideBar);
  };

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const iconSize = "30px";

  const SideBarMenu = [
    {
      SBIcon: <HiChartPie style={{ fontSize: iconSize }} />,
      SBMenu: "Dashboard",
      SBRout: "/dashboard",
    },
    {
      SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
      SBMenu: "Iglesia",
      SBRout: "/home",
      SBSMContent: [
        {
          SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
          SBMenu: "Redes",
          SBRout: "/redes",
        },
        {
          SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
          SBMenu: "Grupos",
          SBRout: "/teamgroupsn",
        },
      ],
    },
    {
      SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
      SBMenu: "Redes",
      SBRout: "/redes",
    },
    {
      SBIcon: <HiUserGroup style={{ fontSize: iconSize }} />,
      SBMenu: "Grupos",
      SBRout: "/teamgroupsn",
    },
    {
      SBIcon: <HiTicket style={{ fontSize: iconSize }} />,
      SBMenu: "Eventos",
      SBRout: "/events",
    },
    {
      SBIcon: <HiCalendar style={{ fontSize: iconSize }} />,
      SBMenu: "Calendario",
      SBRout: "/calendar",
    },
    {
      SBIcon: <HiAdjustments style={{ fontSize: iconSize }} />,
      SBMenu: "Mantenedor",
      SBRout: "/usersettings",
    },
    {
      SBIcon: <HiUser style={{ fontSize: iconSize }} />,
      SBMenu: "Cuenta",
      SBRout: "/account",
    },
    {
      SBIcon: <HiUsers style={{ fontSize: iconSize }} />,
      SBMenu: "Usuarios",
      SBRout: "/",
    },
    {
      SBIcon: <HiQuestionMarkCircle style={{ fontSize: iconSize }} />,
      SBMenu: "Ayuda",
      SBRout: "/",
    },
  ];

  return (
    <>
      <div className="main-container">
        <div
          className={
            isSidebarCollapsed
              ? "collapsed-sidebar side-bar"
              : "expanded-sidebar side-bar"
          }
          onMouseOver={() => (setShowSideBar(true), setSidebarCollapsed(false))}
          onMouseLeave={() => (
            setShowSideBar(false), setSidebarCollapsed(true)
          )}
        >
          <p className="sidebar-content-icon">Menú</p>
          {SideBarMenu.map((item, index) => (
            <>
              <div key={index} className="sidebar-content-container">
                <Link href={item.SBRout} className="sidebar-link-content">
                  {/* debe estar en 2 columnas */}
                  <div className="sidebar-link-main-content">
                    <div className="sidebar-content-icon"> {item.SBIcon}</div>
                    <div className="sidebar-content-text">{item.SBMenu}</div>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
        <div className="content-container">{children}</div>
      </div>
    </>
  );
};

export default SideBarComponent;
