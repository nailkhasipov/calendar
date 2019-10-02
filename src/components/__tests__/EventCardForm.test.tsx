import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-styled-components";
import "jest-dom/extend-expect";
import { EventCardForm } from "../EventCardForm";

afterEach(cleanup);

describe("EventCardForm component", () => {
  it("render correctly", () => {
    const { container } = render(<EventCardForm></EventCardForm>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("change eventForm", () => {
    const { getByTestId } = render(<EventCardForm />);
    const contentInput = getByTestId("eventInput");
    const submitButton = getByTestId("save");
    //@ts-ignore
    contentInput.value = "new content";
    fireEvent.change(contentInput);
    fireEvent.click(submitButton);
    //@ts-ignore
    expect(contentInput.value).toEqual("new content");
  });
});
