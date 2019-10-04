import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-styled-components";
import "jest-dom/extend-expect";
import { CreateEventForm } from "../CreateEventForm";

afterEach(cleanup);

describe("CreateEventForm component", () => {
  it("render correctly", () => {
    const { container } = render(<CreateEventForm></CreateEventForm>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("change eventForm", () => {
    const onCloseModal = jest.fn();
    const { getByTestId } = render(
      <CreateEventForm onCloseModal={onCloseModal} />
    );
    const contentInput = getByTestId("eventInput");
    const submitButton = getByTestId("save");
    //@ts-ignore
    contentInput.value = "new content";
    fireEvent.change(contentInput);
    fireEvent.click(submitButton);
    //@ts-ignore
    expect(contentInput.value).toEqual("new content");
  });

  //@TODO test date inputs
});
