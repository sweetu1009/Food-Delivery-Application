import React, { useState, useEffect } from "react";
import Food from "./Food";

import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AllFood = () => {
    useEffect(() => {
        document.title = "All Food || Enjoy Food with Sheetal";
    });

    const getAllFoodFromServer = () => {
        axios.get(`${base_url}/food`).then(
            (response) => {

                console.log(response.data);
                toast.success("Food has been loaded", { position: "bottom-center" });
                setfood(response.data);
            },
            (error) => {
                console.log("Error");
                toast.error("Someting went wrong", { position: "bottom-center" });
            }
        );
    };
    useEffect(() => {
        getAllFoodFromServer();
    }, []);

    const [food, setfood] = useState([]);
    const UpdateFood = (id) => {
        setfood(food.filter((c) => c.id !== id));
    };
    return (
        <div>
            <h1>All Food</h1>
            <p>List of Food as follows</p>
            {food.length > 0
                ? food.map((item) => <Food key={item.id} food={item} />)
                : "No Food"}

        </div>
    );
};
export default AllFood;