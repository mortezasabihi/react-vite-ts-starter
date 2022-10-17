import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe("<Spinner />", () => {
  test("should renders without errros", () => {
    render(<Spinner />);
  });
});
