'use strict';

var expect = require('chai').expect;

var PITCHES = require('../index').PITCHES;

function check_all_octaves(pc)
{
    expect(PITCHES[pc+"0"]).to.not.be.undefined;
    expect(PITCHES[pc+"1"]).to.not.be.undefined;
    expect(PITCHES[pc+"2"]).to.not.be.undefined;
    expect(PITCHES[pc+"3"]).to.not.be.undefined;
    expect(PITCHES[pc+"4"]).to.not.be.undefined;
    expect(PITCHES[pc+"5"]).to.not.be.undefined;
    expect(PITCHES[pc+"6"]).to.not.be.undefined;
    expect(PITCHES[pc+"7"]).to.not.be.undefined;
    expect(PITCHES[pc+"8"]).to.not.be.undefined;
}

describe('PITCHES', function() {
  it('should contain C0 - C8', function() {
    check_all_octaves('C');
  });

  it('should contain Cs0 - Cs8', function() {
    check_all_octaves('Cs');
  });

  it('should contain Df0 - Df8', function() {
    check_all_octaves('Df');
  });

  it('should contain D0 - D8', function() {
    check_all_octaves('D');
  });

  it('should contain Ds0 - Ds8', function() {
    check_all_octaves('Ds');
  });

  it('should contain Ef0 - Ef8', function() {
    check_all_octaves('Ef');
  });

  it('should contain E0 - E8', function() {
    check_all_octaves('E');
  });

  it('should contain F0 - F8', function() {
    check_all_octaves('F');
  });

  it('should contain Fs0 - Fs8', function() {
    check_all_octaves('Fs');
  });

  it('should contain Gf0 - Gf8', function() {
    check_all_octaves('Gf');
  });

  it('should contain G0 - G8', function() {
    check_all_octaves('G');
  });

  it('should contain Gs0 - Gs8', function() {
    check_all_octaves('Gs');
  });

  it('should contain Af0 - Af8', function() {
    check_all_octaves('Af');
  });

  it('should contain A0 - A8', function() {
    check_all_octaves('A');
  });

  it('should contain As0 - As8', function() {
    check_all_octaves('As');
  });

  it('should contain Bf0 - Bf8', function() {
    check_all_octaves('Bf');
  });

  it('should contain B0 - B8', function() {
    check_all_octaves('B');
  });
});
