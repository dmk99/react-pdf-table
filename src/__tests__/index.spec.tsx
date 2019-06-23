import * as React from "react";
import { shallow, mount, render } from "enzyme";
import { spy } from "sinon";
import { HelloWorld } from "../index";

describe("<HelloWorld />", () => {
  it("renders the children", () => {
    const wrapper = shallow(<HelloWorld><h1>Hello World!</h1></HelloWorld>);
    expect(wrapper.contains(<h1>Hello World!</h1>)).toBeTruthy();
  });
});