import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BiErrorAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const AllStudentsData = () => {
  const { verifyId } = useParams();
  const [students, setStudents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [verifyBtnLoading, setVerifyBtnLoading] = useState(false);
  const [rejectBtnLoading, setRejectBtnLoading] = useState(false);

  const handleFetchingStudent = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/get-students`,
        { id: verifyId }
      );

      if (response.data) {
        if (response.data.length > 0) {
          setStudents((prev) => [...prev, ...response.data]);
        } else {
          setStudents([]);
          setError("No Students Available");
        }
      }
    } catch (err) {
      setLoading(true);
      if (err.response && err.response.data) {
        if (err.response.data.errors?.length > 0) {
          // toast.error(err.response.data.errors[0].msg);
          setError(err.response.data.errors[0].msg);
        } else {
          // toast.error(err.response.data.error);
          setError(err.response.data.error);
        }
      } else {
        // toast.error("Internel Server Error Please wait");
        setError("Internel Server Error Please wait");
      }

     
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchingStudent();
  }, []);

  // Verify Student Logic
  const handleVerification = async (id) => {
    try {
      setVerifyBtnLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/verify-student`,
        { id }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        window.location.reload();
      }
    } catch (err) {
      setVerifyBtnLoading(true);
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
      setVerifyBtnLoading(false);
    }
  };
  // Reject Student Logic
  const handleRejection = async (id) => {
    try {
      setRejectBtnLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/reject-student`,
        { id }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        window.location.reload();
      }
    } catch (err) {
      setRejectBtnLoading(true);
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
      setRejectBtnLoading(false);
    }
  };

  return (
    <div className=" md:p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      {loading ? (
        <div className="text-white text-4xl text-center mt-20 animate-pulse">
          Loading...
        </div>
      ) : error ? (
        <div className="text-red-500 text-2xl flex flex-col items-center justify-center gap-4 mt-10 text-center">
          <BiErrorAlt  className="text-5xl font-bold animate-spin" />
          <p>{error}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {students.length > 0 &&
            students.map((student, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl shadow-sm flex flex-col overflow-hidden hover:md transition-shadow shadow-gray-400 duration-300"
              >
                <div className="p-4 border-b border-gray-800 bg-gray-800">
                  <div className="flex flex-col items-center">
                    <div className="flex sm:flex-row justify-center items-center gap-6">
                      <img
                        src={student.profilePic}
                        alt={student.fullName}
                        className="w-36 h-36 rounded-lg object-cover shadow-md border-4 border-indigo-600"
                      />
                      <img
                        src={student.paymentScreenshot}
                        alt="Payment Screenshot"
                        className="w-36 h-36 rounded-lg object-cover shadow-md border-4 border-indigo-600"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mt-6 text-white text-center">
                      {student.fullName}
                    </h2>
                  </div>
                </div>

                <div className="p-6 text-sm space-y-3 text-gray-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <p><span className="text-gray-400">Roll #:</span> {student.rollNo}</p>
                    <p><span className="text-gray-400">Father's Name:</span> {student.fatherName}</p>
                    <p><span className="text-gray-400">Gender:</span> {student.gender}</p>
                    <p><span className="text-gray-400">Email:</span> {student.email}</p>
                    <p><span className="text-gray-400">Phone:</span> {student.phone}</p>
                    <p><span className="text-gray-400">CNIC:</span> {student.cnic}</p>
                    <p><span className="text-gray-400">Qualification:</span> {student.qualification}</p>
                    <p><span className="text-gray-400">DOB:</span> {new Date(student.dateOfBirth).toLocaleDateString()}</p>
                    <p><span className="text-gray-400">Coupon:</span> {student.coupon ? student.coupon : 'No'}</p>
                    <p><span className="text-gray-400">Address:</span> {student.address}</p>
                    <p><span className="text-gray-400">Verified:</span> {student.profileVerified ? "Yes" : "No"}</p>
                    <p><span className="text-gray-400">Registered:</span> {new Date(student.createdAt).toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 px-5 py-3 bg-gray-700 border-t border-gray-600">
                  {verifyBtnLoading ? (
                    <button className="flex-1 py-2 rounded-lg bg-indigo-300 text-gray-900 font-semibold cursor-not-allowed">
                      Please wait...
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVerification(student._id)}
                      disabled={student.profileVerified}
                      className={`flex-1 disabled:cursor-not-allowed py-2 rounded-lg cursor-pointer font-semibold transition-all duration-200 text-white ${student.profileVerified ? 'bg-gray-600 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                    >
                      {student.profileVerified ? "Verified" : "Verify"}
                    </button>
                  )}

                  {rejectBtnLoading ? (
                    <button className="flex-1 py-2 rounded-lg bg-red-300  text-gray-900 font-semibold cursor-not-allowed">
                      Please wait...
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRejection(student._id)}
                      className="flex-1 py-2 rounded-lg bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold transition-all duration-200"
                    >
                      Reject
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default AllStudentsData;
