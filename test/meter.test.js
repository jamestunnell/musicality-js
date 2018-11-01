'use strict';

var expect = require('chai').expect;

var Meter = require('../index').Meter;

describe('Meter', function() {
  describe('constructor', function() {
    it('should accept valid values', function() {
      var m = new Meter(2,1/4);
      expect(m.beats_per_measure).to.equal(2);
      expect(m.beat_duration).to.equal(1/4);
    });
    
    it('should raise error if beats per measure is 0', function() {
      expect(()=>{ new Meter(0,1/2); }).to.throw(RangeError);
    });

    it('should raise error if beats per measure is negative', function() {
      expect(()=>{ new Meter(-1,1/2); }).to.throw(RangeError);
    });

    it('should raise error if beats per measure is not an integer', function() {
      expect(()=>{ new Meter(1.2,1/2); }).to.throw(TypeError);
    });
    
    it('should raise error if beat duration is 0', function() {
      expect(()=>{ new Meter(2,0); }).to.throw(RangeError);
    });

    it('should raise error if beat duration is negative', function() {
      expect(()=>{ new Meter(2,-1/2); }).to.throw(RangeError);
    });
  });
  
  describe('#measure_duration', function() {
    it('should multiply beats per measure and beat duration', function() {
      var m = new Meter(2,1/4);
      expect(m.measure_duration).to.equal(1/2);
	});
  });
});