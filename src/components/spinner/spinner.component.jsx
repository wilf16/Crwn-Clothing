import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

export { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
