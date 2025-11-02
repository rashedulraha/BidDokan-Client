import React from "react";
import Container from "../../Components/Container";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-full py-5 md:py-0 bg-base-200">
      <Container>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl mx-auto">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">
              Create an Account
            </h2>

            <form>
              <fieldset className="fieldset">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />

                <label className="label mt-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />

                <label className="label mt-2">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                  required
                />

                <div className="mt-4">
                  <button className="btn btn-primary w-full">Register</button>
                </div>
              </fieldset>
            </form>
            <p className="text-center text-sm mt-3">
              Already have an account?{" "}
              <a href="/login" className="link link-hover text-primary">
                Login here
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
