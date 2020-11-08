/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import * as classes from './footerConnect.module.scss';
import Button from '../components/UI/Button';
import * as services from '../services/utils';

import errorImage from '../images/icon-error.svg';

const FooterConnect = () => {
  const [counter, setCount] = useState(35000);

  const [emailInput, setEmailInput] = useState({
    value: '',
    isValid: false,
    touched: false,
  });

  // eslint-disable-next-line no-unused-vars
  const [formIsValid, setFormIsValid] = useState(false);

  const seToZero = () => {
    if (counter > 0) {
      setTimeout(() => {
        setCount(counter - 1750);
      }, 1000);
    }
  };

  useEffect(() => {
    seToZero();
  }, [counter]);

  const InputChangeHandler = (event) => {
    const inputValue = event.target.value;

    setEmailInput((prevState) => {
      return {
        ...prevState,
        value: inputValue,
        touched: true,
      };
    });
  };

  // setState Callback
  useEffect(() => {
    const emailInputCopy = { ...emailInput };
    let isValidCopy = { ...emailInputCopy.isValid };

    if (emailInput.value !== '') {
      isValidCopy = services.fieldValidationOnID(emailInput.value);
    }

    setEmailInput((prevState) => {
      return {
        ...prevState,
        isValid: isValidCopy,
      };
    });
  }, [emailInput.value]);

  let errorMessage = null;
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // overAll form Validation
    const fomValidationCheck = services.formValidation(emailInput);
    console.log('form submitted!');

    setFormIsValid(fomValidationCheck);

    if (!fomValidationCheck || emailInput.value === '') {
      errorMessage = <label htmlFor='email'> Whoops!</label>;
    }
  };

  /// ///////////////////////////////////////////////////////
  let erorrSign = null;

  if (emailInput.touched && !emailInput.isValid) {
    erorrSign = <img src={errorImage} className={classes.ErrorImg} />;
  }

  return (
    <div className={classes.FooterConnect}>
      <div className={classes.ContactBox}>
        <p className={classes.JoinedCount}>{counter}+ alredy joined</p>
        <h1>Stay up-to-date with what we're doing</h1>
        <form className={classes.contactForm} onSubmit={onSubmitHandler}>
          <input
            name='email'
            id='email'
            type='email'
            placeholder='Enter your email address'
            onChange={InputChangeHandler}
            value={emailInput.value}
          />
          {erorrSign}
          {errorMessage}
          <Button type='red' funcType='submit'>
            Contact Us
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FooterConnect;
