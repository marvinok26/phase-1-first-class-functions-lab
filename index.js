// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  module.exports = {
    returnFirstTwoDrivers,
  };

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()];

module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
};

function createFareMultiplier(multiplier) {
    // Returning a new function that multiplies a given value by the provided multiplier
    return function (value) {
      return value * multiplier;
    };
  }
  
  // Export the function
  module.exports = {
    createFareMultiplier,
  };

  // Define the fareDoubler function
function fareDoubler(fare) {
    return fare * 2;
  }

  function fareTripler(fare) {
    return fare * 3;
  }

// Functions to be used
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  // Function to be tested
  function selectDifferentDrivers(arrayOfDrivers, selectingFunction) {
    return selectingFunction(arrayOfDrivers);
  }
  
  // Export the functions
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectDifferentDrivers,
  };