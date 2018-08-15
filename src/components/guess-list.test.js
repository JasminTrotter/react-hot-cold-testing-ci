import React from 'react';
import { shallow, mount, render } from 'enzyme';



import GuessList from './guess-list';


//FIX
describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  });
  it('Renders a list of guesses', () => {
  	const guesses = [1, 6, 40, 99];
  	const wrapper = shallow(<GuessList guesses={guesses} />);
  	const items = wrapper.find('li');
  	expect(items.length).toEqual(guesses.length);
  	guesses.forEach((guess, index) => {
  		expect(items.at(index).text()).toEqual(guess.toString());
  	});
  });
});