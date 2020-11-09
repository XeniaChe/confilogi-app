/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import * as classes from './footer.module.scss';

import { ReactComponent as LogoFacebook } from '../../images/icon-facebook.svg';
import { ReactComponent as LogoTwitter } from '../../images/icon-twitter.svg';
import { ReactComponent as BookMarkLogo } from '../../images/logo-bookmark.svg';

const NavItem = (props) => {
  return <li className={classes.NavItem}>{props.children}</li>;
};

const FooterInfo = () => {
  return (
    <div className={classes.FooterInfo}>
      <div className={classes.InfoBox}>
        <div className={classes.Bookmark}>
          <BookMarkLogo className={classes.LogoBookmark} />
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
          <LogoFacebook />
          <LogoTwitter />
          {/* <div className={classes.LogoFacebook} />
          <div className={classes.LogoTwitter} /> */}
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
