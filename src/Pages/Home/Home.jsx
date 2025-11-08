import React, { Suspense, useContext } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import LatestProducts from "../../Components/LatestProducts/LatestProducts";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { BarLoader } from "react-spinners";
import CallToAction from "../../Components/CallToAction/CallToAction";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center  h-screen z-50 absolute top-0 inset-0 bg-white">
        <BarLoader color="#422ad5" />
      </div>
    );
  }

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

      {/* call to action section  */}
      <CallToAction />
    </div>
  );
};

export default Home;
