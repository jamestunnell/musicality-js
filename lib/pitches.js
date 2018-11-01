'use strict';

var Pitch = require('./pitch.js');

var SEMITONES_TO_PCS = {
  0: ["C"], 1: ["Cs", "Df"], 2: ["D"], 3: ["Ds", "Ef"], 4: ["E"], 5: ["F"], 
  6: ["Fs", "Gf"], 7: ["G"], 8: ["Gs", "Af"], 9: ["A"], 10: ["As", "Bf"], 11: ["B"]
};

for (var octave = 0; octave < 9; octave++) {
  for (var semitone in SEMITONES_TO_PCS) {
    SEMITONES_TO_PCS[semitone].forEach(function(pc) {
      var pitch_name = pc + String(octave);
      module.exports[pitch_name] = new Pitch(octave, semitone);
    });
  }
}
