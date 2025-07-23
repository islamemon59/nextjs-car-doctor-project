"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data, status } = useSession();
  console.log(status);

  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-lg shadow font-semibold"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl">
          <Image src={"/assets/logo.svg"} width={107} height={87} alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-lg">
          {links}
        </ul>
      </div>
      <div className="navbar-end  gap-4">
        {status == "authenticated" ? (
          <div className="flex justify-center items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <Image src={data?.user?.image} width={10} height={10} alt="user-logo" />
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className="btn btn-outline rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link href={"/login"} className="btn btn-outline rounded">
              Login
            </Link>
            <Link href={"/register"} className="btn btn-outline rounded">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
