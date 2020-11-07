import React from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";



const PersonForm = (props) => {
    return (
        <Form onSubmit={props.addName}>
            <div>
                <h5>Add a Name: </h5>
                <input placeholder="Add a name"
                    value={props.newName}
                    onChange={props.handleNameChange}
                />
                <Button type="submit">add</Button>
            </div>
            <div>
            </div>
        </Form>
    )
}

export default PersonForm