import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { PiEmptyBold } from "react-icons/pi";

const CouponDetails = () => {
    const [loading, setLoading] = useState(false)
    const { couponCode } = useParams();
    const [studentsData, setStudentsData] = useState([])
    
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/coupon-details`, {coupon: couponCode}
        );


        if (response.data.success || response.statusText === "OK") {
            setStudentsData(response.data);
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
    getDetails();
  }, [couponCode]);


  if (loading) {
    return (
        <div className='flex w-full h-full items-center justify-center text-2xl text-center font-bold text-gray-900 bg-white'>Please wait...</div>
    )
  }

   if (!studentsData || studentsData.length === 0) {
    return (
        <div className='flex w-full h-full mt-20 items-center justify-center text-2xl sm:text-4xl text-center font-bold text-gray-900 bg-white'>Your Data is Empty <PiEmptyBold className='ml-3 text-3xl text-[#1CB69A] sm:text-5xl' /></div>
    )
  }

  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 lg:grid-cols-3'>
            {studentsData.map((student, index) => (
                <div key={index} className='bg-[#F5F9FA] relative py-4 flex items-center  border h-[150px] border-[#e6e6e6] shadow-lg rounded-2xl'>
                    <img src="user-logo.png" alt="Logo" className=' h-[100%]' />
                    <div className='flex ml-2.5 flex-col justify-between h-[100%]'>
                        <div>
                         <h1 className='text-md sm:text-xl font-bold'>{student.fullName}</h1>
                        <h3 className='text-sm mt-2 sm:text-lg font-[600]'>Coupon: <span className='text-[#1CB69A]'> {student.coupon} </span></h3>
                        </div>
                         <h4 className='text-sm sm:text-md'>
  {new Date(student.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })}
</h4>
<div className='absolute bottom-4 right-4 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-[#EE4A62] text-white'>{index + 1}</div>
                    </div>
                </div>
            ))}
        </div>
        <Toaster />
    </div>
  )
}

export default CouponDetails
