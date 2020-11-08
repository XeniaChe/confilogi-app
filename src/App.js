/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.module.scss';
import * as classes from './App.module.scss';
import Header, { BookmarkManager } from './components/1-header/Header';
import {
  FeaturesSection,
  FeaturesTabSection,
} from './components/2-features/Features';
import {
  DownloadSection,
  QuestionsSection,
} from './components/3-main-section/MainSection';
import FooterInfo from './components/4-footer/Footer';
import FooterConnect from './containers/FooterConnect';
import PopUp from './components/5-PopUp/PopUp';
import * as actions from './store/actionCreator';

import bookMarkLogo from './images/logo-bookmark.svg';

const NavItem = (props) => {
  return <li className={classes.NavItem}>{props.children}</li>;
};

function App(props) {
  /*
  useEffect(() => {
    setTimeout(() => {
      props.onSetTimeoutHandler();
    }, 5000);
  }, []);

  */

  let popUp = null;
  if (props.popUpVisibleRedux) {
    popUp = <PopUp />;
  }

  let RwdNav = null;
  if (props.rwdNavVisibleRedux) {
    RwdNav = (
      <div className={classes.RwdNavBox}>
        <div className={classes.RWDBookmark}>
          <img src={bookMarkLogo} />
          <div
            className={classes.RwdNavCloseButton}
            onClick={props.onCloseRwdNavHandler}
          />
        </div>
        <nav className={classes.NavigationRWD}>
          <ul className={classes.NavRwdList}>
            <NavItem>FEATURES</NavItem>
            <NavItem>PRICING</NavItem>
            <NavItem>CONTACT</NavItem>
          </ul>
        </nav>
        <button type='button' className={classes.RwdNavButtonLogIn}>
          LOGIN
        </button>
        <div className={classes.RwgFacebookTwitter}>
          <div className={classes.LogoFacebook} />
          <div className={classes.LogoTwitter} />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <span className={classes.ForPopUp} onMouseOver={props.onCMouseOver} />
        <Header />
        {RwdNav}
        <BookmarkManager />
        <FeaturesSection />
        <FeaturesTabSection />
        {popUp}
        <DownloadSection />
        <QuestionsSection />
        <FooterConnect />
        <FooterInfo />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    popUpVisibleRedux: state.popUp.popUpVisible,
    rwdNavVisibleRedux: state.RwdNAw.RwdNavVisible,
  };
};

const mapDispathcToProps = (dispatch) => {
  return {
    onSetTimeoutHandler: () => dispatch(actions.ontTimeInterval()),
    onCMouseOver: () => dispatch(actions.ontMouseOver()),
    onCloseRwdNavHandler: () => dispatch(actions.onRwdNavClose()),
  };
};

export default connect(mapStateToProps, mapDispathcToProps)(App);
