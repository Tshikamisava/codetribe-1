import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faSlack, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className="social-links">
      <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
      <a href=""><FontAwesomeIcon icon={faSlack} /></a>
      <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
      <a href=""><FontAwesomeIcon icon={faGithub} /></a>
      <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
  );
}

export default Header;