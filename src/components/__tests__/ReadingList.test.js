import React from 'react';
import { shallow } from 'enzyme';
import ReadingList from '../ReadingList';

let wrapper = shallow(<ReadingList />);

describe('the wrapper component', () => {
  it('has two divs', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  describe('the outer div', () => {
    const outerDiv = wrapper.find('div').at(0);

    it('has the class ui', () => {
      expect(outerDiv.hasClass('ui')).toBeTruthy();
    });

    it('has the class segments', () => {
      expect(outerDiv.hasClass('segments')).toBeTruthy();
    });
  });

  describe('the inner div', () => {
    const innerDiv = wrapper.find('div').at(1);

    it('has the class ui', () => {
      expect(innerDiv.hasClass('ui')).toBeTruthy();
    });

    it('has the class center', () => {
      expect(innerDiv.hasClass('center')).toBeTruthy();
    });

    it('has the class aligned', () => {
      expect(innerDiv.hasClass('aligned')).toBeTruthy();
    });

    it('has the class segment', () => {
      expect(innerDiv.hasClass('segment')).toBeTruthy();
    });
  })
});