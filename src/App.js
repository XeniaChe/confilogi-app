/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.module.scss';
import * as classes from './App.module.scss';
import { Header, BookmarkManager } from './components/1-header/Header';
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

function App() {
  const [popUpVisible, setPopUpVisible] = useState(false);
  let popUp = null;
  if (popUpVisible) {
    popUp = <PopUp />;
  }

  useEffect(() => {
    setTimeout(() => {
      setPopUpVisible(true);
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

export default App;
