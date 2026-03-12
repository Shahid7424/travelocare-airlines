 'use client'
 import React, { FormEvent, memo, useEffect, useState } from "react";

import Image from "next/image";
import NewsImage from "../utils/images/icons/email-Img.png";

const NewsLetter: React.FC = () => {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 50000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (result?.status) {
        setShow(false)
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="newsletter subscription"
        aria-hidden={!show}
        style={{ display: show ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header justify-content-end border-0 p-0">
              <button
                type="button"
                className="closeButton mx-2"
                onClick={() => setShow(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center d-flex flex-column align-items-center modal-body-custom">
              <Image
                src={NewsImage}
                alt="Newsletter"
                width={200}
                height={200}
              />
              <span className="d-block mt-3">
                Subscribe to our newsletter in order not to miss new arrivals
                <br />
                promotions and discounts of our store
              </span>
              <div className="mx-5">
                <form className="input-group mb-3 mt-4" onSubmit={handleSubscribe}>
                  <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="travelocare"
                  />
                  <button
                    style={{ background: '#ec7e1b' }}
                    className="btn text-white"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(NewsLetter); 
