import react from "react";

let Nav = () => {

    return (
<div>
 <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid justify-content-center text-center w-75">
          <a className="navbar-brand  text-white ms-5" href="#">Start Boostrap</a>
    <div className="collapse navbar-collapse text-white d-flex flex-row-reverse me-5" id="navbarNav">
          <a className="nav-link disabled px-2" aria-disabled="true">Contact</a>
          <a className="nav-link" href="#">Servis</a>
          <a className="nav-link px-2" href="#">About</a>
          <a className="nav-link active" aria-current="page" href="#">Home</a>
    </div>
  </div>
</nav>
</div>
    );
    
};
export default Nav;
    
       

        
        
      