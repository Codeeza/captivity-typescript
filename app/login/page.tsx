import React from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <div className="md:w-max md:m-auto">
      <div className="mt-3">
        <div className="border-solid border-y-2 border-gray-400 max-w-screen-2xl">
          <div className="md:my-10 p-7 max-w-screen-md md:m-auto m-5 bg-gray-100 border-slate-400 rounded-3xl shadow-2xl">
            <h2 className="mb-4 text-2xl font-semibold pb-5 text-left text-gray-700">
              Login
            </h2>
            <form autoComplete="off">
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 text-sm text-gray-700 border rounded-sm focus:outline-red-500 border-black"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 text-sm text-gray-700 border rounded-sm focus:outline-red-500 border-black"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-4">
                <input
                  className="mr-2 leading-tight"
                  type="checkbox"
                  id="rememberMe"
                />
                <label className="text-sm text-gray-600" htmlFor="rememberMe">
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-sm hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Log In
                </button>
              </div>
              <div className="text-left">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="/lost-password"
                >
                  Lost your password?
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="border-solid border-b-2 border-gray-400 w-full max-w-screen-lg">
          <h2 className="py-5 text-2xl font-bold md:text-left text-center text-gray-500">
            Trading as a reseller?
          </h2>
          
          <Link href="/register">
          {" "}
          <button
            className="md:none block md:ml-0 m-auto px-4 py-2 font-bold text-white bg-red-500 md:rounded-sm rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Register Now
          </button>
        </Link>
          
          <Image
            src="/hours-section.png"
            alt="Orders are to be collected 48 hours after payment received."
            width={1803}
            height={558}
          />
        </div>
        
        <h2 className="py-4 md:ml-0 ml-5 text-sm font-semibold text-left text-gray-700">
          POPI Act Disclaimer
          <a
            href="/popi-act-terms"
            className="px-2 text-red-600 hover:text-gray-700"
          >
            View Terms
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Login;
