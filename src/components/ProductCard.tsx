import {Card, ListGroup} from "react-bootstrap";

export const ProductCard = ({imageSrc, title}) => {
  return  <Card className="w-100">
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
          </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
  </Card>
}
