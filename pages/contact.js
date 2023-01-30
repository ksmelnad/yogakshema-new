import React from "react";
import Head from "next/head";
import Container from "@/components/container";

function Contact() {
  return (
    <>
      <Head>
        <title>Yogakshema Gurukulam</title>
        <meta
          name="description"
          content="Yogakshema Gurukulam - A wholesome wellness academy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoIco.ico" />
      </Head>
      <div className="min-h-screen py-5">
        <div className="w-25 text-center py-5">
          <h3 className="text-md font-bold tracking-wider uppercase bg-gradient-to-r from-red-700 to-orange-100 text-transparent bg-clip-text">
            Contact Us{" "}
          </h3>
        </div>
        <div className="max-w-4xl container mx-auto flex flex-col lg:flex-row lg:justify-around lg:items-start gap-20 p-5">
          <div>
            <p className="text-lg font-bold text-gray-700 uppercase tracking-wide">
              Address{" "}
            </p>
            <p className="text-xl text-gray-700">Yogakshema Gurukulam </p>
            <p className="text-xl text-gray-700">Mysuru, Karnataka, India</p>
            <p className="text-xl text-gray-700">Ph: 1234567890</p>
          </div>
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-first-name"
                  type="text"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button className="button" type="button">
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
