import React from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <h3>About Us</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
        incidunt odio nam facilis, eligendi Itaque fugiat cupiditate
        consectetur. Aliquid ab deserunt exercitationem, illum molestiae
        dolorem.
      </p>
      <div>
        <FaFacebookF />
        <FaInstagramSquare />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </div>
  );
}

export default Footer;
