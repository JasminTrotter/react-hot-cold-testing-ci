import React from 'react';
import { shallow, mount, render } from 'enzyme';


import AuralStatus from './aural-status';



describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });
  it('listens to the aural-status props', () => {
  	const auralStatus = 'this is the test aural-status';
  	const wrapper = shallow(<AuralStatus auralStatus={auralStatus} />)
  	expect(wrapper.contains(auralStatus)).toEqual(true);
  });
});