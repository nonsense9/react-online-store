import { Col, Container, Form, Nav, NavDropdown, Row } from 'react-bootstrap';
import { data } from '../../data.json';

export const Header = ({ setProducts }) => {
  //TODO Add debounce function
  const handleSearch = (event) => {
    const next = [...data];
    const res: any = [];
    next.map((item) => {
      if (
        item.title.toLowerCase().includes(event.target.value) ||
        item.brand.toLowerCase().includes(event.target.value)
      ) {
        res.push(item);
      }
    });
    setProducts(res);
  };

  return (
    <>
      <Container>
        <Row className="py-3">
          <Col xs={2}>
            <Nav
              className="me-auto my-2 my-lg-0 d-flex justify-content-end"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
          <Col xs={5}>
            <Form
              className="d-flex"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearch}
              />
            </Form>
          </Col>
          <Col xs={5} className="d-flex flex-column justify-content-center">
            <Row>
              <Col>
                <Row>
                  <Col>
                    <a href="tel:+49(0)75318049494" style={{ fontSize: '3vh' }}>
                      +49 (0) 7531 8049494
                    </a>
                  </Col>
                  <Col>
                    <a>Repair Service</a>
                  </Col>
                </Row>
              </Col>
              <Col>Icons</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <hr
        style={{
          color: '#bdbdbd',
          backgroundColor: '#bdbdbd',
        }}
        className="p-0 m-0"
      />
    </>
  );
};
