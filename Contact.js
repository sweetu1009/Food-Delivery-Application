import { Container, Button, Card, CardTitle, CardBody } from "reactstrap";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "./image/Banner.jpg";
import "./HomeStyle.css";
const Contact = () => {
    useEffect(() => {
        document.title = "Contact || Enjaoy food with Sheetal";
    }, []);
    return (

        <div >

            <Card foodName="text-center" border="success" >
                <CardBody>
                    <CardTitle>Contact</CardTitle>
                    <p>
                        
                        Helpline:
                        Our Help to Claim helpline number is: 0800 023 2581. 
                        Please note, our helpline is open Monday to Saturday, 10am-11pm. Calls to this number are free.
                       
                    </p>

                    <Container foodName="text-center">
                    
                        
                            
                        
                    </Container>
                </CardBody>
            </Card>
        </div>

    );

};
export default Contact;