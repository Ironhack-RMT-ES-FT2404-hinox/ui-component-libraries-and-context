import { Link } from 'react-router-dom'

import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookList() {
  return (
    <div>
      
      <h1>Book List</h1>

      <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>

        <Card style={{width: "200px"}}>
          <Card.Img src={img1} alt="cover" width={120} height={200}/>
          <Card.Body>
            <Card.Title>Book1</Card.Title>
            <Card.Text>Lorem ipsum, dolor sit amet</Card.Text>
            <Link to="/book/details/1">
              <Button>See Book 1</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{width: "200px"}}>
          <Card.Img src={img2} alt="cover" width={120} height={200}/>
          <Card.Body>
            <Card.Title>Book2</Card.Title>
            <Card.Text>Lorem ipsum, dolor sit amet</Card.Text>
            <Link to="/book/details/2">
              <Button>See Book 2</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{width: "200px"}}>
          <Card.Img src={img3} alt="cover" width={120} height={200}/>
          <Card.Body>
            <Card.Title>Book3</Card.Title>
            <Card.Text>Lorem ipsum, dolor sit amet</Card.Text>
            <Link to="/book/details/3">
              <Button>See Book 3</Button>
            </Link>
          </Card.Body>
        </Card>

      </div>


    </div>
  )
}

export default BookList