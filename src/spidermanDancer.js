var makeSpidermanDancer = function(top, left, timeBetweenSteps) {
  makeFaderDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spidermanDancer');
  this.$node.prepend('<img id="spidermanImg" src="dancergifs/spidey.gif" />');
}

makeSpidermanDancer.prototype = Object.create(makeFaderDancer.prototype);
makeSpidermanDancer.prototype.constructor = makeSpidermanDancer;

