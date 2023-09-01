import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div class="bottom-container">
        <a
          class="footer-link"
          href="https://www.linkedin.com/in/pulak-mahata-769a32249/"
        >
          LinkedIn
        </a>
        {/* <a class="footer-link" href="https://twitter.com/mhtpulak">
          Twitter
        </a> */}
        <a class="footer-link" href="https://github.com/pulak-mahata">
          GitHub
        </a>
        <a
          class="footer-link"
          href="https://pulak-mahata.github.io/Pulak-Portfolio/"
        >
          Website
        </a>
        <p class="copyright">© Pulak Mahata 2023</p>
      </div>
    </div>
  );
};

export default Footer;