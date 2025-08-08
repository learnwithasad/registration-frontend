import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AllCouponsData = () => {
  const [coupons, setCoupons] = useState([]);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ New state to hide/show form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/get-coupons`,
        formData
      );

      if (response.statusText === "OK") {
        setCoupons(response.data);
        toast.success("Details Submitted Successfully");

        setFormData({ email: "", password: "" });
        setIsLoggedIn(true); // ✅ Hide the form & show coupons
      }
    } catch (err) {
      toast.error(
        err.response?.data?.error ||
          err.response?.data?.errors?.[0]?.msg ||
          "Internal Server Error Please wait"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/delete-coupon`,
        { id }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        // ✅ Remove deleted coupon from state so UI updates instantly
        setCoupons((prevCoupons) => prevCoupons.filter((c) => c._id !== id));
      }
    } catch (err) {
      toast.error(
        err.response?.data?.error ||
          err.response?.data?.errors?.[0]?.msg ||
          "Internal Server Error Please wait"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!isLoggedIn && <h1 className="text-xl sm:text-2xl text-center mt-12 font-bold text-white">
        Enter Your Details
      </h1>}

      {/* ✅ Show form only if not logged in */}
      {!isLoggedIn && (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
          <div className="mb-5">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {loading ? (
            <div className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Please wait....
            </div>
          ) : (
            <button
              type="submit"
              className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          )}
        </form>
      )}

      {/* ✅ Show coupons only if logged in */}
      {isLoggedIn && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {coupons.length > 0 ? (
            coupons.map(({ _id, name, coupon }) => (
              <div
                key={_id}
                className="bg-gray-700 shadow-md p-4 rounded flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg text-white font-semibold">{name}</h2>
                  <p className="text-gray-200 mt-4">Coupon: {coupon}</p>
                </div>
                <button
                  onClick={() => handleDelete(_id)}
                  disabled={loading}
                  className="mt-4 disabled:bg-gray-700 disabled:cursor-not-allowed bg-red-500 cursor-pointer text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-300 text-center col-span-full">
              No coupons found
            </p>
          )}
        </div>
      )}

      <Toaster />
    </>
  );
};

export default AllCouponsData;
