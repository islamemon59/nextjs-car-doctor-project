import React from "react";
import RegisterForm from "./Components/RegisterForm";

const Register = () => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-base-100 shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      <RegisterForm />
    </div>
  );
};

export default Register;
