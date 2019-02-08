import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Searchbar from '../Searchbar';
import BookList from '../BookList';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />)
})

it('shows a Searchbar', () => {
	expect(wrapped.find(Searchbar).length).toEqual(1);
})

it('shows a BookList', () => {
	expect(wrapped.find(BookList).length).toEqual(1);
})
