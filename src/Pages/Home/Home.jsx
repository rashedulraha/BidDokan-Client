import React, { Suspense } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="my-10">
        <Suspense
          fallback={
            <div className=" flex items-center justify-center h-full w-full">
              <span className="loading loading-dots loading-xl text-violet-600"></span>
            </div>
          }>
          <LatestProducts latestProductsPromise={latestProductsPromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
