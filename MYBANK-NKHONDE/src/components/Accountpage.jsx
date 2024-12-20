import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AccountPage() {
  const [progress, setProgress] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [file, setFile] = useState(null);

  const handleInputChange = () => {
    const totalFields = 4; // Total number of input fields
    const filledFields = document.querySelectorAll("input:valid").length;
    setProgress((filledFields / totalFields) * 100);
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(URL.createObjectURL(uploadedFile));
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="hero bg-gradient-to-r from-green-400 to-orange-500 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="card p-4 shadow-lg bg-light">
          <h1 className="text-center text-dark text-4xl font-bold mb-4">Create Your Account</h1>

          {/* Progress Bar */}
          <div className="mb-4">
            <label>Completion Progress</label>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                style={{ width: `${progress}%` }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {Math.round(progress)}%
              </div>
            </div>
          </div>

          <form onChange={handleInputChange}>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className="form-control"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* File Upload */}
            <div className="mb-3">
              <label className="form-label">Upload Profile Picture</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleFileUpload}
                required
              />
              {file && (
                <div className="mt-3 text-center">
                  <img
                    src={file}
                    alt="Profile Preview"
                    className="img-thumbnail"
                    style={{ maxWidth: "150px" }}
                  />
                </div>
              )}
            </div>

            {/* Address */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Enter your residential address"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100 mt-4"
              data-bs-toggle="modal"
              data-bs-target="#successModal"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <div
        className="modal fade"
        id="successModal"
        tabIndex="-1"
        aria-labelledby="successModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="successModalLabel">
                Account Created
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Your account has been successfully created. Welcome aboard!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountPage;
