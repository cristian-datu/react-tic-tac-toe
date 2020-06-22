import React from "react";
import { shallow } from "enzyme";

import Square from "./Square";

describe("<Square />", () => {
  let mockOnClick;

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  it("Renders one empty Square component", () => {
    const component = shallow(<Square value={null} onClick={mockOnClick} />);
    expect(component).toHaveLength(1);
    expect(component.text()).toBe(" ");
  });

  it("Renders 'X' move", () => {
    const component = shallow(<Square value="X" onClick={mockOnClick} />);
    expect(component.text()).toBe("X");
  });

  it("Renders 'O' move", () => {
    const component = shallow(<Square value="O" onClick={mockOnClick} />);
    expect(component.text()).toBe("O");
  });

  it("Triggers onClick if value is null", () => {
    const component = shallow(<Square value={null} onClick={mockOnClick} />);
    component.find("div").simulate("click");
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Does not trigger onClick if value is X", () => {
    const component = shallow(<Square value="X" onClick={mockOnClick} />);
    component.find("div").simulate("click");
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });

  it("Does not trigger onClick if value is O", () => {
    const component = shallow(<Square value="O" onClick={mockOnClick} />);
    component.find("div").simulate("click");
    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
