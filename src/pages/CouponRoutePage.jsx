import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PageNotFound from "../components/PageNotFound";
import CouponDetails from "../components/CouponDetails";

const CouponRoutePage = () => {
  const { couponCode } = useParams();
  const [exists, setExists] = useState(null);

  useEffect(() => {
    const checkCoupon = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/get-coupon`
        );


        // Normalize both values for safety (lowercase + trim)
        const normalizedCoupons = response.data.map(c => c.toLowerCase().trim());
        const normalizedCode = couponCode.toLowerCase().trim();

        setExists(normalizedCoupons.includes(normalizedCode));
      } catch (error) {
        setExists(false);
      }
    };
    checkCoupon();
  }, [couponCode]);

  if (exists === null) {
    return <div className="w-full min-h-screen flex items-center justify-center text-2xl text-center font-bold text-gray-900 bg-white">Please Wait...</div>;
  }

  if (!exists) {
    return <PageNotFound />;
  }

  return (
    <div className="min-h-screen bg-white w-full py-8 px-4">
      <CouponDetails />
    </div>
  );
};

export default CouponRoutePage;
