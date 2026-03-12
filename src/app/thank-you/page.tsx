'use client'
import React, { useState } from "react";
import { CallModal } from "../component";

const ThankYou = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-4">
        <div className="mt-5">
          <div className="my-4 text-center theme-text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              width="75"
              height="75"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
          </div>

          <div className="text-center">
            <h1 className="fs-2 fw-bold theme-text-secondary mb-0">Thank you for choosing Travelocare.com</h1>
            <p className="mb-0 theme-text-accent-one">
              One of our travel experts will be reaching out to you shortly, offering the best deals tailored to your specific requirements.
            </p>
            <button
              onClick={handleToggle}
              type="submit"
              className="btn btn-search mt-4 mb-6">
              <span className="fw-bold"> CALL US </span>
            </button>
          </div>
        </div>
      </div>
      <CallModal show={show} handleClose={handleToggle} setShow={setShow}  ispath={false}/>
    </>
  );
};

export default ThankYou;
