var makeSpidermanDancer = function(top, left, timeBetweenSteps) {
  makeFaderDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spidermanDancer');
  this.$node.prepend('<div class="flippy"><img class="spidermanImg" src="dancergifs/spidey.gif" /></div>');
};

makeSpidermanDancer.prototype = Object.create(makeFaderDancer.prototype);
makeSpidermanDancer.prototype.constructor = makeSpidermanDancer;

