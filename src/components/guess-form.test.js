import React from 'react';
import { shallow, mount, render } from 'enzyme';



import GuessForm from './guess-form';



describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });
  it('runs the callback on form submit', () => {
  	const spy = jest.fn();
  	const value = 7;
  	const wrapper = mount(<GuessForm onMakeGuess={spy} />);
  	wrapper.find('input[type="number"]').instance().value = value;
  	wrapper.simulate('submit');
  	expect(spy).toHaveBeenCalledWith(value.toString());
  });
  it('should reset the input after form submits', () => {
  	const wrapper = mount(<GuessForm />);
  	const input = wrapper.find('input[type="number"]');
  	input.instance().value = 10;
  	wrapper.simulate('submit');
  	expect(input.instance().value).toEqual('');
  });
});