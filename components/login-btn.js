import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex">
        <Image
          src={session.user.image}
          width="40"
          height="40"
          className="rounded"
          alt="profile image"
        />
        <button onClick={() => signOut()}>
          <span className="text-sm text-white uppercase tracking-wide px-6 py-2 bg-gray-800 rounded-md md:ml-5">
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
          <span className="inline-block px-4 py-2 text-sm uppercase tracking-wide text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-orange-100 focus:text-red-600 focus:bg-white focus:outline-none dark:focus:bg-gray-800">
            Sign in
          </span>
        </button>
      </li>
      <li className="mr-3 nav__item">
        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/"
            className="text-sm uppercase tracking-wide px-6 py-2 bg-white rounded-md md:ml-5"
          >
            Register
          </Link>
        </div>
      </li>
    </>
  );
}
