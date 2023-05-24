import React from "react";
import { Card, CardBody } from "reactstrap";


function Header({name,title})
{
    return(
    <div style ={ { background:" lightgreen" , height:250, padding:20}}>
     
     
        <CardBody>

          <h1 className="text-center my-5"> <b>Welcome To Food Delivery Application </b></h1>
          <h1 className="text-center my-5"> <b>* SHEETAL Restaurants * </b></h1>
          
        </CardBody>
     
  
    </div>
    );
}

export default Header;