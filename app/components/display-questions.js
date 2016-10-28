import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion(params) {
      this.sendAction('saveQuestion', params);
    }
  }
});
