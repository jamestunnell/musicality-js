'use strict';

class Note {
  constructor(duration, pitches=[])
  {
  	if (duration <= 0)
  	{
  	  throw new RangeError(`duration ${duration} is not positive`);
  	}
  	
  	this.duration = duration;
  	this.pitches = new Set();

  	if (Array.isArray(pitches)) {
      for (let p of pitches) {
      	this.pitches.add(p);
  	  }
    }
    else {
      this.pitches.add(pitches);
  	}
  }
}

module.exports = Note;