import Ember from 'ember';


export default Ember.Route.extend({
  model(){
    return this.store.findAll('record');
  },

  actions: {
    saveNewRecord3(params) {
      var newRecord = this.store.createRecord('record', params);
      newRecord.save();
      this.transitionTo('index');
    }
  }
});
