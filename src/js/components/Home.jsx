import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Nav from "./nav";
import Jumbotron from "./jumbotron";
import Card from "./card";

//create your first component
const Home = () => {
	return (
<div className="conteiner">
   <div className="d-flex justify-content-center">
	  <Jumbotron/>
    </div>
  <div className="row justify-content-center align-items-start my-4">
    <div className="col-lg-2 col-sm-7">
      <Card/>
    </div>
    <div className="col-lg-2 col-sm-7">
      <Card/>
    </div>
	<div className="col-lg-2 col-sm-7">
      <Card/>
    </div>
    <div className="col-lg-2 col-sm-7">
     <Card/>
    </div>
  </div>
  </div>
	);
};

export default Home;