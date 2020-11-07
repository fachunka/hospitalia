import React from 'react'
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';



const Treatments = (props) => {
    return (
        <Form.Group>
            <Form.Control as="select" size="lg">
                <option>X-Ray</option>
                <option>Blood test</option>
                <option>Physical Examination</option>
            </Form.Control>
            <br />
            <Form.Control as="select" size="lg">
                <option>Blood test</option>
                <option>X-Ray</option>
                <option>Physical Examination</option>
            </Form.Control>
            <br />
            <Button type="submit">Add another treatment</Button>
        </Form.Group>
    )
}

export default Treatments