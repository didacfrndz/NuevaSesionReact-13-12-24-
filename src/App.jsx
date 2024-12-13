import React from "react";
import { Persona } from "./components/persona";
export default function App(){
  console.log("App");
  return(
    <>
      <h1>Sesion 6 App</h1>
      <div className="row">
          <div className="col">
            <Persona imgPersona="./public/melo.jpg" nombre="Lamelo Ball" /> 
          </div>
          <div className="col">
            <Persona imgPersona="./public/jokic.jpg" nombre="Nikola Jokic"/>
          </div>
          <div className="col">
            <Persona imgPersona="./public/leonard.jpg" nombre="Kawhi Leonard"/>
          </div>
      </div>
    </>
  )
}