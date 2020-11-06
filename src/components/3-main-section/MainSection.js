/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import * as classes from './mainSection.module.scss';
import Button from '../UI/Button';
// images
import dotsImage from '../../images/bg-dots.svg';
import logoChrome from '../../images/logo-chrome.svg';
import logoFirefox from '../../images/logo-firefox.svg';
import logoOpera from '../../images/logo-opera.svg';
import arrowImage from '../../images/icon-arrow.svg';

const BrowserCard = (props) => {
  return (
    <div className={classes.BrowserCard} style={{ marginTop: props.margin }}>
      <img src={props.logo} alt='' className={classes.browserLogo} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <img src={dotsImage} alt='' />
      <Button type='blue' className={classes.Button_fix}>
        {' '}
        Add &amp; install extension
      </Button>
    </div>
  );
};

const browsersInfo = [
  {
    title: 'Add to Chrome',
    version: 'Minimum version 62',
    logo: logoChrome,
    margin: '8rem',
  },
  {
    title: 'Add to Firefox',
    version: 'Minimum version 55',
    logo: logoFirefox,
    margin: '12rem',
  },
  {
    title: 'Add to Opera',
    version: 'Minimum version 46',
    logo: logoOpera,
    margin: '17rem',
  },
];

const cards = browsersInfo.map((el) => (
  <BrowserCard
    key={el.title}
    title={el.title}
    text={el.version}
    logo={el.logo}
    margin={el.margin}
  />
));

const DownloadSection = () => {
  return (
    <div className={classes.DownloadSection}>
      <h1>download extension</h1>
      <p>
        We've got more browsers in the pipeline. Please do let us know if you've
        got a fovourite you'd like us to prioritize.
      </p>
      <div className={classes.BrowserCardsBox}>{cards}</div>
    </div>
  );
};

/// ////////////////////////////////////////////////////////////////////////////////////////////////

const QuestionTab = (props) => {
  const [pushed, setPushed] = useState(false);
  const [active, setActive] = useState(false);

  const buttonClickHandler = () => {
    setPushed(!pushed);
    setActive(!active);
  };

  let answer = null;
  if (pushed) {
    answer = (
      <div className={classes.AnswerBox}>
        {' '}
        <p>{props.answer}</p>
      </div>
    );
  }

  const imgStyle = [classes.Img];
  if (active) {
    imgStyle.push(classes.ImgActive);
  }

  return (
    <div className={classes.QuestionTab} onClick={buttonClickHandler}>
      <p>{props.question}</p>
      <img
        src={arrowImage}
        alt=''
        active={props.active}
        className={imgStyle.join(' ')}
      />
      {/* <span className={imgStyle.join(' ')} /> */}
      {answer}
    </div>
  );
};

const questionsInfo = [
  {
    question: 'What is Bopokmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    active: false,
  },
  {
    question: 'How can I request a new browwser?',
    answer:
      ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    active: false,
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    active: false,
  },
  {
    question: 'What about other Chromium browsers?',
    answer:
      ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    active: false,
  },
];

const questions = questionsInfo.map((el) => (
  <QuestionTab key={el.question} question={el.question} answer={el.answer} />
));

const QuestionsSection = () => {
  return (
    <div className={classes.QuestionsSection}>
      <h1>frequently asked questions</h1>
      <p className={classes.mainText}>
        Here are some of our FAQs. If you have any ither questions you'd like
        answered please feel free to email us.
      </p>
      <div className={classes.QuestionsBox}>{questions}</div>
      <Button type='blue' fix='fix_2'>
        More info
      </Button>
    </div>
  );
};

export { DownloadSection, QuestionsSection };
