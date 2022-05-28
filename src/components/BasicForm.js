import useInputNew from "../hooks/use-InputNew";
const BasicForm = (props) => {
  const {
    enteredValue: firstNameValue,
    doseEnteredValueHasError: firstNameHasError,
    doseEnterdValueValid: isFirstNameValid,
    enteredValueChangeHandler: firstNameChangeHandler,
    isTouchedChangeHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInputNew((value) => value.trim() !== "");
  const {
    enteredValue: secondNameValue,
    doseEnteredValueHasError: secondNameHasError,
    doseEnterdValueValid: isSecondNameValid,
    enteredValueChangeHandler: secondNameChangeHandler,
    isTouchedChangeHandler: secondNameBlurHandler,
    reset: resetSecondName
  } = useInputNew((value) => value.trim() !== "");

  const {
    enteredValue: emailValue,
    doseEnteredValueHasError: emailHasError,
    doseEnterdValueValid: isEmailValid,
    enteredValueChangeHandler: emailChangeHandler,
    isTouchedChangeHandler: emailBlurHandler,
    reset: resetEmail
  } = useInputNew((value) => value.includes("@"));

  const isFromValid = isEmailValid && isFirstNameValid && isSecondNameValid;

  const fomrSubmitHandler = (event) => {
    event.preventDefault();
    if (!isFromValid) {
      return;
    }
    resetEmail();
    resetFirstName();
    resetSecondName();
  };

  const fistNameCalsses = firstNameHasError ? "form-control invalid" : "form-control";
  const secondNameCalsses = secondNameHasError ? "form-control invalid" : "form-control";
  const emailNameCalsses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={fomrSubmitHandler}>
      <div className="control-group">
        <div className={fistNameCalsses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p>pleas enterd valid name</p>}
        </div>
        <div className={secondNameCalsses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={secondNameValue}
            onChange={secondNameChangeHandler}
            onBlur={secondNameBlurHandler}
          />
          {secondNameHasError && <p>pleas enterd valid name</p>}
        </div>
      </div>
      <div className={emailNameCalsses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p>pleas enterd valid name</p>}
      </div>
      <div className="form-actions">
        <button className={!isFromValid ? "disable" : ""}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
