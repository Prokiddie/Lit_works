import React from "react";

const SignUp = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create an Account</h2>
      <form className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <input
            type="gender"
            className="form-control"
          

            required
          />
        </div>

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
            placeholder="Create a password"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" className="form-control" required />
        </div>

        <div className="mb-3">
          <label className="form-label">National ID Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your national ID number"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter your full address"
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Photo of Your Home</label>
          <input type="file" className="form-control" accept="image/*" required />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
        <a href="/Login" className="text-primary text-decoration none"> already have account</a>
      </form>
    </div>
  );
};

export default SignUp;
