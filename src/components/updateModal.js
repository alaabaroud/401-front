import React, { Component } from 'react'
import {Form, Modal, Button} from 'react-bootstrap'

export class updateModal extends Component {
    render() {
        return (
            <div>
                <Modal show= {this.props.show} onHide={this.props.showingModal}>
  <Modal.Header closeButton>
    <Modal.Title>Change </Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
  </Form.Group>
  <Form.Control size="lg" type="text" placeholder="Large text" />

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Control size="lg" type="text" placeholder="Large text" />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Control size="lg" type="text" placeholder="Large text" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
  </Modal.Footer>
</Modal>
            </div>
        )
    }
}

export default updateModal
