import React from 'react'
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import '../App.css';




const Treatments = (props) => {
    return (
        <Form.Group>
            <Form.Control as="select" size="lg" defaultValue="DEFAULT">
            <option value="DEFAULT" disabled>Select your option</option>

                <option value="1">X-Ray</option>
                <option value="2">Blood test</option>
                <option value="3">Physical Examination</option>
            </Form.Control>
            <br />
            <Form.Control as="select" size="lg" defaultValue="DEFAULT">
            <option value="DEFAULT" disabled>Select your option</option>
                <option value="1">Blood test</option>
                <option value="2">X-Ray</option>
                <option value="3">Physical Examination</option>
            </Form.Control>
            <br />
            <button className="button" type="submit">Add another treatment</button>
        </Form.Group>
    )
}

export default Treatments