import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import DownloadIdCardPage from "./pages/DownloadIdCardPage";
import AdminSignupPage from "./pages/AdminSignupPage";
import VerifyAdminPage from "./pages/VerifyAdminPage";
import AllStudentsDataPage from "./pages/AllStudentsDataPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import { useProvider } from "./context/AuthContext";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import CreateCouponsPage from "./pages/CreateCouponsPage";
import AllCouponsDataPage from "./pages/AllCouponsDataPage";
import CouponRoutePage from "./pages/CouponRoutePage";

const App = () => {
  const { isAuthenticated } = useProvider();
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/id-card" element={<DownloadIdCardPage />} />
      <Route path="/course-details" element={<CourseDetailsPage />} />
      {/* Admin Route */}
      <Route path="/admin" element={<AdminSignupPage />} />
      <Route path="/admin-login" element={<AdminLoginPage />} />
      <Route path="/verify-admin/:adminId" element={<VerifyAdminPage />} />

    <Route
     path={`/create-coupons`}
     element={<CreateCouponsPage />}
   />

    <Route
     path="/coupons-data"
     element={<AllCouponsDataPage />}
   />

   <Route path="/:couponCode" element={<CouponRoutePage />} />



        <Route
     path="/all-students-data/:verifyId"
     element={isAuthenticated ? <AllStudentsDataPage /> : <Navigate to="/admin-login" />}
   />

  <Route path="*" element={<CouponRoutePage />} />
   
    </Routes>
  );
};

export default App;
