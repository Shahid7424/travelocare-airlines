"use client";
import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { contactInitialValues } from "../utils/data";
import { contactValidationSchema } from "../utils/schema";
import { Hero } from "../component";

const Contact = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const result = await response.json();

        if (result.status == 201) {
          router.push("/thank-you");
        } else {
          alert("Something wrong! Please try Again!");
        }
        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  const { handleChange, errors, handleSubmit, isSubmitting } = formik;

  return (
    <>
      <Hero
        title="Contact us"
        description="The best way to contact us is to use our contact form below."
      />

      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="row">
                {/* Map Section */}
                <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                  <div className="map-container rounded-lg">
                    {/* Replace with your map component or iframe */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.9044748527463!2d-106.94323151635325!3d44.78275277176496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335f1770937b28d%3A0x38aabd600a7d02ad!2s1309%20Coffeen%20Ave!5e0!3m2!1sen!2sin!4v1773206702176!5m2!1sen!2sin"
                     width="100%"
                      height="475"
                      style={{ border:0 }} 
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                  </div>
                </div>

                {/* Form Section */}
                <div className="col-12 col-lg-6">
                  <div className="bg-white border rounded shadow-sm p-4 p-xl-5">
                    <p className="mb-0 theme-text-accent-one">
                      Please fill out all of the required fields and we will get
                      back to you as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="row gy-4 gy-xl-5">
                        <div className="col-12">
                          <label htmlFor="name" className="form-label">
                            Full Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            onChange={handleChange}
                          />
                          {errors.name && (
                            <span className="text-danger error">
                              {errors.name}
                            </span>
                          )}
                        </div>

                        <div className="col-12 col-md-6 mt-2">
                          <label htmlFor="email" className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">
                              {/* Email icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-envelope"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                              </svg>
                            </span>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              onChange={handleChange}
                            />
                          </div>
                          {errors.email && (
                            <span className="text-danger error">
                              {errors.email}
                            </span>
                          )}
                        </div>

                        <div className="col-12 col-md-6 mt-2">
                          <label htmlFor="phone" className="form-label">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">
                              {/* Phone icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-telephone"
                                viewBox="0 0 16 16"
                              >
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                              </svg>
                            </span>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              name="phone"
                              onChange={handleChange}
                            />
                          </div>
                          {errors.phone && (
                            <span className="text-danger error">
                              {errors.phone}
                            </span>
                          )}
                        </div>

                        <div className="col-12 mt-2">
                          <label htmlFor="message" className="form-label">
                            Message <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            onChange={handleChange}
                          ></textarea>
                          {errors.message && (
                            <span className="text-danger error">
                              {errors.message}
                            </span>
                          )}
                        </div>

                        <div className="col-12 mt-2">
                          <div className="d-grid">
                            <button
                              type="submit"
                              className="btn btn-search mt-4 mb-6"
                              disabled={isSubmitting}
                            >
                              <span className="fw-bold">Submit</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
