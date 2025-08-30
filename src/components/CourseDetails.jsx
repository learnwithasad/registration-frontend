import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { backendTopics, deploymentTopics, jsTopics, mernIntegrationTopics, mongodbTopics, reactTopics  } from '../courseContent'
import { IoIosArrowDown } from "react-icons/io";
       
const CourseDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);


  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  return (
    <div className='py-6'>
      <div className='px-5 md:px-8'>
      <Link to="/">
              <button
              className="p-2.5 px-10 font-[600] cursor-pointer text-[14px] rounded-md text-white bg-[#1ab69d] transition-all duration-300 hover:bg-[#ee4a6b]"
            >
              REGISTER NOW
            </button>

            </Link>

            <div className="w-full px-4 py-6 md:p-4 flex flex-col mt-8 justify-around rounded-2xl bg-[#F5F9FA]">
              <h1 className='font-bold text-black'>MERN Stack Course Requirements:</h1>
              <div className="w-full h-[2px] rounded-full mt-2 bg-[#1ab69d]"></div>

              <h1 className='font-bold mt-6 text-black'>Basic Computer Knowledge</h1>
              <h1 className='font-bold mt-4 text-black'>Familiarity with HTML, CSS & JS</h1>
              <h1 className='font-bold mt-4 text-black'>Laptop or Desktop Required</h1>
              <h1 className='font-bold mt-4 text-black'>Time Commitment</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>

            <div className="w-full p-4 flex gap-5 py-6 md:gap-0 md:py-0 flex-col justify-around  rounded-2xl bg-[#F5F9FA]">
              <h1 className='font-bold text-black'><span className='text-[#ee4a6b]'>Fees:</span> PKR 3,000/month (3 months only) </h1>
              <h1 className='font-bold text-black'><span className='text-[#ee4a6b]'>Duration:</span>  3 Months</h1>
              <h1 className='font-bold text-black'><span className='text-[#ee4a6b]'>Classes:</span>  4 Days a Week</h1>
              <h1 className='font-bold text-black'><span className='text-[#ee4a6b]'>Timing:</span>  Set After Discussion with Enrolled Students</h1>
            </div>

            <div className="w-full py-6 px-4 md:p-4 rounded-2xl bg-[#F5F9FA]">
              <h1 className='font-bold text-black pay'>Payment Methods:</h1>
              <div className="w-full h-[2px] rounded-full mt-2 bg-[#1ab69d]"></div>

{/* JazzCash */}
            <div className='mt-6'>
            <h1 className='font-bold'>Jazz Cash</h1>
              <h1 className='font-bold text-black text-[14px] md:text-md'> <span className='text-[#ee4a6b]'>Account Name:</span> Muhammad Asad</h1>
              <h1 className='font-bold text-black text-[14px] md:text-md'> <span className='text-[#ee4a6b]'>Account Number:</span> 03702575635</h1>
            </div>
{/* EasyPaisa */}
            <div className='mt-4'>
            <h1 className='font-bold'>Easypaisa</h1>
              <h1 className='font-bold text-black text-[14px] md:text-md'> <span className='text-[#ee4a6b]'>Account Name:</span> Muhammad Asad</h1>
              <h1 className='font-bold text-black text-[14px] md:text-md'> <span className='text-[#ee4a6b]'>Account Number:</span> 03702575635</h1>
            </div>
{/* Meezan Bank */}
            <div className='mt-4'>
            <h1 className='font-bold'>Meezan Bank</h1>
              <h1 className='font-bold text-black text-[14px] md:text-md'> <span className='text-[#ee4a6b]'>Account Name:</span> Muhammad Asad</h1>
              <h1 className='font-bold text-black text-[14px] md:text-md'> <span className='text-[#ee4a6b]'>IBAN:</span> PK69MEZN0000300110743767</h1>
            </div>

            </div>

            </div>

<h1 className='font-bold text-black mt-8 text-2xl course relative'>Course Content</h1>
<div className="w-full h-[2px] rounded-full mt-2 bg-[#1ab69d]"></div>
</div>
{/* JavaScript */}
<div className="max-w-5xl mx-auto mt-6 bg-[#F5F9FA] px-5 md:px-8 py-8 rounded-2xl">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-black">
        JavaScript
      </h1>
      <div className="space-y-4">
        {jsTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-[#fff] relative rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleBox(index)}
              className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg bg-[#1ab69d] text-white transition"
            >
              {topic.title}
              <IoIosArrowDown />
            </button>
            
            {openIndex === index && (
              <ul className="list-disc text-[14px] md:text-[16px] list-inside p-4 space-y-1 text-black">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            
          </div>
        ))}
      </div>
    </div>


{/* reactTopics */}
<div className="max-w-5xl mx-auto mt-6 bg-[#F5F9FA] px-5 md:px-8 py-8 rounded-2xl">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-black">
        React JS
      </h1>
      <div className="space-y-4">
        {reactTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-[#fff] relative rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleBox(index)}
              className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg bg-[#1ab69d] text-white transition"
            >
              {topic.title}
              <IoIosArrowDown />
            </button>
            
            {openIndex === index && (
              <ul className="list-disc text-[14px] md:text-[16px] list-inside p-4 space-y-1 text-black">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            
          </div>
        ))}
      </div>
    </div>

{/* backendTopics */}
<div className="max-w-5xl mx-auto mt-6 bg-[#F5F9FA] px-5 md:px-8 py-8 rounded-2xl">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-black">
        Backend
      </h1>
      <div className="space-y-4">
        {backendTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-[#fff] relative rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleBox(index)}
              className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg bg-[#1ab69d] text-white transition"
            >
              {topic.title}
              <IoIosArrowDown />
            </button>
            
            {openIndex === index && (
              <ul className="list-disc text-[14px] md:text-[16px] list-inside p-4 space-y-1 text-black">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            
          </div>
        ))}
      </div>
    </div>

{/* mongodbTopics */}
<div className="max-w-5xl mx-auto mt-6 bg-[#F5F9FA] px-5 md:px-8 py-8 rounded-2xl">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-black">
        MongoDB
      </h1>
      <div className="space-y-4">
        {mongodbTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-[#fff] relative rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleBox(index)}
              className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg bg-[#1ab69d] text-white transition"
            >
              {topic.title}
              <IoIosArrowDown />
            </button>
            
            {openIndex === index && (
              <ul className="list-disc text-[14px] md:text-[16px] list-inside p-4 space-y-1 text-black">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            
          </div>
        ))}
      </div>
    </div>

{/* mernIntegrationTopics */}
<div className="max-w-5xl mx-auto mt-6 bg-[#F5F9FA] px-5 md:px-8 py-8 rounded-2xl">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-black">
        MERN Integration
      </h1>
      <div className="space-y-4">
        {mernIntegrationTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-[#fff] relative rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleBox(index)}
              className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg bg-[#1ab69d] text-white transition"
            >
              {topic.title}
              <IoIosArrowDown />
            </button>
            
            {openIndex === index && (
              <ul className="list-disc text-[14px] md:text-[16px] list-inside p-4 space-y-1 text-black">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            
          </div>
        ))}
      </div>
    </div>

{/* deploymentTopics */}
<div className="max-w-5xl mx-auto mt-6 bg-[#F5F9FA] px-5 md:px-8 py-8 rounded-2xl">
      <h1 className="text-[20px] sm:text-3xl font-bold text-center mb-6 text-black">
       Deployment MERN Projects
      </h1>
      <div className="space-y-4">
        {deploymentTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-[#fff] relative rounded-2xl overflow-hidden shadow-md"
          >
            <button
              onClick={() => toggleBox(index)}
              className="w-full flex text-[14px] sm:text-[16px] justify-between items-center text-left p-4 font-semibold text-lg bg-[#1ab69d] text-white transition"
            >
              {topic.title}
              <IoIosArrowDown />
            </button>
            
            {openIndex === index && (
              <ul className="list-disc text-[14px] md:text-[16px] list-inside p-4 space-y-1 text-black">
                {topic.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
            
          </div>
        ))}
      </div>
    </div>


<a href="https://wa.me/923702575635" target="_blank" className='fixed z-50 right-4 bottom-10  animate-pulse sm:animate-bounce sm:bottom-6'>
        <img src="./whatsapp.png" alt="whatsapp logo" className='h-10 w-10 sm:w-14 sm:h-14' />
        </a>
    </div>
  )
}

export default CourseDetails
