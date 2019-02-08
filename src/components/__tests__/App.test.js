import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import Searchbar from 'components/Searchbar';
import BookList from 'components/BookList';

let wrapper;

beforeEach(() => {
	wrapper = shallow(<App />)
});

afterEach(() => {
	wrapper.unmount();
})

it('returns a div with className ui container', () => {
	expect(wrapper.find('div').length).toEqual(1);
	expect(wrapper.find('div').hasClass('ui')).toBeTruthy();
	expect(wrapper.find('div').hasClass('container')).toBeTruthy();
})

it('shows a Searchbar', () => {
	expect(wrapper.find(Searchbar).length).toEqual(1);
})

it('shows a BookList', () => {
	expect(wrapper.find(BookList).length).toEqual(1);
})

it('has a books state that is set to an empty array', () => {
	expect(wrapper.state().books).toBeTruthy();
	expect(wrapper.state().books.length).toEqual(0);
})

it('has an onFormSubmit method', () => {
	expect(wrapper.instance().onFormSubmit);
})
