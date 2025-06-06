import react from "react";

let Nav = () => {

    return (
<nav className="navbar navbar-expand-md bg-dark">
  <div className="container-fluid text-center w-75">
    <a className="navbar-brand text-white ms-5" href="#">Start Boostrap</a>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-flex flex-row-reverse me-5">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Servis</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white px-2" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" aria-disabled="true">Home</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    );
    
};
export default Nav;
 <nav classNameName="navbar navbar-expand-lg bg-dark ">
  <div classNameName="container-fluid justify-content-center text-center w-75">
             <a classNameName="navbar-brand  text-white ms-5" href="#">Start Boostrap</a>
            <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span classNameName="navbar-toggler-icon"></span>
            </button>
    <div classNameName="collapse navbar-collapse text-white d-flex flex-row-reverse me-5" id="navbarNav">
          <a classNameName="nav-link disabled px-2" aria-disabled="true">Contact</a>
          <a classNameName="nav-link" href="#">Servis</a>
          <a classNameName="nav-link px-2" href="#">About</a>
          <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
    </div>
  </div>
</nav>
    
       

        
        
      