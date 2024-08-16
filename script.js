// Write your JavaScript code here!

const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  console.log("Started");
  // let listedPlanets;
  // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  // let listedPlanetsResponse;
  // listedPlanetsResponse.then(function (result) {
  //     listedPlanets = result;
  //     console.log(listedPlanets);
  // }).then(function () {
  //     console.log(listedPlanets);
  //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  // })

  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("form sumbitted");

    // grab 4 inputs then pass into formSubmission
    let pilot = document.querySelector("input[name=pilotName]");

    console.log("Pilot input field:", pilot);

    if (pilot) {
        let pilotName = pilot.ariaValueMax;
        console.log("Pilot's name:", pilotName);
    } else {
        console.log("Pilot input field not found");
    };
    
    let copilot = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("input[name=fuelLevel]");
    let cargo = document.querySelector("input[name=cargoMass]");


    //grab list 
    let list = document.getElementById("faultyItems");

    formSubmission(document, list, pilot, copilot, fuel, cargo);

  });
});
