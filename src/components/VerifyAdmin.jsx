import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useProvider } from "../context/AuthContext";

const VerifyAdmin = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const {setAdminId} = useProvider();

  const [loading, setLoading] = useState(false);

  const handelInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const { adminId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = inputRefs.current.map((input) => input.value).join("");
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      setLoading(true)
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/verify`,
        { id: adminId, otp }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        navigate(`/all-students-data/${encodeURIComponent(response.data.id)}`);
        setAdminId(response.data.id);
         
      } else {
        toast.error("Verification failed. Please try again.");
      }
    } catch (err) {
      setLoading(true);
      if (err.response && err.response.data) {
        if (err.response.data.errors?.length > 0) {
          toast.error(err.response.data.errors[0].msg);
        } else {
          toast.error(err.response.data.error);
        }
      } else {
        toast.error("Internel Server Error Please wait");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[280px] sm:w-[340px] p-4 py-7 sm:p-6 rounded-2xl"
      >
        <h1 className="text-white text-xl sm:text-2xl font-semibold text-center mb-8">
          Enter Verification OTP
        </h1>

        <div
          className="flex items-center justify-between"
          onPaste={handlePaste}
        >
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <input
                key={index}
                type="text"
                className="w-9 h-9 sm:text-xl text-center text-white sm:w-11 sm:h-11 outline-white  rounded-sm border-none bg-slate-500 "
                maxLength="1"
                ref={(e) => (inputRefs.current[index] = e)}
                onInput={(e) => handelInput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
        </div>
        {loading ? (
          <div className="w-full cursor-pointer flex items-center justify-center py-2 rounded-full mt-5 bg-gradient-to-r to-indigo-700 from-indigo-800 text-white hover:opacity-80 font-medium">
            Please Wait....
          </div>
        ) : (
          <button
            type="submit"
            className="w-full cursor-pointer py-2 rounded-full mt-5 bg-gradient-to-r to-indigo-500 from-indigo-700 text-white hover:opacity-80 font-medium"
          >
            Verify
          </button>
        )}
      </form>
      <Toaster />
    </>
  );
};

export default VerifyAdmin;
