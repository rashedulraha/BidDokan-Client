import React from "react";
import Container from "../../Components/Container";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <main className="flex-1 flex justify-center items-center bg-base-200 px-4 h-full">
      <Container>
        <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto">
          <div className="card-body p-6">
            {/* Heading */}
            <h2 className="text-xl font-bold text-center mb-4 text-primary">
              Welcome Back
            </h2>

            {/* Login Form */}
            <form>
              <fieldset className="space-y-3">
                {/* Email */}
                <div>
                  <label className="label text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full input-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="label text-sm">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input input-bordered w-full input-sm"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Remember Me + Forgot Password */}
                <div className="flex justify-between items-center text-xs">
                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                    />
                    <span className="label-text ml-2">Remember me</span>
                  </label>
                  <Link
                    to={"/forgot-password"}
                    className="link link-hover text-primary text-xs">
                    Forgot password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full btn-sm mt-2">
                  Login
                </button>
              </fieldset>
            </form>

            {/* OR Divider */}
            <div className="divider text-xs my-3">OR</div>

            {/* Google Login Button */}
            <button className="btn bg-white text-black border border-gray-300 w-full gap-2 hover:bg-gray-50 text-sm">
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            {/* Register Redirect */}
            <p className="text-center text-xs mt-3">
              Don’t have an account?{" "}
              <a href="/register" className="link link-hover text-primary">
                Register here
              </a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Login;
