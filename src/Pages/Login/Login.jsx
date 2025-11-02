import React, { useContext } from "react";
import Container from "../../Components/Container";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { LoginUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault;
    const email = e.target.email.value;
    const password = e.target.password.value;

    LoginUser(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("successfully Login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <main className="flex py-10 lg:py-0 justify-center items-center min-h-screen bg-base-200 px-4">
      <Container>
        <div className="card bg-base-100 w-full max-w-md shadow-xl mx-auto">
          <div className="card-body p-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-primary">
              Welcome Back
            </h2>

            <form onSubmit={handleLogin}>
              <fieldset className="space-y-3">
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

                <div className="flex justify-between items-center text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox-lg rounded-box checkbox-primary"
                    />
                    <span>Remember me</span>
                  </label>

                  <Link
                    to="/account/forgot-password"
                    className="link link-hover text-primary">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full btn-sm mt-2">
                  Login
                </button>
              </fieldset>
            </form>

            <div className="divider text-xs my-4">OR</div>

            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border border-gray-300 w-full gap-2 hover:bg-gray-50 text-sm">
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            <p className="text-center text-xs mt-3">
              Don’t have an account?{" "}
              <Link
                to="/account/register"
                className="link link-hover text-primary">
                Register here
              </Link>
            </p>

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

export default Login;
