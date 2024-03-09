"use client";

import Link from "next/link";
import { useState } from "react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const initialNavigation = [
    { name: "Dashboard", href: "/dashboard", current: true },
    { name: "Calendar", href: "calendar", current: false },
    // { name: "Team", href: "/calendar", current: false },
    // { name: "Projects", href: "#", current: false },
    // { name: "Reports", href: "#", current: false },
  ];

  const [navigation, setNavigation] = useState(initialNavigation);

  const handleTabClick = (index) => {
    const updatedNavigation = navigation.map((item, i) => ({
      ...item,
      current: i === index,
    }));
    setNavigation(updatedNavigation);
  };

  return (
    <Flowbite>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/favicon.ico"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <p className="pl-2"></p>
          <DarkThemeToggle />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link> <Link href="/userSettings">Home</Link></Navbar.Link>
          <Navbar.Link> <Link href="/dashboard">Dashboard</Link></Navbar.Link>
          <Navbar.Link> <Link href="/calendar">Calendar</Link></Navbar.Link>
          <Navbar.Link> <Link href="/dashboard">About</Link></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
}
