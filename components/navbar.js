import Link from "next/link";
import Login from "./login-btn";
import Image from "next/image";
import logo from "@/public/logo-big.png";

export default function Navbar() {
  const navigation = ["Programs", "Blogs & Podcasts", "About", "Contact"];

  return (
    <div className="w-full bg-red-300 ">
      <nav className="container relative flex flex-wrap items-center justify-between pt-8 pb-8 mx-auto lg:justify-between xl:px-0 uppercase tracking-wide text-sm">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Image
            src={logo}
            width="50"
            height="50"
            alt="Logo"
            className="mx-2"
          />
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl text-gray-800 font-medium  dark:text-gray-100"
          >
            Yogakshema Gurukulam
          </Link>
        </div>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <Link
                href="/"
                className="inline-block px-4 py-2 text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
              >
                Home
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link
                href="/programs"
                className="inline-block px-4 py-2  text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
              >
                Programs
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link
                href="/blogs-podcasts"
                className="inline-block px-4 py-2  text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
              >
                Blogs & Podcasts
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link
                href="/about"
                className="inline-block px-4 py-2  text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
              >
                About
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link
                href="/contact"
                className="inline-block px-4 py-2  text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-gray-800 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
              >
                Contact
              </Link>
            </li>
            <Login />
          </ul>
        </div>
      </nav>
    </div>
  );
}
