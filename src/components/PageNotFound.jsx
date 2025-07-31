import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen px-5 bg-white">
      <div className="text-center">
        <h1 className="text-6xl md:text-9xl font-extrabold text-black">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page Not Found</p>
        <p className="text-gray-700 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-[#1ab69d] rounded-md hover:bg-[#EE4A6B] duration-200 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;