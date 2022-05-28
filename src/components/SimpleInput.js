import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    enteredValue: nameValue,
    isValidValue: isValidName,
    EnterdInputChangeHandler: EnterdNameChangeHandler,
    EnteredInputBlurHandler: EnteredNameBlurHandler,
    enteredValueIsValid: enteredNameIsValid,
    reset: resetName
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: emailValue,
    isValidValue: isValidEmail,
    EnterdInputChangeHandler: EnterdEmailChangeHandler,
    EnteredInputBlurHandler: EnteredEmailBlurHandler,
    enteredValueIsValid: enteredEmailIsValid,
    reset: resetEmail
  } = useInput((value) => value.includes("@"));

  const isValidForm = enteredEmailIsValid && enteredNameIsValid;

  const formSubmetedHndler = (event) => {
    event.preventDefault();
    if (!isValidName && !enteredEmailIsValid) {
      return;
    }
    resetName("");
    resetEmail("");
  };

  const nameInputClasses = isValidName ? "form-control invalid" : "form-control";
  const emailInputClasses = isValidEmail ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmetedHndler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={EnterdNameChangeHandler}
          onBlur={EnteredNameBlurHandler}
        />
        {isValidName && <p className="error-text">name must niot be empty</p>}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          value={emailValue}
          onChange={EnterdEmailChangeHandler}
          onBlur={EnteredEmailBlurHandler}
        />
        {isValidEmail && <p className="error-text">name must niot be empty</p>}
      </div>
      <div className="form-actions">
        <button className={!isValidForm && "disable"}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
