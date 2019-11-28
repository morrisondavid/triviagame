import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Loader from "./Loader";

describe("<Loader />", () => {
  test("#render", () => {
    const component = renderer.create(<Loader />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("#render has <StyledLoaderWrapper />", () => {
    const component = shallow(<Loader />);
    const wrapper = component.find("StyledLoaderWrapper");

    expect(wrapper).toBeDefined();
  });

  test("#render has <StyledLoader />", () => {
    const component = shallow(<Loader />);
    const loader = component.find("StyledLoader");

    expect(loader).toBeDefined();
  });

  test("#render has <Spinner />", () => {
    const component = shallow(<Loader />);
    const spinner = component.find("Spinner");

    expect(spinner).toBeDefined();
  });
});
