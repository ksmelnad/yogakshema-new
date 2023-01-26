import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex">
        <img src={session.user.image} className="rounded w-10 h-10" />
        <button onClick={() => signOut()}>
          <span className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
            Sign Out
          </span>
        </button>
      </div>
    );
  }
  return (
    <>
      <li className="mr-3 nav__item">
        <button onClick={() => signIn()}>
          <span className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
            Sign in
          </span>
        </button>
      </li>
      <li className="mr-3 nav__item">
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            Register
          </Link>
        </div>
      </li>
    </>
  );
}
