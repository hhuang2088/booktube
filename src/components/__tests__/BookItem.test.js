import React from 'react';
import { shallow } from 'enzyme';
import BookItem from 'components/BookItem';

const wrapper = shallow(<BookItem />)

describe('the div tags', () => {
	it('has three divs', () => {
		expect(wrapper.find('div').length).toEqual(3);
	});

	it('include a div with the "book-item" class', () => {
		expect(wrapper.find('.book-item').length).toEqual(1);
	});

	it('include a div with the "item" class', () => {
		expect(wrapper.find('.item').length).toEqual(1);
	});

	it('include a div with the class "description"', () => {
		expect(wrapper.find('.description').length).toEqual(1);
	});

	it('the div with the class "book-item" and the div with the class "item" are the same div', () => {
		expect(wrapper.find('.item')).toEqual(wrapper.find('.book-item'));
	});
});

describe('the img tag', () =>{
	const img = wrapper.find('img');

	it('has one img', () => {
		expect(img.length).toEqual(1);
	});

	it('has the class "ui"', () => {
		expect(img.hasClass('ui')).toBeTruthy();
	});

	it('has the class "image"', () => {
		expect(img.hasClass('image')).toBeTruthy();
	});

	it('has a button', () => {
		expect(wrapper.find('button').length).toEqual(1);
	});
});

describe('the Add to Reading List Button', () => {
	const button = wrapper.find('button');

	it('the button has the text "Add to Reading List"', () => {
		const button = wrapper.find('button');

		expect(button.text()).toEqual("Add to Reading List");
	});

	it('has the class "ui"', () => {
		expect(button.hasClass('ui'));
	});

	it('has the class "positive"', () => {
		expect(button.hasClass('positive'));
	});

	it('has the class "button"', () => {
		expect(button.hasClass('button'));
	});
});

it('has one external link (a tag)', () => {
	expect(wrapper.find('a').length).toEqual(1);
});
