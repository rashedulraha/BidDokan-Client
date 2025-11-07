import React from "react";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import Container from "../../Components/Container";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <Container>
        <div className=" w-full bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-red-500 p-6 text-white text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white bg-opacity-20 p-4 rounded-full">
                <FaExclamationTriangle className="text-4xl" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
          </div>

          <div className="p-8 text-center">
            <p className="text-gray-600 mb-6">
              Oops! The page you are looking for might have been removed, had
              its name changed, or is temporarily unavailable.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                Please check the URL for any typos or try navigating back to the
                homepage.
              </p>
            </div>

            <Link
              to={"/"}
              className="flex items-center justify-center mx-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-fit">
              <FaHome className="mr-2" />
              Go to Homepage
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>© 2025 SmartDeals. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
