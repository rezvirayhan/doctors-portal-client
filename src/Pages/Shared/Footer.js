import React from "react";
import logo from '../../assets/footer_logo.png'
const Footer = () => {
  return (
    <footer style={{background:'#0b1120', color:'white'}} className="p-10 text-neutral-content mb-0 mt-0">
      <div className="footer">
        <div>
          <img src={logo} alt="" />
          <p>
            MediCare Industries Ltd.
            <br />
            Providing Reliable Tech Since 2022
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover text-base">Branding</a>
          <a className="link link-hover text-base">Design</a>
          <a className="link link-hover text-base">Marketing</a>
          <a className="link link-hover text-base">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover text-base">About us</a>
          <a className="link link-hover text-base">Contact</a>
          <a className="link link-hover text-base">Jobs</a>
          <a className="link link-hover text-base">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover text-base">Terms of use</a>
          <a className="link link-hover text-base">Privacy policy</a>
          <a className="link link-hover text-base">Cookie policy</a>
        </div>
      </div>
      <div>
        <div className="mt-5 text-center">
          <p>
            Copyright © 2022 - All right reserved by{" "}
            <a
              style={{ color: "white" }}
              href="https://www.facebook.com/devrezvirayhan"
            >
              Rezvi Rayahn
            </a>{" "}
          </p>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
