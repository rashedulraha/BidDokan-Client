import React, { useContext, useRef } from "react";
import Container from "../../Components/Container";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { useParams } from "react-router-dom";
import useSingleProduct from "../../Hooks/useSingleProduct";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { product } = useSingleProduct(`http://localhost:3000/products/${id}`);
  const { title, image, price_min, price_max, description, _id } =
    product || {};

  const bidModalRef = useRef(null);
  const { user } = useContext(AuthContext);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleDeleteProducts = () => {
    console.log("products delete", _id);
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const photoURL = form.photoURL.value.trim();
    const contactInfo = form.contactInfo.value.trim();
    const inputPrice = form.inputPrice.value.trim();

    const newBid = {
      name,
      email,
      photoURL,
      contactInfo,
      inputPrice: Number(inputPrice),
      status: "pending",
      productId: id,
    };

    fetch(`http://localhost:3000/bids`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          toast.success("Bid placed successfully!");
          form.reset();
        } else {
          toast.error("Failed to place bid. Try again.");
        }
      })
      .catch(() => {
        toast.error("Network error. Please try again.");
      });
  };

  const category = "Electronics";
  const condition = "Excellent";
  const created_at = "2024-11-01T10:30:00Z";
  const usage = "6 months";
  const seller_image = "https://i.pravatar.cc/150?img=12";
  const seller_name = "Ahmed Hassan";
  const email = "ahmed.hassan@example.com";
  const location = "Dhaka, Bangladesh";
  const seller_contact = "+880 1712-345678";

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />

      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <div className="aspect-square bg-gray-100">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Product Description
                </h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* TITLE + CATEGORY */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  {title}
                </h1>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {condition}
                  </span>
                </div>
              </div>

              {/* PRICE RANGE */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <p className="text-sm text-gray-600 mb-2">Price range</p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-gray-900">
                    ${price_min?.toLocaleString()}
                  </span>
                  <span className="text-xl text-gray-500">-</span>
                  <span className="text-2xl font-semibold text-gray-700">
                    ${price_max?.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <IoInformationCircleSharp className="text-blue-600" />
                  Product Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Posted:</span>
                    <span className="font-medium text-gray-900">
                      {created_at &&
                        new Date(created_at).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Condition:</span>
                    <span className="font-medium text-gray-900 capitalize">
                      {condition}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Usage Time:</span>
                    <span className="font-medium text-gray-900">{usage}</span>
                  </div>
                </div>
              </div>

              {/* SELLER INFORMATION */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <IoPersonSharp className="text-blue-600" />
                  Seller Information
                </h3>
                <div className="flex items-start space-x-4">
                  <img
                    src={seller_image}
                    alt={seller_name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{seller_name}</h4>
                    <div className="mt-3 space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MdOutlineEmail className="text-gray-500" />
                        {email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaLocationDot className="text-gray-500" />
                        {location}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <IoMdCall className="text-gray-500" />
                        {seller_contact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BUY BUTTON — ALWAYS VISIBLE */}
              <button
                onClick={handleBidModalOpen}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                I Want to Buy This Product
              </button>

              {user && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-sm font-medium text-gray-600 mb-3">
                    Seller Actions
                  </h3>
                  <div className="flex gap-2">
                    <Link
                      to={`/update-products/${_id}`}
                      className="flex-1 py-3 px-4 bg-green-50 hover:bg-green-100 text-green-800 rounded-lg text-center font-medium border border-green-200 transition-colors">
                      Update data
                    </Link>
                    <button
                      onClick={handleDeleteProducts}
                      className="flex-1 py-3 px-4 bg-red-50 hover:bg-red-100 text-red-800 rounded-lg text-center font-medium border border-red-200 transition-colors">
                      Delete Products
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* BID MODAL — UNCHANGED */}
      <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-md w-full">
          <h3 className="font-bold text-xl text-center mb-6">
            Give Seller Your Offered Price
          </h3>

          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-500 hover:text-white">
              ✕
            </button>
          </form>

          <form onSubmit={handleBidSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Buyer Name
                </label>
                <input
                  type="text"
                  name="name"
                  readOnly
                  defaultValue={user?.displayName || ""}
                  className="input input-bordered w-full bg-gray-50"
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
                  defaultValue={user?.email || ""}
                  className="input input-bordered w-full bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Buyer Image URL
              </label>
              <input
                type="url"
                name="photoURL"
                readOnly
                defaultValue={user?.photoURL || ""}
                className="input input-bordered w-full bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Place your Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="inputPrice"
                placeholder="1500"
                className="input input-bordered w-full"
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactInfo"
                placeholder="10-digit phone number"
                className="input input-bordered w-full"
                pattern="[0-9]{10}"
              />
            </div>

            <div className="modal-action mt-6 flex justify-end">
              <button
                type="submit"
                className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-6">
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
