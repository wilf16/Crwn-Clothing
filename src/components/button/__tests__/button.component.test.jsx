import { render, screen } from "@testing-library/react";
import Button from "../button.component";

describe("button test", () => {
  it("should render base button when nothing is passed", () => {
    render(<Button>Test</Button>);
    const buttonElement = screen.getByText(/test/i);
    expect(buttonElement).toHaveStyle("background-color: rgb(0, 0, 0)");
  });
});
