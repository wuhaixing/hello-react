import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Hello from '../../client/js/components/Hello';

describe("A suite", () =>  {

  it("contains spec with an expectation", () => {
    expect(shallow(<Hello />).is('.hello')).to.equal(true);
  });

  it("contains spec with an expectation", () =>  {
    expect(mount(<Hello />).find('.hello').length).to.equal(1);
  });

  it("should say hello to react", ()=> {
  	const wrapper = shallow(<Hello name="react"/>);
  	expect(wrapper.html()).to.equal('<div class="hello">Hello react</div>');
  })
});