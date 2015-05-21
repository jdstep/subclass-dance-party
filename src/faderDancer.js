var makeFaderDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};

makeFaderDancer.prototype = Object.create(makeDancer.prototype);
makeFaderDancer.prototype.constructor = makeFaderDancer;

makeFaderDancer.prototype.step = function() {

  this.$node.fadeIn();

  makeDancer.prototype.step.call(this);

  this.$node.fadeOut();
};
