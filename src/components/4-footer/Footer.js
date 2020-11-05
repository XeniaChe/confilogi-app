/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import * as classes from './footer.module.scss';
import Button from '../UI/Button';
import bookMarkLogo from '../../images/logo-bookmark.svg';
import LogoFacebook from '../../images/icon-facebook.svg';
import LogoTwitter from '../../images/icon-twitter.svg';

const NavItem = (props) => {
  return <li className={classes.NavItem}>{props.children}</li>;
};

const FooterConnect = () => {
  return (
    <div className={classes.FooterConnect}>
      <div className={classes.ContactBox}>
        <p className={classes.JoinedCount}> 35.000+ alredy joined</p>
        <h1>Stay up-to-date with what we're doing</h1>
        <form className={classes.contactForm}>
          <input
            name='email'
            type='email'
            placeholder='Enter your email address'
          />
          <Button type='red' funcType='submit'>
            Contact Us
          </Button>
        </form>
      </div>
    </div>
  );
};

const FooterInfo = () => {
  return (
    <div className={classes.FooterInfo}>
      <dv className={classes.InfoBox}>
        <div className={classes.Bookmark}>
          <img src={bookMarkLogo} alt='' className={classes.LogoBookmark} />
        </div>
        <nav className={classes.Navigation}>
          <ul>
            <NavItem>FEATURES</NavItem>
            <NavItem>PRICING</NavItem>
            <NavItem>CONTACT</NavItem>
          </ul>
        </nav>
        <div>
          <img src={LogoFacebook} alt='' />
          <img src={LogoTwitter} alt='' />
        </div>
      </dv>
    </div>
  );
};

export { FooterConnect, FooterInfo };
