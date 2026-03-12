"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, memo } from "react";
import { Logo2, PCCiIcon } from "../utils/images";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const path = usePathname();

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header fixed-top ${scrollPosition > 0 ? "bg-white" : "bg-transparent"
        }`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 py-lg-0 px-0">
       <Link href="/" className="navbar-brand py-2">
  <Image
    src={Logo2}
    alt="Travelocare flight booking"
    height={70}
    width={180}
    className="me-2"
  />


            {/* <Image
              src={FooterLogo}
              alt="airoplan ticket booking"
              className="w-full"
              height={35}
            /> */}
          </Link>
          <button
            className="navbar-toggler px-1 btn rounded-0"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!collapsed ? "true" : "false"}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto page-menu" id="nav"></ul>
            <ul className="navbar-nav page-menu mb-3 mb-lg-0">
              <li className="nav-item ">
                <Link className={`nav-link pe-4 ps-0 ps-lg-5 ${scrollPosition > 0 ? 'text-dark' : 'text-white'}`} href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`${scrollPosition > 0 ? 'text-dark' : 'text-white'} nav-link pe-4`} href="/#">
                  Flights
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`${scrollPosition > 0 ? 'text-dark' : 'text-white'} nav-link pe-4`} href="/about-us">
                  About
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className={` ${scrollPosition > 0 ? 'text-dark' : 'text-white' } nav-link pe-4`} href="/contact">
                  Contact
                </Link>
              </li>
              <Link
                href="tel:+16176694209"
                className="d-flex flex-row justify-content-center align-items-center gap-2 fw-bold nav-item pe-4 text-yellow"
              >
                <i className="bi bi-telephone"></i>
                <div>16176694209</div>
              </Link>
              <div className="img-fluid d-flex justify-content-center align-items-center">
                {/* <Link href="/compliance_certificate.pdf" target="_blank">
                  <Image src={PCCiIcon} alt="PCI DSS Certified" height={50} />
                </Link> */}
              </div>
              {/* <Dropdown title={<><i className="bi bi-globe me-2"></i>Eng</>} items={languageItems} />
              <Dropdown title="INR" items={currencyItems} />
              <li className="nav-item">
                <Link href="#" className="nav-link mein-link d-inline-block position-relative">
                  <i className="bi bi-bell"></i>
                  <span className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </Link>
              </li>
              <Dropdown title={<i className="bi bi-person"></i>} items={userItems} /> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
