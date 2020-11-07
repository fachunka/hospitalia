import React from 'react'
import Button from 'react-bootstrap/Button';


const PersonForm = (props) => {
    return (
        <form onSubmit={props.addName}>
            <div>
                name:
          <input
                    value={props.newName}
                    onChange={props.handleNameChange}
                />
                <Button type="submit">add</Button>

            </div>
            <div>
            </div>
        </form>
    )
}

export default PersonForm