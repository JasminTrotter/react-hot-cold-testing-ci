import React from 'react';
import { shallow, mount, render } from 'enzyme';



import GuessCount from './guess-count';



describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });
  it('Renders the correct guess count', () => {
  	const guessCount = 5;
  	const wrapper = shallow(<GuessCount guessCount={guessCount}/>)
  	expect(wrapper.text()).toEqual('You\'ve made 5 guesses!')
  });
});