/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import * as classes from './header.module.scss';
import bookMarkLogo from '../../images/logo-bookmark.svg';
import ManagerImage from '../../images/illustration-features-tab-1.svg';
import Button from '../UI/Button';

const NavItem = (props) => {
  return <li className={classes.NavItem}>{props.children}</li>;
};

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Bookmark}>
        <img src={bookMarkLogo} />
      </div>
      <nav className={classes.Navigation}>
        <ul>
          <NavItem>FEATURES</NavItem>
          <NavItem>PRICING</NavItem>
          <NavItem>CONTACT</NavItem>
        </ul>
      </nav>
      <Button type='red'>LOGIN</Button>
    </div>
  );
};

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

export { Header, BookmarkManager };