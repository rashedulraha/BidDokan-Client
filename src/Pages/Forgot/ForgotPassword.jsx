import React from "react";
import Container from "../../Components/Container";
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <main className="flex justify-center items-center min-h-screen bg-base-200 px-4">
      <Container>
        <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto">
          <div className="card-body p-6">
            <h2 className="text-2xl font-bold text-center text-primary mb-2">
              Forgot Password?
            </h2>
            <p className="text-center text-xs text-gray-600 mb-4">
              Enter your registered email and we’ll send you a link to reset
              your password.
            </p>

            <form>
              <fieldset className="space-y-3">
                {/* Email Field */}
                <div>
                  <label className="label text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full input-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full btn-sm mt-2">
                  Send Reset Link
                </button>
              </fieldset>
            </form>

            <p className="text-center text-xs mt-4">
              Remember your password?{" "}
              <Link
                to="/account/login"
                className="link link-hover text-primary">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ForgotPassword;
