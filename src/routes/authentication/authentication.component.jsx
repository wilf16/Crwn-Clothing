import { useEffect } from "react";
import { useSelector } from "react-redux";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import { selectErrorMessage } from "../../store/user/user.selector";

import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  const errorMessage = useSelector(selectErrorMessage);

  useEffect(() => {
    if (errorMessage) alert(errorMessage);
  }, [errorMessage]);

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
