import React from 'react';
import { connect } from 'react-redux';
import * as classes from './header.module.scss';

import ManagerImage from '../../images/illustration-features-tab-1.svg';
import { ReactComponent as BookMarkLogo } from '../../images/logo-bookmark.svg';

import Button from '../UI/Button';
import * as actions from '../../store/actionCreator';

const NavItem = ({ children }) => {
  return <li className={classes.NavItem}>{children}</li>;
};

const Header = ({ onShowRwdNavHandler }) => {
  return (
    <div className={classes.Header}>
      <div className={classes.Bookmark}>
        <BookMarkLogo />
      </div>
      <nav className={classes.Navigation}>
        <ul>
          <NavItem>FEATURES</NavItem>
          <NavItem>PRICING</NavItem>
          <NavItem>CONTACT</NavItem>
        </ul>
      </nav>
      <button type='button'>LOGIN</button>
      <div
        className={classes.RwdNavButton}
        onClick={onShowRwdNavHandler}
        onKeyDown={() => {}}
        role='button'
        tabIndex={0}
      >
        <span> &nbsp; </span>
      </div>
    </div>
  );
};

const mapDispathcToProps = (dispatch) => {
  return {
    onShowRwdNavHandler: () => dispatch(actions.onRwdNavOpen()),
  };
};

export default connect(null, mapDispathcToProps)(Header);

/// ///////////////////////////////////////////////////////////////////////////////////////////

const BookmarkManager = () => {
  return (
    <div className={classes.BookmarkManager}>
      <div className={classes.TextSection}>
        <h1>
          {' '}
          A Simple Bookmark
          <br />
          Manager
        </h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free
        </p>
        <div className={classes.ButtonBox}>
          <Button type='blue'>Get it on Chrome</Button>
          <Button type='blue'>Get it on Firefox</Button>
        </div>
      </div>
      <div className={classes.ImageSection}>
        <img src={ManagerImage} />
      </div>
      <div className={classes.ColorShapeSection} />
    </div>
  );
};

export { NavItem, BookmarkManager };
