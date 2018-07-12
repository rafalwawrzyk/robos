import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";


it('have props', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('CounterButton').length).toEqual(1)
})