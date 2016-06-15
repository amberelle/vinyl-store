import DS from 'ember-data';

export default DS.Model.extend({
    artist: DS.attr(),
    album: DS.attr(),
    year: DS.attr(),
    genre: DS.attr(),
    cost: DS.attr()


});
