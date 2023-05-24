import { Button, Container, Row, Col } from 'reactstrap';

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  RouterProvider
} from "react-router-dom";

import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AllFood from './Components/AllFood';
import AddFood from './Components/AddFood';
import Menu from './Components/Menu';
import UpdateFood from './Components/UpdateFood';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

function App() {
  const btnHandle = () => {
    toast.success("done", {
      position: "top-center",
    });
  };
  return (
    <div>

      <ToastContainer />
      <Header />
      <Container>
        <div className="row">
          <div className='mt-4'></div>
          <div className="col-4 col-md-4"><Menu /></div>
          <div className="col-8 col-md-8">
            <Router>
              <Routes>
                <Route path="/Home" element={<Home />} exact />

                <Route path="/add-food" element={<AddFood />} exact />

                <Route path="/view-food" element={<AllFood />} exact />

                <Route path="/update-food" element={<UpdateFood />} exact />

                <Route path="/About-Us" element={<AboutUs />} exact />

                <Route path="/Contact" element={<Contact />} exact />

              </Routes>
            </Router>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;