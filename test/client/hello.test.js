import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Hello from '../../client/js/components/Hello';

describe("A suite", () =>  {

  it("contains spec with an expectation", () => {
    expect(shallow(<Hello date={new Date()}/>).is('.hello')).to.equal(true);
  });

  it("contains spec with an expectation", () =>  {
    expect(mount(<Hello date={new Date()}/>).find('.hello').length).to.equal(1);
  });

});