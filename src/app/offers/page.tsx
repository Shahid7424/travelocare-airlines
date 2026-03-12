"use client";
import React, { useState } from "react";
import Image from "next/image";
import { LandingBg, LandingImg, TestimonialImage1, TestimonialImage2, TestimonialImage3, LandingServices, experienceBg, OffersBg } from "../utils/images";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { faqData, landingcontactInitialValues } from "../utils/data";
import { LandingcontactValidationSchema } from "../utils/schema";
import { CallModal, Counter } from "../component";

const Offers = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [show, setShow] = useState(false)

  const handleToggle = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const router = useRouter();

  const formik = useFormik({
    initialValues: landingcontactInitialValues,
    validationSchema: LandingcontactValidationSchema,
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
    <div className="offers">
      {/*--------- banner start---------- */}
      <div
        className="offers-banner "
        style={{ backgroundImage: `url(${LandingBg.src})` }}
      >
        <div className="section__container">
          <div className="row d-flex align-items-center mt-4 py-4">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="bg-white border rounded rounded-3 shadow-sm overflow-hidden  p-4 p-xl-5">
                <h1>Travel Smart, Travel Far</h1>
                <p>
                  {" "}
                  From booking to boarding, Travelocare.com is here to make
                  your journey effortless.
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
                        <span className="text-danger error">{errors.name}</span>
                      )}
                    </div>
                    <div className="col-12 col-md-6 mt-2">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
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
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-search mt-4 mb-6"
                          disabled={isSubmitting}
                        >
                          <span className="fw-bold"> Submit</span>
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
      {/*--------- banners end ----------*/}

      {/*----why chioose us ---------- */}
      <section className="section__container">
        <p className="h5 text-primary text-center fw-bold">Why Choose Us</p>
        <h2 className="section__header text-center">Plan your travel with confidence</h2>
        <p className="text-center lead mb-2">
          Find help with your bookings and travel plans, and see what to expect
          along your journey.
        </p>
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="mb-2">
              <span className="number number-blue">01</span>
              <h4>24/7 Customer Support</h4>
              <p>
                Our friendly agents are available around the clock to assist you
                with all your booking needs.
              </p>
            </div>
            <div className="mb-2">
              <span className="number number-orange">02</span>
              <h4>Last-Minute Flight Deals</h4>
              <p>
                Need to travel on short notice? We have you covered with
                unbeatable last-minute deals.
              </p>
            </div>
            <div className="mb-2">
              <span className="number number-light-orange">03</span>
              <h4>Group Booking</h4>
              <p>Special rates and arrangements for group travel.</p>
            </div>
            <div className="">
              <span className="number bg-success">04</span>
              <h4>Business Travel</h4>
              <p>Tailored services for business travelers, ensuring a seamless and productive journey.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-group">
              <Image
                src={LandingImg}
                className="img-fluid rounded-image"
                alt="Plan 1"
              />
            </div>
          </div>
        </div>
      </section>

      {/*-------- steps ------------  */}
      <section className="memories">
        <div className="section__container my-2">
          <div className="section__header text-center">
            <h2>Travel to make memories all around the world</h2>
          </div>
          <div className="row g-5 mt-4">
            <div className="col-md-4">
              <div className="card-custom">
                <span
                  className="icon-circle"
                  style={{ backgroundColor: "#3d5cb8" }}
                >
                  <i className="bi bi-telephone-inbound"></i>
                </span>
                <h4>Call Us</h4>
                <p className="lh-base text-muted">
                  Dial our toll-free Number[18885087143].
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-custom">
                <span className="icon-circle bg-primary">
                  <i className="bi bi-headset"></i>

                </span>
                <h4>Speak With a Agent</h4>
                <p className="lh-base text-muted">
                  Our professional staff will help you find the best flights options.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-custom">
                <span className="icon-circle bg-success">
                  <i className="bi bi-ticket-detailed"></i>
                </span>
                <h4>Book Your Ticket </h4>
                <p className="lh-base text-muted">
                  Complete your booking over the phone and receive your confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section className="services">
        <div className="section__container my-2">
          <div className="row">
            <div className="col-md-6">
              <Image src={LandingServices} className="img-fluid" alt="travelocare.com" />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="row">
                <h2 className="section__header">Connecting You to the World</h2>
                <p className="mb-4">Our extensive network and superior services connect you to destinations worldwide.
                  Trust us to handle your booking with precision and care, so you can embark on your adventures with peace of mind.
                </p>
                <div className="col-md-6 mb-2">
                  <h4>Domestic and International Flights</h4>
                  <p>Whether you&apos;re traveling within the US or abroad, we have you covered.</p>
                </div>
                <div className="col-md-6 mb-2">
                  <h4>Flight Changes and Cancellations</h4>
                  <p>Need to change your plans? We offer flexible options.</p>
                </div>
                <div className="col-md-6 mb-2">
                  <h4>Travel Insurance</h4>
                  <p>Protect your trip with our comprehensive travel insurance plans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------faq--------- */}
      <section className="faq py-4">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="text-center section__header">Frequently Asked Questions</h2>
              <div className="accordion" id="faqAccordion">
                {faqData.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${activeIndex !== index ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded={activeIndex === index}
                        aria-controls={`collapse${index}`}
                        onClick={() => handleToggle(index)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- wonderful experience --> */}
      <section className="experience">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="wrap"
                style={{ backgroundImage: `url(${OffersBg.src})` }}
              >
                <div className="row">
                  <div className="col-12 position-relative align-self-center">
                    <h4 className="text-white mb-0 fw-bold text-center">Don&apos;t Wait, Time Is Running Out!</h4>
                    <h5 className="display-4 theme-text-white mb-0 fw-bold text-center">
                      Grab this limited-time offer before it disappears!
                    </h5>
                    <div className="group custom-button">
                      <div className="d-flex align-items-center">
                        <button
                          type="submit"
                          className="btn btn-search mt-4 mb-6 me-2 px-4"
                          onClick={()=> setShow(true)}
                        >
                          <span className="fw-bold">  &nbsp; &nbsp; Grab Now &nbsp; &nbsp;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Counter />
        </div>
      </section>

      {/* Testimoial  */}
      <section className="bg-light py-5 py-xl-8">
        <div className="section__container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="section__header text-center">Testimonial</h2>
              <p className="mb-4 text-center">Effortless Booking, Unforgettable Journeys.</p>
              <hr className="w-50 mx-auto mb-2 mb-xl-15 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-4 gy-md-0 gx-xxl-5">
            <div className="col-12 col-md-4">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <Image src={TestimonialImage1} className="img-fluid rounded rounded-circle" alt="testimonial1" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <figcaption>
                      <div className="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                      <blockquote className="bsb-blockquote-icon mb-4">Booking through ReservationKart.com was a breeze! The agents were so helpful and got me a great deal on my flight.</blockquote>
                      <h4 className="mb-2">Sarah J</h4>
                      <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <Image src={TestimonialImage2} className="img-fluid rounded rounded-circle" alt="testimonial1"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <figcaption>
                      <div className="bsb-ratings text-warning mb-3" data-bsb-star="4" data-bsb-star-off="1"></div>
                      <blockquote className="bsb-blockquote-icon mb-4">I missed my flight and was panicking. One call to their support line,
                        and they had me rebooked in no time. Fantastic service!</blockquote>
                      <h4 className="mb-2">Mike T</h4>
                      <h5 className="fs-6 text-secondary mb-0">Marketing Specialist</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <Image src={TestimonialImage3} className="img-fluid rounded rounded-circle" alt="testimonial1" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <figcaption>
                      <div className="bsb-ratings text-warning mb-3" data-bsb-star="5" data-bsb-star-off="0"></div>
                      <blockquote className="bsb-blockquote-icon mb-4">Booking my flight was a breeze! The process was smooth and hassle-free, making my travel experience enjoyable from the start.</blockquote>
                      <h4 className="mb-2">Luke Reeves</h4>
                      <h5 className="fs-6 text-secondary mb-0">Sales Manager</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial end  */}

      <CallModal show={show} handleClose={() => setShow(!show)} setShow={setShow} ispath={false} />

    </div>
  );
};

export default Offers;
