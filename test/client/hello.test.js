import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import Hello from '../../client/js/components/Hello';

describe("A suite", () =>  {

  it("contains spec with an expectation", () => {
    expect(shallow(<Hello date={new Date()}/>).is('.hello')).to.equal(true);
  });

  it("contains spec with an expectation", () =>  {
    expect(mount(<Hello date={new Date()}/>).find('.hello').length).to.equal(1);
  });

  it('simulates click events', () => {
  	var defaultName = ''
    const onButtonClick = sinon.spy((nameValue) => {
    	defaultName = nameValue
    });
    const wrapper = mount(
      <Hello date={new Date()} name="react" onButtonClick={onButtonClick} />
    );
    wrapper.find('button').simulate('click');
    expect(onButtonClick.calledOnce).to.equal(true);
    expect(defaultName).to.equal('react');
  });
});