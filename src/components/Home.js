import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row, Col,Button, } from 'react-bootstrap'
import axios from 'axios';
// import { withAuth0 } from '@auth0/auth0-react';

class Home extends React.Component {
constructor(props){
  super(props)
  this.state = {
    flowers : [],
  }
}

componentDidMount(){
  const url = 'http://localhost:3010/getFlowers'
  axios
  .get(url)
  .then (result => {
    this.setState ({
      flowers: result.data
     
    })
  }).catch (err=> console.log(err));
  
}



addToFav =(index => {
  const addflower = {
    photo: this.state.flowers[index].photo,
    instructions: this.state.flowers[index].instructions,
    name: this.state.flowers[index].name,

  }
const url = 'http://localhost:3010/postFlowers'
axios 
.post(url, addflower )
.then (res=> {

}).catch();
})
  render() {
    return (
      <>
      
        <h1>API Flowers</h1>
        <Row xs={1} md={3} className="g-4">
  {this.state.flowers.length > 0 &&
  this.state.flowers.map((flower, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={flower.photo} />
        <Card.Body>
          <Card.Title>{flower.name}</Card.Title>
          <Card.Text>
            {flower.instructions}
          </Card.Text>
          <Button variant="primary" onClick= {()=> this.addToFav(idx)}>add to favorite </Button>

        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

      </>
    )
  }
}

export default Home;
