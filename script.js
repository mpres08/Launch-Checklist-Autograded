// const { pickPlanet, addDestinationInfo, formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
  console.log("Started");

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
   }).then(function () {
       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);

   });


  let form = this.document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("form submitted");

    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;
    let fuelInput = document.querySelector("input[name=fuelLevel]");
    let fuel = fuelInput.value;
    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargo = cargoInput.value;
    let list = document.getElementById("faultyItems");

    formSubmission(document, list, pilot, copilot, fuel, cargo);
  });
});
