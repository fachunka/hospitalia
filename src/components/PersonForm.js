import React from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";



const PersonForm = (props) => {
    return (
        <Form>
                <Form.Control
                    size="lg"
                    placeholder="Add a name"
                    value={props.person}
                    onChange={props.handleNameChange}
                />
            {/* <Button type="button" clasName="invisible" >add</Button> */}
        </Form>
    )
}

export default PersonForm