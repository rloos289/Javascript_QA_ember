import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    switchToUpdate(question) {
      this.sendAction('switchToUpdate', question);
    }
  }
});