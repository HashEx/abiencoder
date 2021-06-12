import React from 'react';

import Logo from '../Logo';
import Menu from '../Menu';

import './Header.css';

const Header: React.FC = () => {
    return (
      <div className="container">
        <header className="header" >
          <div className="header__logo">
            <a href="https://hashex.org/" target="_blank" rel="noreferrer nofollower">
              <Logo />
            </a>
          </div>
          <Menu />
        </header>
      </div>
    )
}

export default Header;