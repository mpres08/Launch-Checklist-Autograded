// const { pickPlanet, addDestinationInfo, formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
  console.log("Started");
   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets);
       console.log(selectedPlanet);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);

   });


  let form = this.document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("form submitted");

    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;
    //check code for this
    let copilot = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("input[name=fuelLevel]");
    let cargo = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");

    formSubmission(document, list, pilot, copilot, fuel, cargo);
  });
});
