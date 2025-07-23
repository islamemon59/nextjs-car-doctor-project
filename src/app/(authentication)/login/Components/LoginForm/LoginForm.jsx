"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Please wait");

    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        Swal.fire({
          title: "Successfully Login",
          icon: "success",
          draggable: true,
        });
        form.reset();
        router.push("/");
      } else {
        toast.error("Login Failed");
        form.reset();
      }
    } catch (error) {
      toast.error("Login Failed");
      form.reset();
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };
  return (
    <>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
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
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Login
        </button>
      </form>
      <div className="divider">OR</div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </>
  );
};

export default LoginForm;
