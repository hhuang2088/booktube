import React from 'react';
import { shallow } from 'enzyme';
import ReadingListItem from 'components/ReadingListItem';

let wrapper = shallow(<ReadingListItem />);

describe('the ReadingItem component', () => {
  it('has a single div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('the div has a class of ui', () => {
    expect(wrapper.find('div').hasClass('ui')).toBeTruthy();
  });

  it('the div has a class of segment', () => {
    expect(wrapper.find('div').hasClass('segment')).toBeTruthy();
  });

  it('has an a element', () => {
    expect(wrapper.find('a').length).toEqual(1);
  });

  it('has a p element', () => {
    expect(wrapper.find('p').length).toEqual(1);
  });

  it('has a br element', () => {
    expect(wrapper.find('br').length).toEqual(1);
  });

  it('has a button element', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('the button has the class ui', () => {
    expect(wrapper.find('button').hasClass('ui')).toBeTruthy();
  });

  it('the button has the class red', () => {
    expect(wrapper.find('button').hasClass('red')).toBeTruthy();
  });

  it('the button has the class basic', () => {
    expect(wrapper.find('button').hasClass('basic')).toBeTruthy();
  });

  it('the button has the class button', () => {
    expect(wrapper.find('button').hasClass('button')).toBeTruthy();
  });
});
