"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const router = useRouter();
  const session = useSession();
  const handleGoogleLogin = (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        draggable: true,
      });
      router.push("/");
    }
  }, [session.status]);

  return (
    <div>
      <button
        type="button"
        onClick={() => handleGoogleLogin("google")}
        className="btn btn-outline w-full flex items-center gap-2"
      >
        <FcGoogle className="text-xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
