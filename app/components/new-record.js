import Ember from 'ember';

export default Ember.Component.extend({

  addNewRecord: false,
  actions: {
    selectGenre: function(selection) {
      this.set('genre', selection);
    },

    newRecordFormShow() {
      this.set('addNewRecord', true);
    },

    saveNewRecord1() {
      var params = {
        artist: this.get('artist'),
        album: this.get('album'),
        year: parseInt(this.get('year')),
        genre: this.get('genre'),
        cost: parseInt(this.get('cost')),
      };

      console.log(params);
      this.set('addNewRecord', false);
      this.sendAction('saveNewRecord2', params);
    }
  }
});
