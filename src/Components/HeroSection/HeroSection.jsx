import React from "react";
import Container from "../../Components/Container";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <section
        className="flex-1 flex items-center justify-center bg-gradient-to-br from-[#FFE6FD] via-[#F3E9FF] to-[#E0F8F5]
 px-4 py-8 md:py-12">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Deal Your <span className="text-primary">Products</span>
              <br className="hidden sm:block" />
              In A <span className="text-primary">Smart</span> Way!
            </h1>

            <p className="mt-4 text-base-content/70 text-sm md:text-lg max-w-2xl mx-auto">
              SmartDeals helps you sell, resell, and shop from trusted local
              sellers — all in one place!
            </p>

            <div className="mt-6 max-w-xl mx-auto">
              <div className="flex shadow-lg rounded-full overflow-hidden border border-base-300 bg-base-100">
                <input
                  type="text"
                  placeholder="Search for Products, Categories..."
                  className="input input-ghost w-full px-5 py-3 focus:outline-none focus:bg-transparent"
                />
                <button className="btn btn-primary rounded-l-none rounded-r-full px-5">
                  <IoSearchOutline size={20} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to={"/all-products"} className="btn btn-primary px-6">
                Watch All Products
              </Link>
              <Link
                to={"/create-products"}
                className="btn btn-outline btn-primary px-6">
                Create a Product
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HeroSection;
