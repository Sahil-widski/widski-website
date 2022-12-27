/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const Intro2 = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="slider-st valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="cont md-mb50">
              <div className="sub-title mb-5">
                <h6>Mobile App Development Company</h6>
              </div>
              <h1 className="mb-10 fw-600">You Think, We Build</h1>
              <p>
             We create a silky-smooth mobile app according to the requirements of our clients businesses to assist them flourish..
              </p>
           
              <Link
              href={`https://api.whatsapp.com/send?phone=917977038084&text=I visited your website and would like to develop a mobile application for my company.`}
              >
                <a className="butn bord curve mt-30">
                  <span>Get Quote</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
            {/* <video autoPlay loop style={{ width: '500px', height: '500px' }}>
        <source src="/" />
      </video> */}
              <img src="/img/slid/001.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro2