import React from 'react';
import { shallow, mount, render } from 'enzyme';



import StatusSection from './status-section';


//FIX
describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection guesses={[]} />);
  });
});