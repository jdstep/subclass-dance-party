var makeLinkDancer = function(top, left, timeBetweenSteps) {
  makeBlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('linkDancer');
  this.$node.prepend('<div class="flippy"><img class="linkImg" src="dancergifs/link.gif" /></div>');
};

makeLinkDancer.prototype = Object.create(makeBlinkyDancer.prototype);
makeLinkDancer.prototype.constructor = makeLinkDancer;
