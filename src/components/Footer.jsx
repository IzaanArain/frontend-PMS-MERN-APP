import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import {ImMail4} from 'react-icons/im'
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <div className="myFooter">
       <div className="footer-logo">
      <a href="https://github.com/IzaanArain/frontend-PMS-MERN-APP">
          <AiOutlineGithub/>
        </a>
        <a href="https://www.linkedin.com/in/izaan-saquib/">
          <BsLinkedin/>
        </a>
       </div>
      </div>
    </>
  );
};

export default Footer;
