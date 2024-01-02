import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className=" text-center text-lg-start bg-white text-muted  ">
        <section className="container-fluid  section-footer ">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Support
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    FAQ
                  </a>
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Services
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blogs
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Subscribe Us</h6>
                <p className="form-title">
                  Subscribe to get latest news article and resources
                </p>
                <form class="form-inline">
                  <div class="form-group mx-sm-3 mb-2">
                    <input
                      type="text"
                      className="form-manage"
                      placeholder="Subscribe Now ..."
                    />
                    <button className="subscribe-btn mt-3 me-1">
                      subscribe
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <p className="footer-logo mb-4">
                  Fresh
                  <span className="color-kit">ers</span>
                </p>
                <p className="footer-email">support@Freshers.com</p>
                <p className="footer-number"> +23-456-6588</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid border-top">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="text-center p-4 copyright-line">
                Copyright © 2020, Designed & Developed by
                <a className="text-reset" href="">
                  {" "}
                  Themefisher
                </a>
              </div>
              <div className="mt-4 footer-icon">
                <a>
                  <FaFacebookF className="me-2" />
                  facebook
                </a>
                <a>
                  <FaTwitter className="me-2" />
                  Twitter
                </a>
                <a>
                  <FaPinterestP className="me-2" />
                  pinterest
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
