var partnerUp = function(dancerList){
  //make copy of dancerList
  var copiedDancerList = dancerList.slice();
  var closestDancerIndex;
  var closestDancer;
  var pairedDancers = [];

  // finds distance between two dancers
  var findDistance = function(dancerA, dancerB){
    var positionA = dancerA.$node.position();
    var positionB = dancerB.$node.position();
    var distanceX = Math.abs(positionA.left - positionB.left);
    var distanceY = Math.abs(positionA.top - positionB.top);
    var hypo = Math.sqrt((distanceX*distanceX)+(distanceY*distanceY));
    return hypo;
  };

  // takes in a dancer's index and iterates through the rest of the dancers
  // returns the index of the closest dancer
  var findClosestDancer = function(currentDancerIndex, copiedDancerList){
     var closestDistance = $(window).width();
     var closestDistanceIndex;
     var currentDistance;
      // compares given dancer to the rest of the list
      // starting from the next dancer on the list
     for(var i = currentDancerIndex+1; i<copiedDancerList.length; i++){
        // calculates distance between passed in dancer and next dancer on list
      currentDistance = findDistance(copiedDancerList[currentDancerIndex], copiedDancerList[i]);
        // if the distance calculated on the current iteration is closer than the previous closest
      if(currentDistance<closestDistance){
        // assign closest distance to current distance
        closestDistance = currentDistance;
        // store index of closest dancer
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

        // push a tuple of the pair (the closest dancers) into a storage for the paired dancers
        pairedDancers.push([copiedDancerList[closestDancerIndex], copiedDancerList[i]]);

        //splice the paired dancer out of the copied list of Dancers
        copiedDancerList.splice(closestDancerIndex,1);

      } else {
        pairedDancers.push(copiedDancerList[i]);
      }
  }

  // give new positions for the paired dancers
  partnerUpMove(pairedDancers);
};
