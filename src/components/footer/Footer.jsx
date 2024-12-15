import React from "react";
import "../footer/Footer.css";

function Footer() {
  return (
    <div>
      <div>
        <div class="footer-title-wrapper">
          <div class="footer-title-container">
            <span class="line"></span>
            <span class="title">FrontLine where design mets the creativity.</span>
            <span class="line"></span>
          </div>
        </div>
        <footer class="footer">
          <div class="footer-content">
            <aside class="footer-brand">
              {/* <img class="footer-icon" src={icon}></img> */}
              <h1 class="footer-heading">interior-design</h1>
            </aside>
            {/* <nav>
            <h6 class="footer-heading">Services</h6>
            <a class="footer-link">Branding</a>
            <a class="footer-link">Design</a>
            <a class="footer-link">Marketing</a>
            <a class="footer-link">Advertisement</a>
          </nav> */}
            <nav>
              <h6 class="footer-heading">Company</h6>
              <a class="footer-link">About us</a>
              <a class="footer-link">Contact</a>
              {/* <a class="footer-link">Jobs</a>
            <a class="footer-link">Press kit</a> */}
            </nav>
            <nav>
              <h6 class="footer-heading">Legal</h6>
              <a class="footer-link">Terms of use</a>
              <a class="footer-link">Privacy policy</a>
              <a class="footer-link">Cookie policy</a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
