import React from 'react';
import { shallow } from 'enzyme';
import BookListItem from 'components/BookListItem';

const wrapper = shallow(<BookListItem />);

describe('the div tags', () => {
  it('has five divs', () => {
    expect(wrapper.find('div').length).toEqual(5);
  });

  it('include a div with the "book-list-item" class', () => {
    expect(wrapper.find('.book-list-item').length).toEqual(1);
  });

  it('include a div with the "item" class', () => {
    expect(wrapper.find('.item').length).toEqual(1);
  });

  it('include a div with the "row" class', () => {
    expect(wrapper.find('.row').length).toEqual(1);
  });

  it('include a div with the class "description"', () => {
    expect(wrapper.find('.description').length).toEqual(1);
  });

  it('the div with the class "book-list-item" and the div with the class "item" are the same div', () => {
    expect(wrapper.find('.item')).toEqual(wrapper.find('.book-list-item'));
  });
});

describe('the img tag', () => {
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

  it('the button has the text "Add Book to Reading List"', () => {
    const button = wrapper.find('button');

    expect(button.text()).toEqual('Add Book to Reading List');
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

it('the second div has the classes "four wide column"', () => {
  expect(
    wrapper
      .find('div')
      .at(1)
      .hasClass('four')
  );
  expect(
    wrapper
      .find('div')
      .at(1)
      .hasClass('wide')
  );
  expect(
    wrapper
      .find('div')
      .at(1)
      .hasClass('column')
  );
});

it('the third div has the classes "twelve wide column"', () => {
  expect(
    wrapper
      .find('div')
      .at(2)
      .hasClass('twelve')
  ).toBeTruthy();
  expect(
    wrapper
      .find('div')
      .at(2)
      .hasClass('wide')
  ).toBeTruthy();
  expect(
    wrapper
      .find('div')
      .at(2)
      .hasClass('column')
  ).toBeTruthy();
});

it('the fourth div has a class of "content"', () => {
  expect(
    wrapper
      .find('div')
      .at(3)
      .hasClass('content')
  ).toBeTruthy();
});

it('the fifth div has a class of "description"', () => {
  expect(
    wrapper
      .find('div')
      .at(4)
      .hasClass('description')
  ).toBeTruthy();
});

it('the a tag has a class of header', () => {
  expect(wrapper.find('a').hasClass('header')).toBeTruthy();
});
