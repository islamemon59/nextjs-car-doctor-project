import React from "react";
import LoginForm from "./Components/LoginForm/LoginForm";


const Login = () => {


  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-base-100 shadow-xl rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <LoginForm/>
    </div>
  );
};

export default Login;
