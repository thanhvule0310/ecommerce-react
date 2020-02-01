import React from 'react';

import './Footer.scss';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <Logo className="footer__logo" />
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
