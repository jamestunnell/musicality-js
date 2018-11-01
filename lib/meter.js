'use strict';

class Meter {
  constructor(beats_per_measure, beat_duration)
  {
  	if (beats_per_measure <= 0)
  	{
  		throw new RangeError(`beats per measure ${beats_per_measure} is not positive`);
  	}
  	
  	if (!Number.isInteger(beats_per_measure))
  	{
  		throw new TypeError(`beats per measure ${beats_per_measure} is not an integer`);
    }

  	if (beat_duration <= 0)
  	{
  		throw new RangeError(`beat duration ${beat_duration} is not positive`);
  	}
  	
  	this.beats_per_measure = beats_per_measure;
  	this.beat_duration = beat_duration;
  }
  
  get measure_duration(){
  	return this.beats_per_measure * this.beat_duration;
  }
}

module.exports = Meter;