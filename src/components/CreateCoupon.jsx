import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const CreateCoupon = () => {

  const [formData, setFormData] = useState({
    name : "",
    coupon: "",
    password: ""
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
  
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/create-coupon`,
        formData,
      );
      
      

      if (response.data.success) {

        toast.success(response.data.message);

        setFormData({
          name: "",
          coupon: "",
          password: "",
        });
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
    <h1 className="text-xl sm:text-2xl text-center mt-12 font-bold text-white">Create Coupons</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full mt-10">
        
        <div className="mb-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name || ""}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="mb-5">
          <input
            type="text"
            name="coupon"
            required
            placeholder="Coupon Code"
            value={formData.coupon || ""}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="mb-5">
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={formData.password || ""}
            onChange={handleChange}
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        {loading ? (
          <div className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Please wait....
          </div>
        ) : (

          <button
            type="submit"
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        )}
      </form>
      <Link to="/coupons-data">
    <button
            className="text-white w-full  mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Coupons Data
</button>
</Link>
      <Toaster />
    </>
  );
};

export default CreateCoupon;
