import React from "react";
import { Link } from "react-router";

const ProductsCard = ({ latestProducts }) => {
  const { _id, price_max, price_min, description, title, image } =
    latestProducts;

  return (
    <div className="card  w-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
      <figure className="p-4">
        <img
          src={image}
          alt="Product"
          className="rounded-xl object-cover w-full h-48"
        />
      </figure>
      <div className="card-body items-center  p-4">
        <h2 className="card-title text-xl font-bold text-gray-800 ">{title}</h2>
        <p className="text-gray-600 mt-2 text-left">{description}</p>
        <p className="text-gray-600 mt-2 font-bold ">
          $ {price_max}- {price_min}
        </p>
        <div className="card-actions mt-4 w-full">
          <Link
            to={`/product-details/${_id}`}
            className="btn w-full gradient-primary  text-white capitalize">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
