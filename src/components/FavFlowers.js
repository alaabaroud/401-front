import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {Card, Row, Col,Button, } from 'react-bootstrap'


class FavFlowers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      FavFlowers :[],
      updateobj : {},
      showUpdateModal: false,
    }
  }


  componentDidMount(){
    const  url = 'http://localhost:3010/getFavFlowers'
    axios
    .get(url)
    .then (response => {
      this.setState ({
        FavFlowers: response.data
       
      })
    }).catch ();
    
  }
  showModal = (element) => {
    this.setState({
updateobj:element,
showUpdateModal : true

    })
  }

  deleteFlower= (id) => {
    const url = 'http://localhost:3010/deleteFlower'
    axios
    .delete (url)
    .then (response => {
      this.setState ({
        FavFlower : response.delete
      })
    }).catch ();
  }

  updateFlower = (e) => {
    const flowerId = this.state.updateobj._id 
    const body = {
      photo : e.target.photo.value,
      name: e.target.photo.name,
      instructions: e.target.photo.instructions
    }
    const url = 'http://localhost:3010/updateFlowers'
  axios
  .put(url, body)
  .then (response =>{
    const updateArray= this.state.FavFlowers.map (flower =>{
      if (flower._id === flowerId){
        flower.photo= response.data.photo
        flower.name= response.data.name
        flower.instructions= response.data.instructions
        return flower 
      

      }
      return flower
    });
    this.setState({
      FavFlowers: updateArray
    })
    this.showingModal({})
    this.setState({
      showUpdateModal: false
    }).catch (err=> alert (err))
  })
  }

  render() {
    return(
      <>
        <h1>My Favorite Flowers</h1>
        <Row xs={1} md={3} className="g-4">
  {this.state.FavFlowers.length > 0 &&
  this.state.FavFlowers.map((flower, id) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={flower.photo} />
        <Card.Body>
          <Card.Title>{flower.name}</Card.Title>
          <Card.Text>
            {flower.instructions}
          </Card.Text>
          <Button variant="primary" onClick= {()=> this.deleteFlower(flower-id)}>delete </Button>

        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
      </>
    )
  }
}

export default FavFlowers;
