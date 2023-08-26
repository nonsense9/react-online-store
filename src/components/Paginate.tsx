import { Button, Col, Pagination, Row } from 'react-bootstrap';

export const Paginate = () => {
  return (
    <Row className="my-3">
      <Col>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Col>
      <Col className="d-flex justify-content-center">
        <Button>Load More</Button>
      </Col>
      <Col className="d-flex justify-content-end">
        Per Page: 1-12(Total: 25)
      </Col>
    </Row>
  );
};
