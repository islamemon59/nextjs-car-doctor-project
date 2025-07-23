// components/LoginForm.jsx
"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-base-100 shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button className="btn btn-primary w-full">Login</button>
      </form>
      <div className="divider">OR</div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
