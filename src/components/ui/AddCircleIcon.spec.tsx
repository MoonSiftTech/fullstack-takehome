import { describe, it, expect } from "vitest";
import { render } from "src/test-utils";
import { AddCircleIcon } from "./AddCircleIcon";

describe("AddCircleIcon", () => {
  it("renders correctly", () => {
    const { container, getByTestId } = render(<AddCircleIcon />);

    const element = getByTestId("add-circle-icon");

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("width");
    expect(element).toHaveAttribute("stroke");

    expect(container).toMatchSnapshot();
  });
});
