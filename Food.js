import axios from "axios";
import React from "react";

import { toast } from "react-toastify";
import {Card,CardBody,CardSubtitle,CardText,Button,Container,CardTitle} from "reactstrap";

import base_url from "../api/bootapi";

const Food=({food, update})=>{

    //delete Food
  const deleteFood=(id)=>{
    axios.delete(`${base_url}/food/${id}`).then(
      (response)=>{
        console.log(response.data);
        toast.success("Food deleted successfully");
        update(id);
      })
       .catch((success)=>{
        console.log(success);
        toast.success("Food deleted successfully");
      });
    
  }
  
  
    const handleForm=(e)=>{
        console.log(food);
        postDatatoServer(food);
        e.preventDefault();
    }
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/food`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Food deleted successfully",{position:"bottom-center"});
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Something went wrong",{position:"bottom-center"});
            }
        );
    };

    return(
        <Card className="text-center">
        <CardBody>
        <CardSubtitle className="font-weight-bold">{food.foodName}</CardSubtitle>
        <CardText>{food.foodQuantity}</CardText>
        <Container className="text-center">
        <Button color="danger" onClick={()=>
        {
            deleteFood(food.foodId);
        }}>Delete</Button>{' '}

        <Button color="warning ml-5" type="submit" href="/update-food">update</Button>
        </Container>
        </CardBody>
        </Card>

        );
};
export default Food;