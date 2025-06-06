import React from "react";
import foto from  "../../img/foto.jpg";

let Card = () => {
    return (
  
  <div className="card text-center" >
    <p > <img src={foto} className="card-img-top" />  </p>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <div className="btn-sm d-flex justify-content-center bg-light">
    <a className="btn btn-primary m-3">Go somewhere</a>
  </div>
  </div>
    );
};
export default Card;

