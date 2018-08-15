import React from 'react';
import { shallow, mount, render } from 'enzyme';



import TopNav from './top-nav';



describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });
  it('Should restart game on new game click', () => {
    const spy = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={spy}/>);
    const link = wrapper.find('.new');
    link.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
  

});