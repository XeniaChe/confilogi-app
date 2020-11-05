/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import {
  LazyLoadComponent,
  LazyLoadImage,
} from 'react-lazy-load-image-component';
import * as classes from './features.module.scss';

// images import
import sourceImage1 from '../../images/illustration-features-tab-1.svg';
import sourceImage2 from '../../images/illustration-features-tab-2.svg';
import sourceImage3 from '../../images/illustration-features-tab-3.svg';

import Button from '../UI/Button';

const FeaturesTab = (props) => {
  return (
    <div>
      <NavLink
        to={`/tab${props.id}`}
        activeClassName={classes.NavLink_Active}
        className={classes.NavLink}
      >
        {props.title}
      </NavLink>
    </div>
  );
};

const FeaturesSection = () => {
  const featuresTabs = [
    { id: 1, title: 'Simple Bookmarking' },
    { id: 2, title: 'Speedy searching' },
    { id: 3, title: 'Easy sharing' },
  ];

  const tabs = featuresTabs.map((el) => (
    <FeaturesTab title={el.title} key={el.id} id={el.id} />
  ));

  return (
    <div className={classes.FeaturesSection}>
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className={classes.FeaturesTabs}>{tabs}</div>
    </div>
  );
};

const singleTabsInfo = [
  {
    title: 'Bookmark in one lick',
    text:
      'Organize your bookmark however you like. Our simple drag and drop interface gives you complete control over how you manage your favourite sites.',
    image: sourceImage1,
  },
  {
    title: 'Intelligent search',
    text:
      'Our powerfull search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. ',
    image: sourceImage2,
  },
  {
    title: 'Share your bookmarks',
    text:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of the button',
    image: sourceImage3,
  },
];

const TabSingle = (props) => {
  return (
    <div className={classes.TabSingle}>
      <div className={classes.TabImage}>
        <LazyLoadImage src={props.image} effect='opacity' />
        {/* <img src={props.image} alt='image' /> */}
      </div>
      <div className={classes.TabText}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <div className={classes.ButtonBox}>
          <Button type='blue'>More info</Button>
        </div>
      </div>
    </div>
  );
};

const routs = singleTabsInfo.map((el, index) => (
  <Route
    path={`/tab${index + 1}`}
    key={el.title}
    render={() => (
      <LazyLoadComponent>
        <TabSingle
          title={el.title}
          text={el.text}
          key={el.title}
          image={el.image}
        />
      </LazyLoadComponent>
    )}
  />
));

const FeaturesTabSection = () => {
  return (
    <div className={classes.TabsSection}>
      <Switch>{routs}</Switch>
      <div className={classes.TabColorShape} />
    </div>
  );
};

export { FeaturesSection, FeaturesTabSection };
