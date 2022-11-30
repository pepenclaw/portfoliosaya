import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ST
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <BsFacebook />
        </a>
        <a href="https://instagram.com" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://twwitter.com" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy, STeven. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
