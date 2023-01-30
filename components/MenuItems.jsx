import React from "react";
import Link from "next/link";
import Login from "./login-btn";

function MenuItems({ showMenu, active }) {
  const navigation = {
    Home: "/",
    Programs: "/programs",
    Blogs: "/blogs-podcasts",
    About: "/about",
    Contact: "/contact",
  };

  return (
    <ul
      className={
        active
          ? "flex flex-col items-center mt-10 fixed inset-0 left-1/4 gap-8 p-8 backdrop-blur-lg bg-red-300 lg:hidden"
          : "hidden"
      }
    >
      <div onClick={showMenu} className="cursor-pointer hover:text-orange-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {Object.keys(navigation).map((key) => (
        <li key={key}>
          <Link
            href={navigation[key]}
            className="px-4 py-2 text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
            onClick={showMenu}
          >
            {key}
          </Link>
        </li>
      ))}

      {/* <li className="mr-3">
        <Link
          href="/"
          className="px-4 py-2 text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
          onClick={showMenu}
        >
          Home
        </Link>
      </li>
      <li className="mr-3">
        <Link
          href="/programs"
          className="px-4 py-2 text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
          onClick={showMenu}
        >
          Programs
        </Link>
      </li>
      <li className="mr-3">
        <Link
          href="/blogs-podcasts"
          className="px-4 py-2 text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
          onClick={showMenu}
        >
          Blog
        </Link>
      </li>
      <li className="mr-3">
        <Link
          href="/about"
          className="px-4 py-2 text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
          onClick={showMenu}
        >
          About
        </Link>
      </li>
      <li className="mr-3">
        <Link
          href="/contact"
          className="px-4 py-2 text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
          onClick={showMenu}
        >
          Contact
        </Link>
      </li> */}
      <Login />
    </ul>
  );
}

export default MenuItems;
