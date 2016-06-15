import Ember from 'ember';

var records = [{
  artist: "Louis Armstrong",
  album: "Hot Fives",
  year: 1940,
  genre: "Jazz",
  cost: 20

},{
  artist: "Etta James",
  album: "At Last",
  year: 1960,
  genre: "Blues",
  cost: 20

},{
  artist: "Elton John",
  album: "Yellow Brick Road",
  year: 1970,
  genre: "Pop",
  cost: 20
}];

export default Ember.Route.extend({
  model(){
    return this.store.findAll('record');
  }
});
