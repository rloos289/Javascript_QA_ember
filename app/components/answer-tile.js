import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleAnswer(answer) {
      this.sendAction('toggleAnswer', answer);
    }
  }
});
