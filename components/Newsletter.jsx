import React from "react";

function Newsletter() {
  return (
    <div className="w-full px-4 py-6 mx-auto bg-[#fefaf2]">
      <div className="text-center max-w-xl mx-auto">
        <h3 className="text-center pb-10 text-xl font-bold text-gray-700 tracking-wider uppercase ">
          Join our Newsletter{" "}
        </h3>
        <p className="mb-11 font-medium text-gray-600 leading-relaxed">
          Get weekly updates on what&apos;s going on at Yogakshema
        </p>
        <form className="mb-9">
          <div className="mb-5">
            <input
              className="px-4 py-3 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
              id="newsletterInput1-1"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-5">
            <input
              className="px-4 py-3 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
              id="newsletterInput1-2"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <button
            className="py-4 px-6 w-full text-white font-semibold border rounded-xl shadow-4xl bg-red-400 hover:bg-red-500 transition ease-in-out duration-200"
            type="button"
          >
            Subscribe Now
          </button>
        </form>
        <div className="flex flex-wrap justify-center items-center -m-1.5">
          <div className="w-auto p-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00033 10.0002V11.3336M4.00033 14.0002H12.0003C12.7367 14.0002 13.3337 13.4033 13.3337 12.6669V8.66691C13.3337 7.93053 12.7367 7.33358 12.0003 7.33358H4.00033C3.26395 7.33358 2.66699 7.93053 2.66699 8.66691V12.6669C2.66699 13.4033 3.26395 14.0002 4.00033 14.0002ZM10.667 7.33358V4.66691C10.667 3.19415 9.47308 2.00024 8.00033 2.00024C6.52757 2.00024 5.33366 3.19415 5.33366 4.66691V7.33358H10.667Z"
                stroke="#A1A1AA"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div className="w-auto p-1.5">
            <p className="font-sans text-sm text-gray-600">
              We never share your information to any third party
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
