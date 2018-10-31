'use strict';

var expect = require('chai').expect;
var Pitch = require('../index').Pitch;

describe('Pitch', function() {
  describe('constructor', function() {
    it('should compute the total cents using given params', function() {
      var p = new Pitch(4, 7, 25);
      expect(p.totalCents).to.be.equal(5525);
    });

    it('should rebalance the octave, semitone, and cent', function() {
      var p = new Pitch(3, 13, 105);
      expect(p.octave).to.be.equal(4);
      expect(p.semitone).to.be.equal(2);
      expect(p.cents).to.be.equal(5);
    });
  });

  describe('#ratio', function() {
  });

  describe('#freq', function() {
  });
});
