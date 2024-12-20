import React from "react";

const Login = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="text-primary">
              Sign up here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
