'use strict';

var expect = require('chai').expect;
var isEqual = require('underscore').isEqual;

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

  context('Lowest pitch', function() {
    before(function() {
      this.p = new Pitch(0,0);
    });

    describe('#ratio', function() {
      it('should return 1', function() {
        expect(this.p.ratio).to.be.equal(1);
      });
    });

    describe('#freq', function() {
      it('should equal C0 freq', function() {
        expect(this.p.freq).to.be.closeTo(16.35,0.01);
      });
    });
  });

  context('Octave above lowest pitch', function() {
    before(function() {
      this.p = new Pitch(1,0);
    });

    describe('#ratio', function() {
      it('should return 2', function() {
        expect(this.p.ratio).to.be.equal(2);
      });
    });

    describe('#freq', function() {
      it('should equal C1 freq', function() {
        expect(this.p.freq).to.be.closeTo(32.70,0.01);
      });
    });
  });

  describe('#transpose', function() {
    it('should return a new, adjusted pitch', function() {
      var p1 = new Pitch(4,3);
      var p2 = new Pitch(4,5);
      var p3 = p1.transpose(2);
      expect(isEqual(p3,p2)).to.be.true;

      var p4 = p3.transpose(-2);
      expect(isEqual(p4,p1)).to.be.true;
    });
  });
});
