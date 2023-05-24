import { Container, Button, Card, CardTitle, CardBody } from "reactstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./image/Banner.jpg";
import "./HomeStyle.css";
const AboutUs = () => {
    useEffect(() => {
        document.title = "ABOUT US || Bestselling Food Delivery";
    }, []);
    return (

        <div >

            <Card foodName="text-center" border="success" >
                <CardBody>
                    <CardTitle>ABOUT US </CardTitle>
                    <p>
                    As an on-demand food delivery application allows your customers to get delivered their ordered foods in the convenience of their home, office or whereever they are.
                    </p>

                    <Container foodName="text-center">
                    
                        
                            
                        
                    </Container>
                </CardBody>
            </Card>
        </div>

    );

};
export default AboutUs;