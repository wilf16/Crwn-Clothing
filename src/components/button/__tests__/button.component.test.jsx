import { render, screen } from "@testing-library/react";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("button test", () => {
  test("should render base button when nothing is passed", () => {
    render(<Button>Test</Button>);
    const buttonElement = screen.getByText(/test/i);
    expect(buttonElement).toHaveStyle("background-color: rgb(0, 0, 0)");
  });

  test("should render google button when passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const googleButtonElement = screen.getByRole("button");
    expect(googleButtonElement).toHaveStyle("background-color: #4285f4");
  });

  test("should render inverted button when passed inverted button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const invertedButtonElement = screen.getByRole("button");
    expect(invertedButtonElement).toHaveStyle(
      "background-color: rgb(255, 255, 255);",
    );
  });

  test("should be disabled if loading is true", () => {
    render(<Button isLoading={true} />);

    const loadingButtonElement = screen.getByRole("button");
    expect(loadingButtonElement).toBeDisabled();
  });
});
