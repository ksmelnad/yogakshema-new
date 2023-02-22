import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="ml-2 flex gap-2">
        <Image
          src={session.user.image}
          width="40"
          height="40"
          className="rounded"
          alt="profile image"
        />
        <button onClick={() => signOut()}>
          <span className="text-sm text-white uppercase tracking-wide px-6 py-2 bg-red-400 hover:bg-red-500 rounded-l-full rounded-r-full md:ml-5">
            Sign&nbsp;Out
          </span>
        </button>
      </div>
    );
  }
  return (
    <>
      <li>
        <button
          onClick={() => signIn()}
          className="px-4 py-2 text-sm text-red-400 hover:text-red-600 uppercase tracking-wide no-underline rounded-md dark:text-gray-200 focus:text-red-600 focus:bg-white focus:outline-none dark:focus:bg-gray-800"
        >
          Sign in
        </button>
      </li>
      <li>
        <Link
          href="/"
          className="text-sm text-white uppercase tracking-wide px-6 py-2  bg-red-400 hover:bg-red-500 rounded-l-full rounded-r-full rounded-md lg:ml-5"
        >
          Register
        </Link>
      </li>
    </>
  );
}
