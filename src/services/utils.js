// SINGLE FIELD VALIDATION CHECK
export const fieldValidCheck = (inputValue) => {
  let isValid = true;

  const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  isValid = pattern.test(inputValue) && isValid;

  return isValid;
};

// setState CALLBACK
export const fieldValidationOnID = (value) => {
  const fieldChecked = fieldValidCheck(value);
  console.log(fieldChecked);

  return fieldChecked;
};

// OVERALL FORM VALIDATION
export const formValidation = (field) => {
  let formIsValid = true;

  formIsValid = field.isValid && formIsValid;
  return formIsValid;
};
