/* eslint-disable react/no-unescaped-entities */
import './App.module.scss';
import * as classes from './App.module.scss';
import { Header, BookmarkManager } from './components/1-header/Header';
import {
  FeaturesSection,
  BookmarkSection,
} from './components/2-features/Features';
import {
  DownloadSection,
  QuestionsSection,
} from './components/3-main-section/MainSection';
import { FooterConnect, FooterInfo } from './components/4-footer/Footer';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <BookmarkManager />
      <FeaturesSection />
      <BookmarkSection />
      <DownloadSection />
      <QuestionsSection />
      <FooterConnect />
      <FooterInfo />
    </div>
  );
}

export default App;
