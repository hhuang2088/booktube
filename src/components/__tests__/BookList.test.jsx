import React from 'react';
import { shallow } from 'enzyme';
import BookList from 'components/BookList';

let wrapper = shallow(<BookList />);

describe('BookList component without books props', () => {
  describe('the div', () => {
    const div = wrapper.find('div');

    it('there should only be one div', () => {
      expect(div.length).toEqual(1);
    });

    it('displays the right notice', () => {
      expect(div.text()).toEqual(
        'Books not found, please enter another search term'
      );
    });
  });
});
