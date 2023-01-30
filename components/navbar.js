import Link from "next/link";
import Login from "./login-btn";
import Image from "next/image";
import logo from "@/public/logo-big.png";
import { useState } from "react";
import MenuItems from "./MenuItems";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const navigation = {
    Home: "/",
    Programs: "/programs",
    Blogs: "/blogs-podcasts",
    About: "/about",
    Contact: "/contact",
  };
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="w-full bg-red-300 ">
      <nav className="container relative flex items-center justify-between py-6 mx-auto md:justify-between xl:px-0 uppercase tracking-wide text-sm">
        <div className="flex flex-around lg:w-auto">
          <Image
            src={logo}
            width="50"
            height="50"
            alt="Logo"
            className="mx-2"
          />
          <Link
            href="/"
            className="flex items-center space-x-2 text-lg lg:text-xl text-gray-800 font-medium  dark:text-gray-100"
          >
            Yogakshema&nbsp;Gurukulam
          </Link>
        </div>

        <div className="absolute right-6 cursor-pointer lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            onClick={showMenu}
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <ul className="hidden lg:flex items-center justify-end list-none lg:pt-0 ">
          {Object.keys(navigation).map((key) => (
            <li key={key}>
              <Link
                href={navigation[key]}
                className="px-4 py-2 text-gray-800 rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none"
              >
                {key}
              </Link>
            </li>
          ))}
          <Login />
        </ul>

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
}
