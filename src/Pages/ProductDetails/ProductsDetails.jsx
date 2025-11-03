import React, { useContext, useRef } from "react";
import Container from "../../Components/Container";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { useParams } from "react-router";
import useSingleProduct from "../../Hooks/useSingleProduct";
const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useSingleProduct(id);

  const {
    title,
    image,
    category,
    price_min,
    price_max,
    created_at,
    condition,
    seller_image,
    usage,
    email,
    location,
    description,
    seller_contact,
    seller_name,
  } = product || {};

  const bidModalRef = useRef(null);
  const { user } = useContext(AuthContext);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const contactInfo = e.target.contactInfo.value;
    const inputPrice = e.target.inputPrice.value;
    console.log(name, email, photoURL, contactInfo, inputPrice);
  };

  return (
    <>
      <div className="  py-8 px-4 sm:px-6 lg:px-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Left Column - Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-xl overflow-hidden bg-gray-100 border border-gray-200">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status Badge */}
              <div className="flex justify-center">{description}</div>
            </div>

            {/* Right Column - Product Details */}
            <div className="space-y-6">
              {/* Title and Category */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {title}
                </h1>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {condition}
                  </span>
                </div>
              </div>

              {/* Price Section */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border border-blue-100">
                <p className="text-sm text-gray-600 mb-1">Price starts from</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    ${price_min?.toLocaleString()}
                  </span>
                  <span className="text-xl text-gray-500 mx-2">-</span>
                  <span className="text-2xl font-semibold text-gray-700">
                    ${price_max?.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Product Details Card */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex gap-2 items-center">
                  <IoInformationCircleSharp />
                  Product Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="text-gray-600 w-32">Posted:</span>
                    <span className="font-medium text-gray-900">
                      {new Date(created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Condition:</span>
                    <span className="font-medium text-gray-900 capitalize">
                      {condition}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-600 w-32">Usage Time:</span>
                    <span className="font-medium text-gray-900">{usage}</span>
                  </div>
                </div>
              </div>

              {/* Seller Information Card */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <IoPersonSharp />
                  Seller Information
                </h3>
                <div className="flex items-start space-x-4">
                  <img
                    src={seller_image}
                    alt={seller_name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">
                      {seller_name}
                    </h4>
                    <div className="mt-2 space-y-1 text-sm">
                      <div className="flex gap-2 items-center text-gray-600">
                        <MdOutlineEmail />
                        {email}
                      </div>
                      <div
                        className="flex gap-2
                     items-center text-gray-600">
                        <FaLocationDot /> {location}
                      </div>
                      <div className="flex gap-2 items-center text-gray-600">
                        <IoMdCall />
                        {seller_contact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Product Description
                </h3>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {description}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleBidModalOpen}
                className=" w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer">
                I Want Buy This Product
              </button>
            </div>
          </div>
        </Container>
      </div>

      <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-6 max-w-md w-full">
          <h3 className="font-bold text-xl text-center mb-6">
            Give Seller Your Offered Price
          </h3>
          {/* cancel button */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-indigo-500 hover:text-white">
              ✕
            </button>
          </form>

          <form
            method="dialog"
            className="space-y-4"
            onSubmit={handleBidSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Buyer Name
                </label>
                <input
                  type="text"
                  readOnly
                  defaultValue={user?.displayName}
                  name="name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Buyer Email
                </label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  defaultValue={user?.email}
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Buyer Image URL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Buyer Image URL
              </label>
              <input
                type="url"
                name="photoURL"
                readOnly
                defaultValue={user?.photoURL}
                className="input input-bordered w-full"
              />
            </div>

            {/* Place your Price */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Place your Price
              </label>
              <input
                type="text"
                name="inputPrice"
                placeholder="Place your bid Price"
                className="input input-bordered w-full"
              />
            </div>

            {/* Contact Info */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Info
              </label>
              <input
                type="tel"
                name="contactInfo"
                placeholder="Please enter your contact number"
                className="input input-bordered w-full"
              />
            </div>

            {/* Action Buttons */}
            <div className="modal-action mt-6 flex justify-end gap-3">
              <button type="submit" className="btn bg-indigo-500 text-white ">
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ProductDetails;
