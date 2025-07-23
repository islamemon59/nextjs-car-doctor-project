"use client";
import { registerUser } from "@/app/action/auth/registerUser";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import SocialLogin from "../../login/Components/SocialLogin/SocialLogin";

const RegisterForm = () => {
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    toast("Please wait");

    try {
      const result = await registerUser({ name, email, password });
      if (result.insertedId) {
        Swal.fire({
          title: "Register Successful",
          icon: "success",
          draggable: true,
        });
        form.reset();
        router.push("/");
      } else {
        toast.error("Registration Failed");
        form.reset();
      }
    } catch (error) {
      toast.error("Registration Failed");
      form.reset();
    }
  };
  return (
    <>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            className="input input-bordered w-full"
            required
          />
        </div>
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
            name="password"
            type="password"
            placeholder="Create a password"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-full">
          Register
        </button>
      </form>
      <div className="divider">OR</div>
      <SocialLogin/>
    </>
  );
};

export default RegisterForm;
