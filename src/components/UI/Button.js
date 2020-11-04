/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './button.module.scss';

const Button = ({ children, type }) => {
  const style = [classes.Button];
  if (type === 'red') {
    style.push(classes.Red);
  } else if (type === 'blue') {
    style.push(classes.Blue);
  }
  return (
    <button type='button' className={style.join(' ')}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
