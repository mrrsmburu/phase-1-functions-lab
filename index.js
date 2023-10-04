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
  
  function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  
  function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; 
    } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }