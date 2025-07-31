import React from 'react'
import DownloadIdCard from '../components/DownloadIdCard'
import Navbar from '../components/Navbar'

const DownloadIdCardPage = () => {
  return (
       <div className="min-h-screen bg-white w-full">
          <Navbar />
          <DownloadIdCard />
        </div>
  )
}

export default DownloadIdCardPage