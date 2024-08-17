// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
//   console.log("Started");
//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse = planetsReturned;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
//    })

  let form = this.document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert("form submitted");

    // grab 4 inputs then pass into formSubmission
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("input[name=fuelLevel]");
    let cargo = document.querySelector("input[name=cargoMass]");


    //grab list 
    let list = document.getElementById("faultyItems");

    formSubmission(document, list, pilot, copilot, fuel, cargo);

  });
});
