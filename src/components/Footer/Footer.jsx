import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <Link className="logo-container" to="/">
        <Logo className="footer__logo" />
      </Link>
    </div>
    <div className="row">
      <div>
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">Company</li>
            <li className="footer__item">Contact us</li>
            <li className="footer__item">Carrers</li>
            <li className="footer__item">Policy</li>
            <li className="footer__item">Terms</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="footer__copyright">
          Build by V with ❤. Project Ecommerce ReactJS.
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
