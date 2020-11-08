import React from 'react'
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import '../App.css';




const Treatments = (props) => {
    return (
        <Form.Group>
            <Form.Control as="select" size="lg">
            <option value="" disabled selected>Select your option</option>

                <option>X-Ray</option>
                <option>Blood test</option>
                <option>Physical Examination</option>
            </Form.Control>
            <br />
            <Form.Control as="select" size="lg">
            <option value="" disabled selected>Select your option</option>
                <option>Blood test</option>
                <option>X-Ray</option>
                <option>Physical Examination</option>
            </Form.Control>
            <br />
            <Button className="button" type="submit">Add another treatment</Button>
        </Form.Group>
    )
}

export default Treatments