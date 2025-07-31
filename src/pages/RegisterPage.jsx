import React from "react";
import Register from "../components/Register";
import Navbar from "../components/Navbar";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full mt-7 text-center px-2">
        <h1 className="text-xl font-bold">🎁 Have a Coupon?</h1>
        <h1 className="font-[600]"> Unlock a <span className="text-[#ee4a62]">Free</span> Frontend Development Course with Your Registration!</h1>
      </div>
      <Register />
    </div>
  );
};

export default RegisterPage;
