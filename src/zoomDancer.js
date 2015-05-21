var makeZoomDancer = function(top,left,timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('zoomDancer');
  this.$node.prepend('<img class="spidermanImg" src="dancergifs/spidey.gif" />');
};

makeZoomDancer.prototype = Object.create(makeDancer.prototype);

makeZoomDancer.prototype.constructor = makeZoomDancer;

makeZoomDancer.prototype.step = function(){
  // var imgWidth = this.$node.width();
  // var imgHeight = this.$node.height();
  // this.$node.toggle();
  // debugger;
  // this.$node.toggle()
  this.$node.animate({
    width: 300, //2x width, 2x height
    height: 300
    // time
  }, this.timeBetweenSteps/2);

  this.$node.animate({
    width: 100,// .5 width, .5 height
    height: 100
    // time
  }, this.timeBetweenSteps/2);

  makeDancer.prototype.step.call(this);
};
