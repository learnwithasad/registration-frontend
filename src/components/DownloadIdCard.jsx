import React, { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { QRCodeCanvas } from "qrcode.react";

const DownloadIdCard = () => {
  const [cnic, setCnic] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentData, setStudentData] = useState({});
  const [studentCardAvailable, setStudentCardAvailable] = useState(false);

  const ref = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cnic.length < 15) {
      toast.error("Please enter a valid CNIC.");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/download-idCard`,
        { cnic } 
      );
      if (response.data) {
        setStudentCardAvailable(true);
        setStudentData(response.data);
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

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `Student-Id-Card.png`;
        link.href = dataUrl;
        link.click();

        window.location.reload(); // Reload the page after download
      })
      .catch((err) => {
        toast.error(err.message || 'Please wait or contact Us');
      });
  }, [ref]);

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-3xl py-10 px-5 md:px-8 mt-10 mx-auto border border-[#e6e6e6] shadow-2xl rounded-2xl overflow-hidden">
        <div className="mb-5">
          <input
            type="text"
            name="cnic"
            id="cnic"
            placeholder="CNIC / B-form"
            value={cnic}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
              const formattedCnic = value
                .replace(/^(\d{5})(\d{7})(\d{1})$/, "$1-$2-$3") // Format as xxxxx-xxxxxxx-x
                .replace(/^(\d{5})(\d{1,7})$/, "$1-$2") // Format as xxxxx-xxxxxxx
                .replace(/^(\d{1,5})$/, "$1"); // Format as xxxxx
              setCnic(formattedCnic);
            }}
            maxLength="15"
            className="w-full p-3 border border-[#e6e6e6] rounded-md bg-[#F0F4F5] text-black placeholder-gray-500 focus:outline-none focus:border-[#1ab69d] transition-colors"
          />
        </div>   
          <button
            type="submit"
            className={`w-full bg-[#1ab69d] disabled:bg-gray-500 disabled:cursor-not-allowed tracking-wider font-[600] cursor-pointer text-white py-2.5 md:py-3 rounded-lg`}
           disabled={studentCardAvailable || loading}
          
          >
            {loading ? "Please wait..." : "SUBMIT"}
          </button>
      </form>

      {studentCardAvailable && (
        <div className="flex flex-col px-5 items-center justify-center my-10">
          <div className="image-wrapper flex items-center flex-col">
            <div
              ref={ref}
              className="bg-white shadow-lg w-[555px]  h-[353px] card-scroll scroll-auto rounded-lg relative overflow-hidden"
            >
              <img
                src="./student-card.png"
                alt="Student ID"
                className="w-[555px] h-[353px] fixed-image"
              />
              <div className="flex absolute items-end  gap-0 top-[48%] left-[5.7%]">
                <div className="w-[130px] rounded-sm h-[130px] p-1 border-2 border-[#1ab69d] overflow-hidden">
                  <img
                    src={studentData.img ? studentData.img : "./user-logo.png"}
                    alt="Student"
                    className="w-full h-full rounded-sm cover border-2 cover border-black"
                  />
                </div>
                <div className="text-[15px] ml-[17px] w-[255px] -mb-1.5 flex flex-col gap-1.5">
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">Roll No:</span>{" "}
                    {studentData.rollNo}
                  </h2>
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">Name:</span>{" "}
                    {studentData.name} 
                  </h2>
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">Father:</span>{" "}
                    {studentData.fatherName} 
                  </h2>
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">CNIC:</span>{" "}
                    {studentData.cnic}
                  </h2>
                  <h2 className="font-bold text-gray-800">
                    <span className="text-black font-bold">Course:</span>{" "}
                    MERN Stack
                  </h2>
                </div>

                <QRCodeCanvas
                  value={`Roll No: ${studentData.rollNo}\nName: ${studentData.name}\nCNIC: ${studentData.cnic}\nCourse: Frontend Development`}
                  size={80}
                  className="ml-3 mt-4"
                />
              </div>
            </div>
          </div>

          <button
            onClick={onButtonClick}
            className="mt-6 bg-[#1ab69d] duration-200 hover:bg-[#EE4A6B] cursor-pointer text-white px-4 py-2 rounded-md"
          >
            Download ID Card
          </button>
        </div>
      )}
      <Toaster />
    </>
  );
};

export default DownloadIdCard;
