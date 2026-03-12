"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, FormEvent, memo } from "react";

import {
  FooterLogo,
  SubscribeIcon,
  paymentMethod1,
} from "../utils/images";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState("");


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 500) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
        setEmail("")
      }
    }
    catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <section className="py-5 theme-bg-primary">
        <div className="container">
          <div className="row justify-between items-center">
            <div className="col-12 col-lg-6">
              <div className="d-flex  align-items-center">
                <Image
                  src={SubscribeIcon}
                  alt="airline tickets"
                  width={100}
                  height={100}
                />
                <div className="ms-3">
                  <h4 className="text-26 text-white fw-600">
                    Your Travel Journey Starts Here
                  </h4>
                  <p className="text-white">{`Sign up and we'll send the best deals to you`}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1 align-self-center">
              <form className="input-group subs-form" onSubmit={handleSubscribe}>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-control border-0"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-search"
                  type="submit"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-5 mb-5 mb-lg-0">
              <h5 className="mb-3 fs-6">Contact Us</h5>
              <div className="flex-grow-1">
                Location <br />
                <address className="text-muted">
                  Principal Place of Business 1309 Coffeen Avenue STE 19309 Sheridan Wyoming 82801 USA.
                </address>
              </div>
              <div className="flex-grow-1">
                Customer Care
                <br />
                <Link
                  className="fs-5 theme-text-primary"
                  href={"tel:1888 5087143"}
                >
                +1 6176694209
                </Link>
              </div>
              <div className="flex-grow-1 mt-3">
                Need live support?
                <br />
                <Link
                  href={"mail:info@Reservationkart.com"}
                  className="fs-5 theme-text-primary"
                >
                  info@travelocare.com
                </Link>
              </div>
              <div className="d-flex social  mt-2">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61559553997456"
                  className="fs-4 pe-3"
                >
                  <i className="bi bi-facebook"></i>
                </Link>
                {/*} <Link href="#" className="fs-4 pe-3">
                  <i className="bi bi-twitter"></i>
                </Link>  */}
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/reservationkart-com/"
                  className="fs-4 pe-3"
                >
                  <i className="bi bi-linkedin"></i>
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/reservationkart.com_/"
                  className="fs-4 pe-3"
                >
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link href="#" className="fs-4">
                  <i className="bi bi-whatsapp"></i>
                </Link>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-2 mb-5 mb-lg-0">
              <h5 className="mb-3 fs-6">Support</h5>
              <div className="mt-3">
                <ul className="fl-menu">
                  <li className="nav-item ">
                    <Link href="/contact" className="fs-8 text-dark">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/privacy-policy" className="fs-8 text-dark">Privacy Policy</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/terms-conditions"  className="fs-8 text-dark">Terms and Conditions</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/refund-cancellation"  className="fs-8 text-dark">
                      Refund and Cancellation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-5 mb-5 mb-lg-0">
              <Image
                src={FooterLogo}
                alt={"reservationKart"}
                className="w-100 h-auto"
              />
              <Image
                src={paymentMethod1}
                className="w-100 h-auto mt-4"
                alt="plane tickets"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 mt-lg-5">
              <p className="pt-2 mb-0 small theme-text-accent-one">
                &copy; 2026 All Travelocare.com rights reserved.
              </p>
            </div>
            <div className="col-12 col-lg-6 mt-5">
              <ul className="footer-link d-flex flex-row flex-wrap justify-content-lg-center align-items-center">
                {/* <Image src={paymentMethod} className='w-100 h-auto' alt='flight-booking' /> */}
              </ul>
            </div>
          </div>
        </div>
        <button
          className={`scrollToTop ${isActive ? "active" : ""}`}
          onClick={scrollToTop}
        >
          <i className="bi bi-chevron-double-up"></i>
        </button>
      </footer>
    </>
  );
};

export default memo(Footer);
