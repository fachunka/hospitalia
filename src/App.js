import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";
import { Container, Row, Col } from "react-bootstrap";
import StartButton from './img/start_button.png'
import GearButton from './img/gear_button.png'
import CoinBg from './img/coins_background.png'


import PersonForm from './components/PersonForm.js'
import Treatments from './components/Treatments.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-tiger-transition/styles/main.min.css";



const App = () => {

  // Variables
  // const [newName, setNewName] = useState('')
  const [person, setPerson] = useState('')
  const [isActive, setActive] = useState("false");


  // inject glide styles
  glide({
    name: 'glide-left',
    direction: 'left',
    opacity: 0.5
  });
  glide({
    name: 'glide-right',
    direction: 'right',
    opacity: 0.5
  });

  const screenStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${"./hospitalia/img/GH_bg_v01.png"})`,
    backgroundSize: "cover"
  };

  // you will need to set the height of  <Navigation /> wrapper,
  // in this case, it is the root node,
  // better to do this on your stylesheet
  document.getElementById("root").style.height = "100vh";

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setPerson(event.target.value)
  };

  const handleMove = () => {
    console.log('hi');
    setActive(!isActive);
  };


  return (
    <Router>
      <div className="portrait">
        <div className="turn">
          <img src="/hospitalia/img/phone-rotate-landscape.svg" alt="Rotate icon" />
          <p>Please rotate your phone</p>
        </div>
      </div>
      <div className="landscape">
        <div className={isActive ? "imageActive" : "image"} >
        </div>
        {/* BrowserRouter from react-router-dom */}

        {/* Context provider for transitions */}
        <Navigation>
          {/* Use Route the same way you use
            react-router Route with children */}
          <Route exact path="/">
            {/* Screen is just a div container
              with some basic style */}
            <Screen
              style={{
                backgroundColor: "#ccc",
                ...screenStyle
              }}>
              <Container>
                <Row>
                  <Col xs={{ span: 10, offset: 1 }} className="text-center">
                    <h1>Create an adventure for your child.</h1>
                  </Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col xs={{ span: 10, offset: 1 }} className="text-center">
                    <PersonForm
                      handleNameChange={handleNameChange}
                    />
                    <br />
                    <Link to="/a" transition='glide-left' className="button" type="button">Next</Link>
                  </Col>
                </Row>
              </Container>
              {/* Use Link the same way you use
                react-router Link, but
                add transition */}
            </Screen>
          </Route>

          <Route exact path="/a">
            <Screen
              style={{
                backgroundColor: "#ccc",
                ...screenStyle
              }}>
              <Container>
                <Row>
                  <Col className="text-center">
                    <h1>Select {person}'s upcoming treatments</h1>
                  </Col>
                </Row>

                <Row className="mt-3 mb-3">
                  <Col xs={{ span: 3 }} className="text-center">
                    <Link to="/" transition='glide-right' className="leftarrow" type="button"></Link>
                  </Col>
                  <Col xs={{ span: 6 }} className="text-center">
                    <Treatments />
                  </Col>
                  <Col xs={{ span: 3 }} className="text-center">
                    <Link to="/b" transition='glide-left' className="rightarrow" type="button"></Link>
                  </Col>
                </Row>
              </Container>
            </Screen>
          </Route>

          <Route exact path="/b">
            {/* Screen is just a div container
              with some basic style */}
            <Screen
              style={{
                backgroundColor: "#ccc",
                ...screenStyle
              }}>
              {/* Use Link the same way you use
                react-router Link, but
                add transition */}
              <Container>
                <Row>
                  <Col xs={{ span: 10, offset: 1 }} className="text-center">
                    <h1>Ready to start the journey with {person}?</h1>
                    <br />
                    <Link to="/c" transition='glide-left' type="button" className="button" onClick={handleMove}>  Start </Link>
                  </Col>
                </Row>
              </Container>
            </Screen>
          </Route>





          <Route exact path="/d">
            {/* Screen is just a div container
              with some basic style */}
            <Screen
              style={{
                backgroundColor: "#ccc",
                ...screenStyle
              }}>
              {/* Use Link the same way you use
                react-router Link, but
                add transition */}
              <Container>
                <Row className="fixed-top">
                  <Col xs={{ span: 2 }} className="text-center">
                    <Link to="/c" transition='glide-right' type="button">  <img src={GearButton}/></Link>
                  </Col>
                  <Col xs={{ span: 8}} className="text-center">
                  </Col>
                  <Col xs={{ span: 2 }} className="text-center">
                <div class="coins">21
                </div>
                  </Col>
                </Row>
                <Row>
                <Col xs={{ span: 10, offset: 1 }} className="text-center">
                    <h1>Hi {person}</h1>
                    <br />
                  </Col>
                </Row>
                <Row className="fixed-bottom">
                  <Col xs={{ span: 2 }} className="text-center">
                    <Link to="/c" transition='glide-right' type="button" class="tshirt">  </Link>
                  </Col>
                  <Col xs={{ span: 10}} className="text-center">
                  </Col>
              
                </Row>


              </Container>
            </Screen>
          </Route>
        </Navigation>
      </div>
    </Router>

  );
}

export default App;
