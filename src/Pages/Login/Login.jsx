import React from "react";
import Container from "../../Components/Container";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-full py-5 md:py-0 bg-base-200">
      <Container>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">
              Welcome Back
            </h2>

            <form>
              <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />

                {/* Password */}
                <label className="label mt-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  required
                />

                {/* Forgot password */}
                <div className="text-right mt-2">
                  <a href="#" className="link link-hover text-sm text-primary">
                    Forgot password?
                  </a>
                </div>

                {/* Submit button */}
                <div className="mt-4">
                  <button className="btn btn-primary w-full">Login</button>
                </div>
              </fieldset>
            </form>
            {/* Register link */}
            <p className="text-center text-sm mt-3">
              Don’t have an account?{" "}
              <a href="/register" className="link link-hover text-primary">
                Register here
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
