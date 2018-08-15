import React from 'react';
import { shallow, mount, render } from 'enzyme';


import Feedback from './feedback';



describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });
  it('listens to the feedback props', () => {
  	const feedback = 'this is the test feedback';
  	const wrapper = shallow(<Feedback feedback={feedback} />)
  	expect(wrapper.contains(feedback)).toEqual(true);
  });
 });