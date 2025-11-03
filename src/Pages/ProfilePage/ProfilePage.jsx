import React, { useContext } from "react";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const { user, Signout } = useContext(AuthContext);
  const navigate = useNavigate();
  const name = user?.displayName || `Guest`;
  // const email = user?.email || "user@gmail.com";
  const photoURL =
    user?.photoURL ||
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s";

  const handleSignout = () => {
    Signout().then(() => {
      toast.success("Successfully Logout");
      navigate("/account/login");
    });
  };
  return (
    <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-blue-600 p-6 text-white">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <img
                  src={photoURL}
                  alt="user photo"
                  className="w-24 h-24 rounded-full  border-white"
                />
              </div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-blue-100">Member since January 2025</p>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex justify-center p-4 bg-gray-100">
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                <FaEdit className="mr-2" />
                Edit Profile
              </button>
              <button
                onClick={handleSignout}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors cursor-pointer">
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
