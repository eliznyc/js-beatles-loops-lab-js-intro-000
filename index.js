// add solution here
const musicians = ('john', 'paul', 'george', 'ringo');
const instruments = ('guitar', 'guitar', 'bass', 'drums');

function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (let i = 0; i < 4; i++) {band.push(musicians[i] + ` plays ` + instruments[i]) }
    return band;
}
