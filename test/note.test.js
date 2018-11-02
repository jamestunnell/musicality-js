'use strict';

var expect = require('chai').expect;

var Note = require('../index').Note;
var PITCHES = require('../index').PITCHES;

describe('Note', function() {
  describe('constructor', function() {
    it('should accept valid duration and no pitches', function() {
      var n = new Note(2);
      expect(n.duration).to.equal(2);
      expect(n.pitches.size).to.equal(0);
    });

    it('should accept valid duration and one pitch', function() {
      var n = new Note(2, PITCHES.E4);
      expect(n.duration).to.equal(2);
      expect(n.pitches.size).to.equal(1);
      
      expect(n.pitches.has(PITCHES.E4)).to.be.true;
    });

    it('should accept valid duration and multiple pitches', function() {
      var n = new Note(2, [PITCHES.E4, PITCHES.G4]);
      expect(n.duration).to.equal(2);
      expect(n.pitches.size).to.equal(2);
      expect(n.pitches.has(PITCHES.E4)).to.be.true;
      expect(n.pitches.has(PITCHES.G4)).to.be.true;
    });
    
    it('should raise error if duration is 0', function() {
      expect(()=>{ new Note(0); }).to.throw(RangeError);
    });

    it('should raise error if duration is negative', function() {
      expect(()=>{ new Note(-1); }).to.throw(RangeError);
    });
  });
});