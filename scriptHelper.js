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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let faultyItems = list;
  let pilotName = pilot.value;
  let copilotName = copilot.value;
  let fuel = fuelLevel.value;
  let cargo = cargoLevel.value;

  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let launchStatus = document.getElementById("launchStatus");

  let readyForLaunch = true;

  if (validateInput(pilotName) === "Not a Number") {
    pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
  } else {
    readyForLaunch = false;
    pilotStatus.innerHTML = "Pilot name is invalid";
    window.alert("Enter a valid input for pilot");
    
  }

  if (validateInput(copilotName) === "Not a Number") {
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
  } else {
    readyForLaunch = false;
    copilotStatus.innerHTML = "Copilot name is invalid";
    window.alert("Enter a valid input for copilot");
  }

  if (validateInput(fuel) === "Is a Number" && fuel > 10000) {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
  } else if (fuel < 10000) {
    readyForLaunch = false;
    fuelStatus.innerHTML = "There is not enough fuel for the journey";
  } else {
    window.alert("Enter a valid input for fuel");
  }

  if (validateInput(cargo) === "Is a Number" && cargo < 10000) {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  } else if (cargo > 10000) {
    readyForLaunch = false;
    cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
  } else {
    window.alert("Enter a valid input for cargo");
  }

  faultyItems.style.visibility = "visible";

  if (readyForLaunch === false) {
    launchStatus.innerHTML = "Shuttle Not Ready for launch";
    launchStatus.style.backgroundColor = "red";
  } else {
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.backgroundColor = "green";
  }
}

async function myFetch() {
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
