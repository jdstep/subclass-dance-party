var partnerUpMove = function(dancers){
  //tuple arrays
  var dancerAHeight;
  var dancerBHeight;
  var dancerAWidth;
  var dancerBWidth;
  var randomHeight;
  var randomWidth;
  var totalDancers = dancers.length;
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  for(var i = 0; i<dancers.length; i++){
    // uses a random number within a range of the window height
    randomHeight = Math.floor(Math.random()*(windowHeight*0.5 - windowHeight*0.3) + windowHeight*0.3);
    randomWidth = $("body").width() * Math.random();

    dancerAHeight = dancers[i][0].$node.height();
    dancerBHeight = dancers[i][1].$node.height();

    dancerAWidth = dancers[i][0].$node.width();
    dancerBWidth = dancers[i][1].$node.width();

    dancerAHeight = randomHeight - dancerAHeight;
    dancerBHeight = randomHeight - dancerBHeight;

    dancerBWidth = randomWidth + dancerAWidth + 20;
    dancerAWidth = randomWidth;

    // changes the position of individual dancers by accessing their node
    dancers[i][0].$node.animate({top: dancerAHeight, left: dancerAWidth}, 1000);
    dancers[i][1].$node.animate({top: dancerBHeight, left: dancerBWidth}, 1000);
  }
};
