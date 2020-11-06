/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import * as classes from './footer.module.scss';
import Button from '../UI/Button';
import bookMarkLogo from '../../images/logo-bookmark.svg';
import LogoFacebook from '../../images/icon-facebook.svg';
import LogoTwitter from '../../images/icon-twitter.svg';

const FooterConnect = () => {
  const [counter, setCount] = useState(35000);

  // eslint-disable-next-line no-unused-vars
  const seToZero = () => {
    if (counter > 0) {
      setTimeout(() => {
        setCount(counter - 1750);
      }, 1000);
    }
    console.log(`counter${counter}`);
  };

  useEffect(() => {
    seToZero();
  }, [counter]);

  const stringCount = counter.toString();
  console.log(stringCount.length);

  return (
    <div className={classes.FooterConnect}>
      <div className={classes.ContactBox}>
        <p className={classes.JoinedCount}>{stringCount}+ alredy joined</p>
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

/// ///////////////////////////////////////////////////////////////////////////

const NavItem = (props) => {
  return <li className={classes.NavItem}>{props.children}</li>;
};

const FooterInfo = () => {
  return (
    <div className={classes.FooterInfo}>
      <div className={classes.InfoBox}>
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
        <div className={classes.FacebookTwitter}>
          <img src={LogoFacebook} alt='' />
          <img src={LogoTwitter} alt='' />
        </div>
      </div>
    </div>
  );
};

export { FooterConnect, FooterInfo };
