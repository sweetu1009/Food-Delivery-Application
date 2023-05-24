import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AddFood = () => {
    useEffect(() => {
        document.title = "ADD FOOD || Enjoy Food with Sheetal";
    }, []);

    const [food, setfood] = useState({});

    const handleForm = (e) => {
        console.log(food);
        postDatatoServer(food);
        e.preventDefault();
    }
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/food`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Food added successfully", { position: "bottom-center" });
            },
            (error) => {
                console.log(error);
                console.log("error");
                toast.error("Somthing Went Wrong", { position: "bottom-center" });
            }
        );
    };

    return (
        <Fragment>
            
            <h1 ClassName="text-center my-3">ADD Your Favorite Food</h1>
            <Form onSubmit={handleForm}>

                <FormGroup>
                    <label for="foodId">Food Id</label>
                    <Input

                        Type="text"
                        placeholder="Enter Food ID here"
                        name="foodId"
                        Id="foodId"
                        onChange={(e) => {
                            setfood({ ...food,foodId: e.target.value });

                        }}
                    />

                </FormGroup>
                <FormGroup>
                    <label for="foodName">Food Name</label>
                    <Input

                        Type="text"
                        placeholder="Enter Food Name here"
                        name="foodName"
                        Id="foodName"
                        onChange={(e) => {
                            setfood({ ...food,foodName: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="foodQuantity">Food Quantity</label>
                    <Input
                        Type="text"
                        placeholder="Enter Quantity here"
                        Id="foodQuantity"

                        onChange={(e) => {
                            setfood({ ...food,foodQuantity: e.target.value });
                        }}
                    />

                </FormGroup>
                <FormGroup>
                    <label for="foodCost">Food Cost</label>
                    <Input
                        Type="text"
                        placeholder="Enter Food cost here"
                        Id="foodCost"

                        onChange={(e) => {
                            setfood({ ...food,foodCost: e.target.value });
                        }}
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Food </Button>{' '}
                    <Button type="reset" color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};
export default AddFood;