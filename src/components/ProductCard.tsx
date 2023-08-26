import { Card, Col, Row } from 'react-bootstrap';

export const ProductCard = ({
  imageSrc,
  title,
  display,
  camera,
  ram,
  sim,
  price,
}) => {
  return (
    <Card className="w-100">
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`${display} | ${camera} | ${ram} | ${sim}`}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col>
            <h5>{price}</h5>
          </Col>
          <Col>
            <Card.Link href="#">Favorite</Card.Link>
            <Card.Link href="#">Compare</Card.Link>
            <Card.Link href="#">Cart</Card.Link>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
