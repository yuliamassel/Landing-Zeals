import React from "react";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="pb-5">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-3">
              <h4 className="pb-3 mt-5">Contact</h4>
              <div className="txt-footer">
                <a href="https://wa.me/+628118189895">
                  <div className="media">
                    <FontAwesomeIcon icon={faPhone} fixedWidth /> +62811-8189-895
                  </div>
                </a>
                <a href="">
                  <div className="media">
                    <FontAwesomeIcon icon={faEnvelope} fixedWidth/> hello@zeals.asia
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h4 className="pb-3 mt-5">Resources</h4>
              <div className="txt-footer">
                <a href="https://app.zeals.asia/dashboard">API Integration</a>
                <a href="https://app.zeals.asia/referrals">Referral Programs</a>
                <a href="https://app.zeals.asia/affiliators">Affiliators</a>
                <a href="https://app.zeals.asia/brands">Brand Platfrom</a>
                <a href="https://app.zeals.asia/tutorial">Tutorials</a>
                <a href="https://blog.zeals.asia">Blog</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h4 className="pb-3 mt-5">Privacy</h4>
              <div className="txt-footer">
                <a href="https://app.zeals.asia/services">Terms & Services</a>
                <a href="https://app.zeals.asia/policy">Policy Privacy</a>
                <a href="https://app.zeals.asia/faq">FAQ</a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-3">
              <h4 className="pb-3 mt-5">Partnership</h4>
              <div className="txt-footer">
                <a href="https://academy.zeals.asia">Zeals Academy</a>
                <a href="https://campus.academy.zeals.asia/dashboard">Zeals Campus</a>
                <a href="https://app.zeals.asia/partnership">Partnership Programs</a>
              </div>
            </div>
          </div>
          <div className="social-media mb-5 mt-5">
            <div className="image d-flex flex-row mb-3">
              <a href="https://www.facebook.com/ZealsPage">
                <FontAwesomeIcon icon={faFacebook} fixedWidth />
              </a>
              <a href="https://mobile.twitter.com/Zeals_Asia">
                <FontAwesomeIcon icon={faTwitter} fixedWidth />
              </a>
              <a href="https://www.linkedin.com/company/zeals-asia/">
                <FontAwesomeIcon icon={faLinkedin} fixedWidth />
              </a>
              <a href="https://www.instagram.com/zealsasia/">
                <FontAwesomeIcon icon={faInstagram} fixedWidth />
              </a>
            </div>
            <a
              href=""
              className="link"
            >
              2022 zealsasia. All Rights Reserved
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Footer;
