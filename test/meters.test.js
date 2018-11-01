'use strict';

var expect = require('chai').expect;

var METERS = require('../index').METERS;

describe('PITCHES', function() {
  it('should contain 2/2', function() {
    expect(METERS["2/2"]).to.not.be.undefined;
  });
  
  it('should contain 2/4', function() {
    expect(METERS["2/4"]).to.not.be.undefined;
  });

  it('should contain 3/4', function() {
    expect(METERS["3/4"]).to.not.be.undefined;
  });

  it('should contain 4/4', function() {
    expect(METERS["4/4"]).to.not.be.undefined;
  });

  it('should contain 6/8', function() {
    expect(METERS["6/8"]).to.not.be.undefined;
  });
});