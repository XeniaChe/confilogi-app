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
import { FooterConnect, FooterInfo } from './components/4-footer/Footer';
import PopUp from './components/5-PopUp/PopUp';
import * as actionTypes from './store/actionTypes';

function App(props) {
  let popUp = null;
  if (props.popUpVisibleRedux) {
    popUp = <PopUp />;
  }

  useEffect(() => {
    setTimeout(() => {
      props.onSetTimeoutHandler();
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Header />
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
    popUpVisibleRedux: state.popUpVisible,
  };
};

const mapDispathcToProps = (dispatch) => {
  return {
    onSetTimeoutHandler: () => dispatch({ type: actionTypes.ON_TIME_INTERVAL }),
  };
};
export default connect(mapStateToProps, mapDispathcToProps)(App);
