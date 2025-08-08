import React from 'react'
import CreateCoupon from '../components/CreateCoupon'

const CreateCouponsPage = () => {
  return (
<div className="min-h-screen flex justify-center items-center bg-gray-900 w-full py-8 px-4">
  <div className="flex flex-col w-full max-w-sm sm:max-w-sm">
    <CreateCoupon />
  </div>
</div>
  )
}

export default CreateCouponsPage