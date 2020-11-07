/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import * as classes from './footer.module.scss';
import bookMarkLogo from '../../images/logo-bookmark.svg';
// import LogoFacebook from '../../images/icon-facebook.svg';
// import LogoTwitter from '../../images/icon-twitter.svg';

const NavItem = (props) => {
  return <li className={classes.NavItem}>{props.children}</li>;
};

const FooterInfo = () => {
  return (
    <div className={classes.FooterInfo}>
      <div className={classes.InfoBox}>
        <div className={classes.Bookmark}>
          <img src={bookMarkLogo} alt='' className={classes.LogoBookmark} />
          {/* <div className={classes.LogoBookmark} /> */}
        </div>
        <nav className={classes.Navigation}>
          <ul>
            <NavItem>FEATURES</NavItem>
            <NavItem>PRICING</NavItem>
            <NavItem>CONTACT</NavItem>
          </ul>
        </nav>
        <div className={classes.FacebookTwitter}>
          {/* <img src={LogoFacebook} alt='' /> */}
          {/* <img src={LogoTwitter} alt='' /> */}
          <div className={classes.LogoFacebook} />
          <div className={classes.LogoTwitter} />
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
