import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        comment: this.get('comment')
      };
      this.sendAction('saveQuestion', params);
      this.set('question','');
      this.set('author','');
      this.set('comment','');
    }
  }
});
