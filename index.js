function distanceFromHqInBlocks(location) {
    const hq = 42;
    let distanceInBlocks = Math.abs(hq - location);
    return distanceInBlocks;
  }
  
  function distanceFromHqInFeet(location) {
    const blockInFeet = 264;
    let distanceInFeet = distanceFromHqInBlocks(location) * blockInFeet;
    return distanceInFeet;
  }
  
  function distanceTravelledInFeet(start, end) {
    const blockInFeet = 264;
    let distanceInFeet = Math.abs(start - end) * blockInFeet;
    return distanceInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const freeFeet = 400;
    const maxFeetWithoutExtraCharge = 2000;
    const extraChargePerFoot = 0.02;
    const maxFeetWithoutCharge = 2500;
  
    let distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= freeFeet) {
      return 0;
    } else if (distanceInFeet <= maxFeetWithoutExtraCharge) {
      return (distanceInFeet - freeFeet) * extraChargePerFoot;
    } else if (distanceInFeet <= maxFeetWithoutCharge) {
      return 25;
    } else {
      return 'cannot travel more than 2500 feet';
    }
  }