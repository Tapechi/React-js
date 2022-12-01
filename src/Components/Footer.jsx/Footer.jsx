import React from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <h3>Footer React primera entrega</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, molestiae!</p>
      <ul className="socials">
        <li>
          <a href="">
            <i>
              {' '}
              <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
            </i>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              {' '}
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </i>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              {' '}
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </i>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              {' '}
              <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
            </i>
          </a>
        </li>
      </ul>
      <div className="footer-bottom">
        <p>
          Copyright @2022 <span>Coderhouse</span>
        </p>
      </div>
    </div>
  );
};
export default Footer;
