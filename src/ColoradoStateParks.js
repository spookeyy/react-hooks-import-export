import React from "react";
import howManyParks from "./parks/howManyParks";
import * as RMFunctions from "./parks/RockyMountain"

export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  console.log(RMFunctions.trees); //named export 'trees'
  console.log(RMFunctions.wildlife); //another named export
  // output => "Elk, Bighorn Sheep, Moose"
  
  return <h1>Colorado State Parks!</h1>;
}


