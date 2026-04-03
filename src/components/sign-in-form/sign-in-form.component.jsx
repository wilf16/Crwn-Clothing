import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import {
  selectCurrentUser,
  selectSignInError,
} from "../../store/user/user.selector";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const signInError = useSelector(selectSignInError);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const showError = (error) => {
    switch (error.code) {
      case "auth/invalid-credential":
        alert("Invalid credentials.");
        break;
      default:
        alert("Something went wrong.");
        console.log(error);
    }
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  useEffect(() => {
    if (currentUser) resetFormFields();
  }, [currentUser]);

  useEffect(() => {
    if (signInError) showError(signInError);
  }, [signInError]);

  return (
    <>
      <SignInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <ButtonsContainer>
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              buttonType={BUTTON_TYPE_CLASSES.google}
              onClick={signInWithGoogle}
            >
              Google Sign In
            </Button>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    </>
  );
};

export default SignInForm;
