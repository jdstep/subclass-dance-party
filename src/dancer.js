var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  // this.$node.addClass('flippy');
  this.timeBetweenSteps = timeBetweenSteps;
  // invokes step at instantiation
  this.step();
  this.setPosition(top, left);
  this.width = this.$node.width();
  this.height = this.$node.height();
};

// takes in the context of the subclass object and invokes setTimeout
// we need to bind this.step so the this isn't the global object
// used to call another function later on after a given number of seconds
// setTimeout automatically invokes the subclass step method
makeDancer.prototype.step = function(){
  var context = this;

  // setTimeout.call(this, this.step.bind(this), this.timeBetweenSteps);
  setTimeout(function(){ context.step();}, this.timeBetweenSteps);


};

makeDancer.prototype.setPosition = function(top, left) {
  // debugger;
  var styleSetting = {
    top: top,
    left: left
  };
  this.$node.css(styleSetting);
};


// // Creates and returns a new dancer object that can step
// var makeDancerFunctional = function(top, left, timeBetweenSteps){

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');


//   dancer.step = function(){
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };

//   dancer.step();

//   dancer.setPosition = function(top, left){
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

