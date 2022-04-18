// import { stringify } from "query-string";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const URL_BASE = "https://www.swapi.tech/api";
const CardsThree = ({ vehicles, _id }) => {
    const { store, actions } = useContext(Context);

    return (
        <>

            <div className="card mx-2 " >
                <div className=" carta">
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{vehicles.properties.name} </h4>
                        <p className="card-text">Manufacturer: {vehicles.properties.manufacturer} </p>
                        <p className="card-text">Model: {vehicles.properties.model} </p>
                        <div className="d-flex justify-content-between w-100">
                            <Link to={`/details/vehicles/${vehicles.uid}`}><button type="button" className="btn btn-outline-primary">Read more</button></Link>


                            
                                <button  onClick={() => actions.addFavorites(vehicles._id)} type="button" className="btn btn-outline-warning" >
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                           
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default CardsThree;