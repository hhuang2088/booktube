import React from 'react';
import { shallow } from 'enzyme';
import Searchbar from 'components/Searchbar';

const wrapper = shallow(<Searchbar />);

it('has two div', () => {
	expect(wrapper.find('div').length).toEqual(2);
});

it('has a form with className ui form', () => {
	const form = wrapper.find('form');
	expect(form.length).toEqual(1);
	expect(form.hasClass('ui')).toBeTruthy();
	expect(form.hasClass('form')).toBeTruthy();
});

it('has an input', () => {
	expect(wrapper.find('input').length).toEqual(1);
});

it('has an input field that users can type in', () => {
	wrapper.find('input').simulate('change', {
		target: { value: 'new input'}
	});
	wrapper.update();
	expect(wrapper.find('input').prop('value')).toEqual('new input');
});

it('has a method called onSubmit', () => {
	expect(wrapper.instance().onSubmit).toBeTruthy();
})

it('has a method called onChange', () => {
	expect(wrapper.instance().onChange).toBeTruthy();
});
