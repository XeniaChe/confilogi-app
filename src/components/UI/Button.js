/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import * as classes from './button.module.scss';

const Button = ({ children, type, fix, funcType }) => {
  const style = [classes.Button];
  if (type === 'red') {
    style.push(classes.Red);
  } else if (type === 'blue') {
    style.push(classes.Blue);
  }

  if (fix === 'fix_2') {
    style.push(classes.Button_fix_2);
  }

  let action = 'button';
  if (funcType) {
    action = 'submit';
  }
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={style.join(' ')} type={action}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
