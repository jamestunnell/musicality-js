'use strict';

const SEMITONES_PER_OCTAVE = 12;
const CENTS_PER_SEMITONE = 100;
const CENTS_PER_OCTAVE = SEMITONES_PER_OCTAVE * CENTS_PER_SEMITONE;
const BASE_FREQ = 16.351597831287414; // Frequency of C0

class Pitch {
  constructor(octave, semitone, cents=0)
  {
    this.totalCents = (octave * SEMITONES_PER_OCTAVE + semitone) * CENTS_PER_SEMITONE + cents;

    // Actual octave, semitone, and cents determined from total cents (in that order)
    var totalCentsRemaining = this.totalCents;
    this.octave = Math.floor(totalCentsRemaining / CENTS_PER_OCTAVE);
    totalCentsRemaining -= this.octave * CENTS_PER_OCTAVE;
    this.semitone = Math.floor(totalCentsRemaining / CENTS_PER_SEMITONE);
    totalCentsRemaining -= this.semitone * CENTS_PER_SEMITONE;
    this.cents = totalCentsRemaining;
  }

  get ratio(){
    return Math.pow(2.0,this.totalCents / CENTS_PER_OCTAVE);
  }

  get freq(){
    return this.ratio * BASE_FREQ;
  }
}

module.exports.Pitch = Pitch;
