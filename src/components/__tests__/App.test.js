import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import Searchbar from 'components/Searchbar';
import BookList from 'components/BookList';

const wrapper = shallow(<App />);

it('returns a div with className ui container', () => {
	const div = wrapper.find('div');
	expect(div.length).toEqual(1);
	expect(div.hasClass('ui')).toBeTruthy();
	expect(div.hasClass('container')).toBeTruthy();
})

it('shows a Searchbar', () => {
	expect(wrapper.find(Searchbar).length).toEqual(1);
})

it('shows a BookList', () => {
	expect(wrapper.find(BookList).length).toEqual(1);
})

it('has a books state that is set to an empty array', () => {
	const books = wrapper.state().books
	expect(books).toBeTruthy();
	expect(books.length).toEqual(0);
})

it('has an onFormSubmit method', () => {
	expect(wrapper.instance().onFormSubmit);
})
