import { userEvent } from "@storybook/testing-library";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  test("should renders without errros", async () => {
    const { container } = render(<Button />);
    await userEvent.click(container);
  });

  test("should display loading spinner", () => {
    const { getByTestId } = render(<Button isLoading />);
    const loadingSpinner = getByTestId("spinner");
    expect(loadingSpinner).toBeTruthy();
  });
});
