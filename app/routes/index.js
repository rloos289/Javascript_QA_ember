import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    if (!$.isEmptyObject(params)) {
      var answer = this.store.findRecord('answer',params.answer_id);
    }
    var model = Ember.RSVP.hash({
    question: this.store.findAll('question'),
    answers: this.store.findAll('answer'),
    answer: answer
  });
    return model
},
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    addAnswer(question, params) {
      var newAnswer = this.store.createRecord('answer', params);
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('index');
    },
    deleteAnswer(answer){
      answer.destroyRecord();
      this.transitionTo('index');
    },
    saveRating(rating, answer) {
      console.log(rating);
      // var currentAnswer = this.store.findRecord('answers', answer.answer_id);
      // console.log(this.model(function('answer'));
    },
  }
});

//
// saveQuestion(params) {
//   var newQuestion = this.store.createRecord('question', params);
//   newQuestion.save();
//   this.transitionTo('index');
// },
