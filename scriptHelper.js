// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
  if (isNaN(testInput)) {
    return "Not a Number";
  } else if (testInput === "") {
    return "Empty";
  } else {
    return "Is a Number";
  }
}

function formSubmission(
  document,
  list,
  pilot,
  copilot,
  fuelLevel,
  cargoLevel
) {
  list = document.getElementById("launchStatusCheck");

  if (validateInput(pilot) === "Not a Number"){
    console.log("pilot is not a number");
    let pilotStatus = document.getElementById("pilotStatus");
    let pilotName = document.getElementById("pilotName");
      if (pilotStatus && pilotName) {
        pilotStatus.innerHTML = `${pilotName.value} Ready`;
      } else {
        window.alert("pilotStatus or pilotName not found.");
      }   
  } else {
    console.log("need a valid input")
  }

  if (validateInput(copilot) === "Not a Number"){
    console.log("copilot is not a number");
    let copilotStatus = document.getElementById("copilotStatus");
    let copilotName = document.getElementById("copilotName");
      if (copilotStatus && copilotName) {
        copilotStatus.innerHTML = `${copilotName.value} Ready`;
      } else {
        window.alert("copilotStatus or copilotName not found");
      }  
  } else {
    window.alert("Enter a valid input")
  }

  if (validateInput(fuelLevel) === "Is a Number"){
    console.log("is a number");

    if (fuelLevel < 10000) {
      let faultyItems = document.getElementById("faultyItems");
      let fuelStatus = document.getElementById("fuelStatus");
      let launchStatus = document.getElementById("launchStatus");

      faultyItems.style.visibility = "visible";
      fuelStatus.innerHTML = "There is not enough fuel for the journey";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.backgroundColor = "red";
    } else {
      window.alert("Shuttle is ready to launch")
    }
  } else {
    window.alert("Enter a valid input")
  };


  if (validateInput(cargoLevel) === "Is a Number"){
    console.log("is a number")
    
    if (cargoLevel > 10000) {
      let cargoStatus = document.getElementById("cargoStatus");

      faultyItems.style.visibility = "visible";
      cargoStatus.innerHTML = "There is too much mass for the shuttle to take off.";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.backgroundColor = "red";
    } else {
      window.alert("Shuttle is ready to launch")
    }
  } else {
    window.alert("Enter a valid input")
  };
    
}

async function myFetch() {`~`
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
