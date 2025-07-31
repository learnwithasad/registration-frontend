import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    address: "",
    email: "",
    phone: "",
    cnic: "",
    dateOfBirth: "",
    gender: "",
    qualification: "",
    coupon: "",
    password: "",
    profilePic: null,
    paymentScreenshot: null,
  });

  const [showCouponField, setShowCouponField] = useState(false);
  const [couponStatus, setCouponStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState({
    profilePic: null,
    paymentScreenshot: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    setFormData({ ...formData, [name]: file });

    // Generate preview URL
    if (file) {
      setPreview({ ...preview, [name]: URL.createObjectURL(file) });
    }
  };

const isFormValid = () => {
  return Object.keys(formData).every((key) => {
    if (key === "coupon") return true; // Skip validation for optional coupon
    if (key === "profilePic" || key === "paymentScreenshot") {
      return formData[key] !== null; // Ensure files are uploaded
    }
    return formData[key].trim() !== ""; // Ensure text fields are not empty
  });
};


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/student/register`, 
        formDataToSend,

      );

      if (response.data.success) {
        toast.success(response.data.message);

        setFormData({
          fullName: "",
          fatherName: "",
          address: "",
          email: "",
          phone: "",
          cnic: "",
          dateOfBirth: "",
          gender: "",
          qualification: "",
          coupon: "",
          password: "",
          profilePic: null,
          paymentScreenshot: null,
        });
        setPreview({
          profilePic: null,
          paymentScreenshot: null,
        });
      }
    } catch (err) {
  setLoading(true);

  if (err.response && err.response.data) {
    if (err.response.data.errors?.length > 0) {
      toast.error(err.response.data.errors[0].msg);
    } else {
      toast.error(err.response.data.error || 'Unknown error occurred');
    }
    
  } else {
    // Handle cases like network error where err.response is undefined
    if (err.message === 'Network Error') {
      toast.error('Network Error: Please check your internet connection.');
    } else {
      toast.error('Internal Server Error. Please wait.');
    }
  }
} finally {
      setLoading(false);
    }
  };

  // Coupon Handle

  const handleApplyCoupon = () => {
  // Example check — you can replace this with real API logic
  if (formData.coupon.trim().toLowerCase() === "fatima" || formData.coupon.trim().toLowerCase() === "azan" || formData.coupon.trim().toLowerCase() === "skillssikhao" || formData.coupon.trim().toLowerCase() === "asad" || formData.coupon.trim().toLowerCase() === "getfree") {
    setCouponStatus({ success: true, message: "Congrats! You got the Frontend course free with MERN Stack." });
  } else {
    setCouponStatus({ success: false, message: "Invalid coupon code. Please try again." });
  }
};

  return (
    <>
    <div className="max-w-3xl px-5 md:px-8 mt-10 mx-auto border border-[#e6e6e6] shadow-2xl rounded-2xl overflow-hidden">
      <Link to="/course-details"><button className="py-2.5 md:py-3 rounded-md mt-5 shad w-full bg-[#1ab69d] flex items-center justify-center gap-2.5 text-white text-[14px] sm:text-[15px] font-bold">Course Details
        <span className="arrow"><FaArrowRightLong /></span>
      </button>
      </Link>
      <div className="py-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Profile Picture Upload */}
                      {/* Profile Picture Upload */}
                      <div className="flex flex-col items-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-[#F5F9FA] border-1 border-[#e6e6e6] mb-4">
                {preview.profilePic ? (
                  <img
                    src={preview.profilePic}
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <label className="cursor-pointer bg-[#1ab69d] hover:bg-[#EE4A6B] text-white px-3 sm:px-4 py-2 rounded-md duration-200 transition-colors text-[12px] sm:text-sm">
                <span>Upload Photo</span>
                <input
                  type="file"
                  name="profilePic"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </label>
            </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
            />
            <input
              type="text"
              name="fatherName"
              placeholder="Father's Name"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
               className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
            />
          </div>

          {/* Gender and Qualification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
             className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors appearance-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors appearance-none"
            >
              <option value="">Select Qualification</option>
              <option value="Primary">Primary</option>
              <option value="Middle">Middle</option>
              <option value="High School">High School</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Bachelor's">Undergraduate</option>
              <option value="Master's">Graduate</option>
              <option value="PhD">Other</option>
            </select>
          </div>

          {/* CNIC and Date of Birth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="cnic"
              placeholder="CNIC / B-form"
              value={formData.cnic}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                const formattedValue = value
                  .replace(/^(\d{5})(\d{7})(\d{1})$/, "$1-$2-$3") // Format as xxxxx-xxxxxxx-x
                  .replace(/^(\d{5})(\d{1,7})$/, "$1-$2") // Format as xxxxx-xxxxxxx
                  .replace(/^(\d{1,5})$/, "$1"); // Format as xxxxx
                setFormData({ ...formData, cnic: formattedValue });
                }}
                maxLength="15"
                className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
              />
              <div className="relative">
                <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
               className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
                onFocus={(e) => e.target.showPicker && e.target.showPicker()}
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                </div>
              </div>
              </div>

              {/*Password and Address*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
             className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
            />

              <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
             className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
            />
          </div>

{/* Coupon Code Toggle */}
<div className="grid grid-cols-1">
  {!showCouponField ? (
    <button
      type="button"
      onClick={() => setShowCouponField(true)}
      className="text-[17px] cursor-pointer text-left text-[#1ab69d] hover:underline font-[600]"
    >
      Have a Coupon Code?
    </button>
  ) : (
    <>
      <div className="flex items-center gap-4">
        <input
          type="text"
          name="coupon"
          id="coupon"
          placeholder="Enter Coupon Code"
          value={formData.coupon}
          onChange={handleChange}
          className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
        />
        <button
          type="button"
          onClick={handleApplyCoupon}
          className={`px-4 md:px-10 py-3 ${
            formData.coupon.trim().length > 0 ? 'bg-[#1ab69d] duration-200 hover:bg-[#EE4A6B] cursor-pointer' : 'bg-gray-400 cursor-not-allowed'
          } text-white font-semibold rounded-md transition-colors`}
          disabled={formData.coupon.trim().length === 0}
        >
          Apply
        </button>
      </div>
      {couponStatus && (
        <p className={`mt-2 text-sm font-medium ${couponStatus.success ? 'text-[#1ab69d]' : 'text-[#EE4A6B]'}`}>
          {couponStatus.message}
        </p>
      )}
    </>
  )}
</div>


            {/* Payment Screenshot */}
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="paymentScreenshot"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#e6e6e6] border-dashed rounded-lg cursor-pointer bg-[#F0F4F5] hover:bg-[#E8F0FE]"
              >
                {preview.paymentScreenshot ? (
                  <img
                    src={preview.paymentScreenshot}
                    alt="Payment Screenshot Preview"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold text-center">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </p>
                    <p className="text-lg text-gray-500 font-bold underline text-center">
                      <span className="text-[#EE4A6B]">Fee </span> Screenshot
                    </p>
                  </div>
                )}
                <input
                  id="paymentScreenshot"
                  type="file"
                  name="paymentScreenshot"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
{loading ? (
             <div
             className="p-2.5 px-14 rounded-md text-white bg-[#1ab69d] font-[600] disabled:bg-gray-500"
           >
             Please wait....
           </div>
) : (
              <button
              type="submit"
              className="p-2.5 px-14 font-[600] tracking-wider cursor-pointer rounded-md text-white duration-200 bg-[#1ab69d] hover:bg-[#EE4A6B] disabled:bg-gray-500 disabled:cursor-not-allowed"
              disabled={!isFormValid()}
            >
              SUBMIT
            </button>
)}
          </div>
        </form>
      </div>
    </div>
    <Toaster />
    </>
  );
};

export default Register;
