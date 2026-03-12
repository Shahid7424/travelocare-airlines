import React from "react";
import Image from "next/image";
import { Hero } from "../component";
import {AboutusImg1,AboutusImg2,EasyImg,ExcImg,LowestImg,Support,} from "../utils/images";

const About = () => {
  return (
    <>
    <Hero title={'About us'} description={'Your dream travel just a phone call away!'} />
      <section className="pt-5 pt-lg-5 step-container">
        <div className="pb-md-4 mt-4 container">
          <div className="d-flex flex-column flex-md-row mb-0 w-100 mx-auto container-xl gap-4">
            <div className="w-100 w-md-50 max-h-330 p-0 rounded overflow-hidden">
              <Image
                src={AboutusImg1}
                alt="about image"
                title="About"
                layout="responsive"
                width={250}
                height={160}
                className="h-100 w-100 object-cover"
              />
            </div>
            <div className="p-3 d-flex align-items-end align-items-xl-center justify-content-center flex-column w-100 w-md-50">
              <div>
                <div className="row">
                  <div className="col-12 text-center mb-3">
                    <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                      Welcome to Travelocare.com!
                    </h4>
                  </div>
                </div>
                <p className="theme-text-accent-one p-0 font-normal text-base max-w-440 text-center text-md-start">
                  Welcome to Travelocare.com, your ultimate destination for
                  effortless and affordable travel solutions. As a leading cheap
                  flight agency, we specialize in providing budget friendly
                  options for all your travel needs, from airplane reservations
                  to comprehensive travel packages. Book flights online
                  effortlessly with our user-friendly platform, designed to help
                  you find and secure cheap flight tickets with ease. Whether
                  you are searching for airline tickets for a domestic trip or
                  cheap international flights, we have you covered. Our
                  extensive network ensures you get the best deals on plane
                  tickets, making travel accessible and affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*sec 2 who we are  */}
      <section className="step-container">
        <div className="py-4 container">
          <div className="d-flex flex-column flex-md-row mb-0 w-100 container-xl mx-auto gap-4">
            <div className="p-3 d-flex align-items-end align-items-xl-center justify-content-center flex-column w-100 w-md-50">
              <div>
                <div className="row">
                  <div className="col-12 text-center mb-3">
                    <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                      Looking for more than just flights !
                    </h4>
                  </div>
                </div>
                <p className="theme-text-accent-one pb-0 pb-md-3 font-weight-normal text-base max-w-440 text-start text-md-left">
                  We offer a complete traveler agency experience with services
                  that include cab bookings and hotel reservations. Plan your
                  entire journey in one place, saving you time and money.
                  Explore multi-city flights for those adventurous trips and
                  discover the convenience of our seamless booking process. Our
                  commitment to providing cheap airline flights means you can
                  focus on enjoying your travel experiences without worrying
                  about high costs.
                </p>
              </div>
            </div>
            <div className="w-100 w-md-50 mh-350  p-0 rounded overflow-hidden">
              <Image
                src={AboutusImg2}
                alt="who we are"
                title="About Us"
                layout="responsive"
                width={250}
                height={160}
                className="h-100 w-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section id='whyBookWithUs'>
        <div className="container my-4">
          <div className="text-center mb-4">
            <h4 className="fs-2 fw-bold theme-text-secondary">Why Book With Us?</h4>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-2">
                  <Image
                    src={EasyImg}
                    className="w-50 mb-3"
                    alt="easy booking"
                  />
                  <h5 className="card-title">Easy Booking</h5>
                  <p className="card-text">We offer easy and convenient flight bookings with attractive offers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-4">
                  <Image
                    src={LowestImg}
                    className="w-50 mb-3"
                    alt="best price"
                  />
                  <h5 className="card-title">Lowest Price</h5>
                  <p className="card-test"> We ensure low rates on hotel reservation, holiday packages and on flight tickets.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-4">
                  <Image
                    src={ExcImg}
                    className="w-50 mb-3"
                    alt="Existing Deal"
                  />
                  <h5 className="card-title">Exciting Deals</h5>
                  <p className="card-text">Enjoy exciting deals on flights, hotels, buses, car rental and tour packages.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-4">
                  <Image
                    src={Support}
                    className="w-50 mb-3"
                    alt="24/7 Support"
                  />
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text">Get assistance 24/7 on any kind of travel related query. We are happy to assist you. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
    </>
  );
};

export default About;
