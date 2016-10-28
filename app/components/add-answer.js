import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addAnswer(params) {
       params = {
        question: this.get('question'),
        author: this.get('author'),
      };
      this.sendAction('updateQuestion', params);
      this.set('question', '');
      this.set('author', '');
    }
  }
});
