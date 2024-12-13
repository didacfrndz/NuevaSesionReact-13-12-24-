/* eslint-disable react/prop-types */
import React from "react"
export function Persona({imgPersona, nombre}){
    return(
        <>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={imgPersona} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
        
    )
}