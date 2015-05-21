var lineUp = function(dancerList){
  var dancerHeight;
  var dancerWidth;
  var totalDancers = dancerList.length;
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  for(var i = 0; i<dancerList.length; i++){
    dancerHeight = dancerList[i].$node.height();
    console.log(dancerHeight);
    dancerHeight = (windowHeight * 0.70) - dancerHeight;
    console.log(dancerHeight);
    dancerWidth = (windowWidth / totalDancers) * i;
    dancerList[i].$node.animate({top: dancerHeight, left: dancerWidth}, 1000);
  }
};
