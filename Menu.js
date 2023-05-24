import React from "react";
import { link } from "react-router-dom";
import { ListGroup,ListGroupItem } from "reactstrap";
const Menu=()=>{
    return(
        <ListGroup>
            <ListGroupItem tag="a" href="/Home">Home</ListGroupItem>
            <ListGroupItem tag="a" href="/add-food">Add Food</ListGroupItem>
            <ListGroupItem tag="a" href="/update-food">Update Food</ListGroupItem>
            <ListGroupItem tag="a" href="/view-food">View All Food</ListGroupItem>
            <ListGroupItem tag="a" href="/About-us">About Us</ListGroupItem>
            <ListGroupItem tag="a" href="/Contact">Contact</ListGroupItem>
        </ListGroup>
    );

};
export default Menu;