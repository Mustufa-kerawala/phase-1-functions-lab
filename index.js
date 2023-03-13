// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let blocks = 42 - someValue;
  return Math.abs(blocks);
}

function distanceFromHqInFeet(someValue) {
  let feet = 264 * distanceFromHqInBlocks(someValue);
  return feet;
}

function distanceTravelledInFeet(start, destination) {
  let feet = 264 * Math.abs(start - destination);
  return feet;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    let price;
    if (feet <= 400) {
      price = 0;
      return price;
    }
    else if (feet > 400 && feet <= 2000) {
        price = (feet - 400) * 0.02;
        return price;
    }
    else if (feet > 2000 && feet <= 2500) {
        price = 25;
        return price;
    }
    else if (feet > 2500) {
        price = 'cannot travel that far';
        return price;
    }

}