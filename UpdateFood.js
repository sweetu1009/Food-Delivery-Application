import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const UpdateFood = () => {
    useEffect(() => {
        document.name = "UPDATE Food ||Enjoy Food with Sheetal";
    }, []);
    const [food, setfood] = useState({});

    //form handler function
    const handleForm = (e) => {
        console.log(food);
        postDatatoServer(food);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/food`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Food Updated successfully", { position: "bottom-center" });
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Somthing Went Wrong ", { position: "bottom-center" });
            }
        );
    };


    return (
        <Fragment>
            <h1 className="text-center my-3">Update In your Food </h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="FoodId">Food Id</label>
                    <Input
                        Type="text"
                        placeholder="Enter Food ID here"
                        name="FoodId"
                        Id="FoodId"
                        onChange={(e) => {
                            setfood({ ...food,foodId: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="name">Food Name </label>
                    <Input
                        Type="text"
                        placeholder="Enter Food Name here"
                        name="foodName"
                        Id="foodName"
                        onChange={(e) => {
                            setfood({ ...food, foodName: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="quantity">Food Quantity</label>
                    <Input
                        Type="text"
                        placeholder="Enter Food Quantity here"
                        name="foodQuantity"
                        Id="foodQuantity"
                        
                        onChange={(e) => {
                            setfood({ ...food, foodQuantity: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="cost">Food Cost</label>
                    <Input
                        Type="text"
                        placeholder="Enter Food Cost here"
                        Id="foodCost"
                       name="foodCost"
                        onChange={(e) => {
                            setfood({ ...food,foodCost: e.target.value });
                        }}
                    />
                </FormGroup>
                <Container foodName="text-center">
                    <Button type="submit" color="success">Update Food</Button>{' '}
                    <Button type="reset" color="warning ml-2">  Clear  </Button>
                </Container>
            </Form>
        </Fragment>
    );

};
export default UpdateFood;
