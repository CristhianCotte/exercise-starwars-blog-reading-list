// import { stringify } from "query-string";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const URL_BASE = "https://www.swapi.tech/api";
const CardsTow = ({ planetas, _id }) => {
    const { store, actions } = useContext(Context);
    return (
        <>

            <div className="card mx-2 " >
                <div className=" carta">
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{planetas.properties.name} </h4>
                        <p className="card-text">Population: {planetas.properties.population} </p>
                        <p className="card-text">Terrain: {planetas.properties.terrain} </p>
                        <div className="d-flex justify-content-between w-100">
                            <Link to={`/details/planets/${planetas.uid}`}><button type="button" className="btn btn-outline-primary">Read more</button></Link>


                           
                                <button onClick={() => actions.addFavorites(planetas._id)} type="button" className="btn btn-outline-warning" >
                                    <i className="fa-regular fa-heart"></i>
                                </button>
                            
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}

export default CardsTow;