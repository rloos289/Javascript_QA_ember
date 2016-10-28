import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateQuestion(params) {
       params = {
        question: this.get('question'),
        author: this.get('author'),
        comment: this.get('comment')
      };
      this.sendAction('updateQuestion', params);
    }
  }
});
