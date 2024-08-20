const { pickPlanet, addDestinationInfo, formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
  console.log("Started");
   let listedPlanets;
   let listedPlanetsResponse = planetsReturned;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       formSubmission();
       myFetch();
       pickPlanet();
       addDestinationInfo();
   })

  let form = this.document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("form submitted");

    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("input[name=fuelLevel]");
    let cargo = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");

    formSubmission(document, list, pilot, copilot, fuel, cargo);
  });
});
