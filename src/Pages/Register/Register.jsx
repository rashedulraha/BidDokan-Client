import React, { useContext } from "react";
import Container from "../../Components/Container";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { register } = useContext(AuthContext);

  // !Register function
  const handleRegister = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    register(email, password)
      .then(() => {
        toast.success("Successfully Register");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <main className="flex justify-center items-center min-h-screen bg-base-200 px-4 py-8">
      <Container>
        <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto">
          <div className="card-body p-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">
              Create an Account
            </h2>

            <form onSubmit={handleRegister}>
              <fieldset className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="label text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full input-sm"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

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

                <div>
                  <label className="label text-sm font-medium">Password</label>
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

            <div className="divider text-xs my-4">OR</div>

            <button className="btn bg-white text-black border border-gray-300 w-full gap-2 hover:bg-gray-50 text-sm">
              <FaGoogle className="text-red-500" />
              Sign up with Google
            </button>

            <p className="text-center text-xs mt-4">
              Already have an account?{" "}
              <Link
                to={"/account/login"}
                className="link link-hover text-primary">
                Login here
              </Link>
            </p>

            {/* ===== Home Link ===== */}
            <p className="text-center text-xs mt-2">
              <Link to="/" className="link link-hover text-secondary">
                Back to Home
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Register;
