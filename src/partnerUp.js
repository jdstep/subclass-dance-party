var partnerUp = function(dancerList){
  //make copy of dancerList
  var copiedDancerList = dancerList.slice();
  var closestDancerIndex;
  var closestDancer;

  var findDistance = function(dancerA, dancerB){
    var positionA = dancerA.$node.position();
    var positionB = dancerB.$node.position();
    var distanceX = Math.abs(positionA.left - positionB.left);
    var distanceY = Math.abs(positionA.top - positionB.top);
    var hypo = Math.sqrt((distanceX*distanceX)+(distanceY*distanceY));
    return hypo;
  };

  var findClosestDancer = function(currentDancerIndex,copiedDancerList){
     var closestDistance = $(window).width();
     var closestDistanceIndex;
     var currentDistance;
     for(var i = currentDancerIndex+1; i<copiedDancerList.length; i++){
      currentDistance = findDistance(copiedDancerList[currentDancerIndex], copiedDancerList[i]);
      if(currentDistance<closestDistance){
        closestDistance = currentDistance;
        closestDistanceIndex = i;
      }
     }
     return closestDistanceIndex;
  };

  //iterate over copied list of dancers
  for(var i = 0; i<copiedDancerList.length; i++){
    //for each dancer, find closest dancer
      if(i < copiedDancerList.length-1){
        //make those dancers go close to each other
        closestDancerIndex = findClosestDancer(i, copiedDancerList);
        closestDancer = copiedDancerList[closestDancerIndex];
        console.log(closestDancer);
        copiedDancerList.splice(closestDancerIndex,1);

          //make them interact
        //splice the dancers out of the copied list of Dancers
      }
  }

};
