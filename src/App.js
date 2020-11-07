import './App.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation, Route, Screen, Link, glide } from "react-tiger-transition";
import { Container, Row, Col} from "react-bootstrap";

import PersonForm from './components/PersonForm.js'
import Treatments from './components/Treatments.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-tiger-transition/styles/main.min.css";




const App = () => {

  // Variables
  const [newName, setNewName] = useState('')
  const [person, setPerson] = useState('')


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


  const addName = (event) => {

    // Prevents default action (reloading the page on form submission)
    event.preventDefault()

    if(newName === ''){
      alert(`No name added`)
    }
    else {
      setPerson(newName)
      setNewName('')
      console.log(person);
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    <Router>
      <div className="portrait">
        <div className="turn">
          <img src="hospitalia/img/phone-rotate-landscape.svg" alt="Rotate icon" />
          <p>Please rotate your phone</p>
        </div>
      </div>
      <div className="landscape">
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
                backgroundColor: "#ffa000",
                ...screenStyle
              }}>
              <Container>
                <Row>
                  {/* <Col xs={{ span: 9, offset: 1 }}> */}
                  <h1>Create an adventure for your child.</h1>
                  {/* </Col> */}
                </Row>
                <Row className="mt-3 mb-3">
                  <Col xs={{ span: 9, offset: 1 }}>
                    <PersonForm
                      addName={addName}
                      newName={newName}
                      handleNameChange={handleNameChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Link to="/a" transition='glide-left' className="btn btn-primary ml-auto" type="button">Next</Link>
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
                backgroundColor: "#6655bb",
                ...screenStyle
              }}>
            <Container>
                <Row>
                  <h1>Select {person}'s upcoming treatments</h1>
                </Row>
                <Row className="mt-3 mb-3">
                  <Treatments/>
                </Row>
                <Row>
                  <Link to="/" transition='glide-right' className="btn btn-primary mr-auto" type="button">Back</Link>
                  <Link to="/b" transition='glide-left' className="btn btn-primary ml-auto" type="button">Next</Link>
                </Row>
              </Container>
            </Screen>
          </Route>

          <Route exact path="/b">
            {/* Screen is just a div container
              with some basic style */}
            <Screen
              style={{
                backgroundColor: "#ffa0bb",
                ...screenStyle
              }}>
              {/* Use Link the same way you use
                react-router Link, but
                add transition */}
              <Container>
                <Row>
                  <h1>Create an adventure for your child.</h1>
                </Row>
                <Row className="mt-3 mb-3">
                </Row>
                <Row>
                  <Link to="/a" transition='glide-right' className="btn btn-primary mr-auto" type="button">Back</Link>
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
