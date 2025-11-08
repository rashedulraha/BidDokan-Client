import React, { useContext, useState } from "react";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  const { user, Signout, updateUser, deleteUserAccount } =
    useContext(AuthContext);
  // console.log(user);

  const [toggleForm, setToggleForm] = useState(false);

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

  const handleToggleFormOpen = () => {
    setToggleForm(true);
  };

  const handleToggleFormClose = () => {
    setToggleForm(false);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;

    updateUser(displayName, photoURL)
      .then(() => {
        setToggleForm(false);
        toast.success("Your profile is updated");
      })
      .then((error) => {
        toast.error(error?.massage);
      });
  };

  const handleDeleteUser = () => {
    console.log("delete");

    deleteUserAccount()
      .then(() => {
        Signout();
        navigate("/account/register");
        toast.success("Successfully delete account");
      })
      .error((error) => {
        toast.error(error.massage);
      });
  };

  const updateUserForm = (
    <>
      <div>
        <form
          className="max-w-2xl mx-auto p-6 bg-white rounded-xl "
          onSubmit={handleUpdateUser}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="displayName"
                className="block text-sm font-medium text-gray-700">
                Your Display Name
              </label>
              <input
                type="text"
                name="displayName"
                placeholder="Enter your display Name"
                defaultValue={name}
                className="w-full input border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-700">
                Your Photo URL
              </label>
              <input
                type="url"
                defaultValue={photoURL}
                name="photoURL"
                placeholder="Enter your Photo URL"
                className="w-full input border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn shadow-none bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </>
  );

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

          {toggleForm && updateUserForm}

          {/* Action Buttons Row */}
          <div className="flex justify-center p-4 bg-gray-100">
            <div className="flex space-x-4">
              {toggleForm ? (
                <button
                  onClick={handleToggleFormClose}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                  <IoClose className="mr-2" />
                  Cancel Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleToggleFormOpen}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
                  <FaEdit className="mr-2" />
                  Edit Profile
                </button>
              )}
              <button
                onClick={handleSignout}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors cursor-pointer">
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
              <button
                onClick={handleDeleteUser}
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors cursor-pointer">
                <MdDelete className="mr-2" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
