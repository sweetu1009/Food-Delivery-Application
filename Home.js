import { Container, Button, Card, CardTitle, CardBody } from "reactstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./image/Banner.jpg";
import "./HomeStyle.css";
const Home = () => {
    useEffect(() => {
        document.title = "HOME || Enjaoy food with Sheetal";
    }, []);
    return (
        

        <div className="home" style={{ backgroundImage: `url(${Banner})` ,height:400, padding:20}}>
          <div className="headerContainer">
          <h3><b>Enjoy Food with Sheetal</b></h3>
            <p>
                         This Food App is developed by Sheetal for Food Delivery Service

                    </p>
                    
                    <Link to="/add-food">
                        <Button color="primary" outline> Start Ordering</Button>
                       
                        </Link>

                        </div>
            
        </div>

    );

};
export default Home;