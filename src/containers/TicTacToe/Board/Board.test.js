import React from "react";
import { shallow, mount } from "enzyme";

import Board from "./Board";
import Square from "./Square/Square";

describe("<Board />", () => {
  let mockOnClick;
  let squares;

  beforeEach(() => {
    mockOnClick = jest.fn();
    squares = Array(9).fill(null);
  });

  it("Renders 9 squares", () => {
    const wrapper = shallow(
      <Board winner="" squares={squares} onClick={mockOnClick} />
    );
    expect(wrapper.find(Square)).toHaveLength(9);
  });

  it("Renders first square as X and second square as O", function () {
    squares[0] = "X";
    squares["1"] = "O";
    const wrapper = mount(
      <Board winner="" squares={squares} onClick={mockOnClick} />
    );
    expect(wrapper.find(Square).at(0).text()).toEqual("X");
    expect(wrapper.find(Square).at(1).text()).toEqual("O");
  });

  it("Adds no-win className", function () {
    const wrapper = mount(
      <Board winner="no-win" squares={squares} onClick={mockOnClick} />
    );
    expect(wrapper.find(".board").hasClass("board-no-win")).toEqual(true);
  });

  it("Adds board-has-winner and board-012 className", function () {
    const winner = "012";
    const wrapper = mount(
      <Board winner={winner} squares={squares} onClick={mockOnClick} />
    );
    expect(wrapper.find(".board").hasClass("board-has-winner")).toEqual(true);
    expect(wrapper.find(".board").hasClass("board-" + winner)).toEqual(true);
  });
});
