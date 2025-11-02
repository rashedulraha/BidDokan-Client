import React from "react";
import Container from "../../Components/Container";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  return (
    <main className="flex-1 flex justify-center items-center bg-base-200 px-4 h-full">
      <Container>
        <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto">
          <div className="card-body p-6">
            <h2 className="text-xl font-bold text-center mb-4 text-primary">
              Create an Account
            </h2>

            <form>
              <fieldset className="space-y-3">
                <div>
                  <label className="label text-sm">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full input-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

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

                <button
                  type="submit"
                  className="btn btn-primary w-full btn-sm mt-2">
                  Register
                </button>
              </fieldset>
            </form>

            <div className="divider text-xs my-3">OR</div>
            {/* Google Button */}
            <button className="btn bg-white text-black border border-gray-300 w-full gap-2 hover:bg-gray-50 text-sm">
              <FaGoogle className="text-red-500" />
              Sign up with Google
            </button>
            {/* Login Link */}
            <p className="text-center text-xs mt-3">
              Already have an account?{" "}
              <a href="/login" className="link link-hover text-primary">
                Login here
              </a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Register;
