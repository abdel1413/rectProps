import React from "react";

//we pass Car compo into Garage compo
function Car(props) {
  return (
    <>
      <p> {props.brand} is the props coming from a function Garage</p>
      <p>
        {" "}
        Your {props.brand} is made on {props.year}
      </p>
      <p>
        Note: {props.year} is a variable pass locally inside Garage into a Car
        compo{" "}
      </p>
      <p> The make is{props.makeModel.make}</p>
      <p> The model is {props.makeModel.model}</p>
    </>
  );
}

function Garage2() {
  //if the Car comp does not have an attribute and we want to pass
  //one to it from another comp, (Garage21), we create a biding and
  //pass it in curly braces as Car attribute
  let caryear = "2020";
  //passing an object;
  let carInfo = {
    model: "Sienna",
    make: "Toyota",
  };
  return (
    <>
      <h2> this is Garage component</h2>
      <Car brand="Toyota" year={caryear} makeModel={carInfo} />
    </>
  );
}

export default Garage2;
