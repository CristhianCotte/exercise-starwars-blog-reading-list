// import { stringify } from "query-string";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
const URL_BASE = "https://www.swapi.tech/api";
const Cards = ({ persona, _id } ) => {
    const { store, actions } = useContext(Context);
	
    // }
    return (
        <>
           
            <div className="card mx-2 " >
                <div className=" carta">
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h4 className="card-title">{persona.properties.name} </h4>
                        <p>Gender: {persona.properties.gender} </p>
                        <p>Hair color: {persona.properties.hair_color} </p>
                        <p>Eye color: {persona.properties.eye_color} </p>
                        <div className="d-flex justify-content-between w-100">
                            <Link to={`/details/people/${persona.uid}`} ><button type="button" className="btn btn-outline-primary">Read more</button></Link>


                            <button  onClick={() => actions.addFavorites(persona._id)} className="btn btn-outline-warning" >
                                <i className="fa-regular fa-heart"></i>
                            </button>

                        </div>
                    </div>
                </div>
              
                {/* <div className="card" >
                            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{personas.name} </h5>
                                <p className="card-text"> {personas.uid} </p>
                                <div className="justify-content-between">
                                    <Link to="/details"><button type="button" className="btn btn-outline-primary">Read more</button></Link>


                                    <Link to="/home">
                                        <button type="button" className="btn btn-outline-warning" >
                                        <i className="fa-regular fa-heart"></i>
                                         </button>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
            </div>



        </>
    )
}

export default Cards;