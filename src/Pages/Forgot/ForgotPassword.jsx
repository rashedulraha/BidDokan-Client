import React from "react";
import Container from "../../Components/Container";

const ForgotPassword = () => {
  return (
    <main className="flex-1 flex justify-center items-center bg-base-200 px-4 h-full">
      <Container>
        <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto">
          <div className="card-body p-6">
            {/* Heading */}
            <h2 className="text-xl font-bold text-center mb-3 text-primary">
              Forgot Password?
            </h2>
            <p className="text-center text-xs text-gray-600 mb-4">
              Enter your email and we'll send you a link to reset your password.
            </p>

            {/* Forgot Password Form */}
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

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary w-full btn-sm mt-2">
                  Send Reset Link
                </button>
              </fieldset>
            </form>

            {/* Back to Login */}
            <p className="text-center text-xs mt-4">
              Remember your password?{" "}
              <a href="/login" className="link link-hover text-primary">
                Back to Login
              </a>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ForgotPassword;
