import React, { useContext } from "react";
import Cards from "./Cards.jsx";
import { Context } from "../store/appContext.js";
import CardsTow from "./CardsTow.jsx";
import CardsThree from "./CardsThree.jsx"
const URL_BASE = "https://www.swapi.tech/api";

const StarWars = () => {
  const { store } = useContext(Context);

  return (
    <>
   
      <h1>People </h1>
      <div className="container scroll p-3 ">
      
        <div className="d-flex">
        {/* {store.favorites.map((item, index) => (
                <div
                    key={index}
                    className="items-list col-12 contador">
                    <div className="row">
                        <div className="col-8">
                            <p>{item} </p>
                        </div>
                    </div>
                </div>
            ))} */}
          {store.people.map((personas) => (
            <Cards key={`${personas.uid}${personas.properties.name}`} persona={personas} />
          ))
          }

        </div>
      </div>
      <h1>Planets </h1>
      <div className="container scroll p-3">
      
        <div className="d-flex">

          {store.planets.map((planet) => (
            <CardsTow key={`${planet.uid}${planet.properties.name}`}  planetas={planet} />
          ))
          }
        </div>
      </div>
      <h1>Vehicles </h1>
      <div className="container scroll p-3 mb-5">
      <div className="d-flex">

          {store.vehicles.map((vehicle) => (
            <CardsThree key={`${vehicle.uid}${vehicle.properties.name}`} vehicles={vehicle} />
          ))
          }

        </div>
      </div>
    </>
  )
}

export default StarWars;