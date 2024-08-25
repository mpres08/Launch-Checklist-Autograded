// Write your helper functions here!

require('isomorphic-fetch');
// require("cross-fetch/polyfill");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  const missionTarget = document.getElementById("missionTarget");

  missionTarget.innerHTML = `
   <h2>Mission Destination</h2>
      <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
      </ol>
      <img src="${imageUrl}">
  `; 
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

  let pilotStatus = document.getElementById("pilotStatus");
  let copilotStatus = document.getElementById("copilotStatus");
  let fuelStatus = document.getElementById("fuelStatus");
  let cargoStatus = document.getElementById("cargoStatus");
  let launchStatus = document.getElementById("launchStatus");

  let readyForLaunch = true;

  if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number") {
    readyForLaunch = false;
    pilotStatus.innerHTML = "Pilot name is invalid";
    alert("Enter a valid input for pilot");
  } else {
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
  }

  if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number") {
    readyForLaunch = false;
    copilotStatus.innerHTML = "Copilot name is invalid";
    alert("Enter a valid input for copilot");
  } else {
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
  }

  const fuelValidation = validateInput(fuelLevel);
  if (fuelValidation === "Is a Number" && fuelLevel >= 10000) {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
  } else if (fuelLevel <= 10000) {
    readyForLaunch = false;
    fuelStatus.innerHTML = "Fuel level too low for launch";
  } else {
    readyForLaunch = false;
    window.alert("Enter a valid input for fuel");
  }

  const cargoValidation = validateInput(cargoLevel);
  if (cargoValidation === "Is a Number" && cargoLevel <= 10000) {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  } else if (cargoLevel >= 10000) {
    readyForLaunch = false;
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
  } else {
    window.alert("Enter a valid input for cargo");
  }

  list.style.visibility = "visible";

  if (readyForLaunch === false) {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
  } else {
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "green";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
          if (response.status >= 400) {
              throw new Error ("Bad response");
          }
          else {
              return response.json();
          }
      });
  return planetsReturned;
}

function pickPlanet(planets) {
  const randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
