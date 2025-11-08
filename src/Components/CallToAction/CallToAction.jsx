import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Start Selling Your Products Now!
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Reach thousands of buyers. List your product in seconds, start
            auctions, and get the best price.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/create-products"
              className="btn gradient-primary text-white capitalize text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              List Your Product
            </Link>

            <Link
              to="/all-products"
              className="btn btn-outline btn-primary capitalize text-lg px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all w-full sm:w-auto">
              Browse All Products
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-8 mt-12 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Secure Transactions</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>100% Free Listing</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;
