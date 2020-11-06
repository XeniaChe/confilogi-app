import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import * as classes from './popUp.module.scss';
import sourceImage2 from '../../images/illustration-features-tab-2.svg';
import Button from '../UI/Button';

const PopUp = () => {
  const PopUpInfo = {
    title: 'Intelligent search',
    text:
      'Our powerfull search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. ',
    image: sourceImage2,
  };

  return (
    <div className={classes.PopUpModal}>
      <div className={classes.PopUpBox}>
        <div className={classes.TabImage}>
          <LazyLoadImage src={sourceImage2} effect='opacity' />
        </div>
        <div className={classes.TabText}>
          <h1>{PopUpInfo.title}</h1>
          <p>{PopUpInfo.text}</p>
          <div className={classes.ButtonBox}>
            <Button type='blue'>More info</Button>
          </div>
        </div>
        <a href='#close'>&times;</a>
      </div>
    </div>
  );
};

export default PopUp;
