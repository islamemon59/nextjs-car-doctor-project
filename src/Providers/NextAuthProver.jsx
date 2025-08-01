"use client"
import { SessionProvider } from "next-auth/react";
import React from "react";

const NextAuthProver = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProver;
