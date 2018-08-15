import React from 'react';
import { shallow, mount, render } from 'enzyme';


import Game from './game';



describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
  it('Restarts the game', () => {
  	const wrapper = shallow(<Game />);
  	wrapper.instance().restartGame();
  	expect(wrapper.state('guesses')).toEqual([]);
  	expect(wrapper.state('feedback')).toEqual('Make your guess!');
  	expect(wrapper.state('auralStatus')).toEqual('');
  });
  it('Gives hot/cold feedback on guesses', () => {
  	const wrapper = shallow(<Game />);
  	wrapper.setState({
  		correctAnswer: 90
  	});
  	wrapper.instance().makeGuess(1);
  	expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

  	wrapper.instance().makeGuess(60);
  	expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
  	expect(wrapper.state('guesses')).toEqual([1, 60]);

  	wrapper.instance().makeGuess(80);
  	expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
  	expect(wrapper.state('guesses')).toEqual([1, 60, 80]);

  	wrapper.instance().makeGuess(89);
  	expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
  	expect(wrapper.state('guesses')).toEqual([1, 60, 80, 89]);

  	wrapper.instance().makeGuess(90);
  	expect(wrapper.state('feedback')).toEqual('You got it!');
  	expect(wrapper.state('guesses')).toEqual([1, 60, 80, 89, 90]);
  });
  it('Gives aural updates', () => {
  	const wrapper = shallow(<Game />);
  	wrapper.setState({
  		correctAnswer: 99
  	});

  	wrapper.instance().makeGuess(3);
  	wrapper.instance().makeGuess(20);
  	wrapper.instance().makeGuess(97);

  	wrapper.instance().generateAuralUpdate();

  	expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: You\'re Hot! You\'ve made 3 guesses. In order of most- to least-recent, they are: 97, 20, 3')
  });

 });









