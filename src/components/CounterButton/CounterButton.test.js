import { shallow } from 'enzyme';
import React, { Component } from 'react';
import CounterButton from './CounterButton';

it('Check the counter component', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});


it('crectly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:1})
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:2})
    expect(wrapper.instance().props.color).toEqual('red')
})




// describe('<CounterButton />', () => {
// 	it('should render button', () => {
// 		const wrapper = shallow(<CounterButton />);
// 		expect(wrapper.find('div').find('button'));
// 	});
// 	it('should click event', () => {
//         const state = 0;
// 		const button = shallow(
//         <CounterButton></CounterButton>);
//         expect(state).toEqual(0);
// 		button.find('button').simulate('click');
		
// 	});
// });

// describe('<MyComponent />', () => {
//     it('should render three <Foo /> components', () => {
//       const wrapper = shallow(<MyComponent />);
//       expect(wrapper.find(Foo)).to.have.length(3);
//     });

//     it('should render an `.icon-star`', () => {
//       const wrapper = shallow(<MyComponent />);
//       expect(wrapper.find('.icon-star')).to.have.length(1);
//     });

//     it('should render children when passed in', () => {
//       const wrapper = shallow((
//         <MyComponent>
//           <div className="unique" />
//         </MyComponent>
//       ));
//       expect(wrapper.contains(<div className="unique" />)).to.equal(true);
//     });

//     it('simulates click events', () => {
//       const onButtonClick = sinon.spy();
//       const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
//       wrapper.find('button').simulate('click');
//       expect(onButtonClick.calledOnce).to.equal(true);
//     });
//   });
