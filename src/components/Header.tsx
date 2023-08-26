import {Col, Container, Form, Nav, NavDropdown, Row} from "react-bootstrap";

export const Header = () => {
    return <Container>
        <Row className="row">
            <Col xs={2}>
                <Nav
                    className="me-auto my-2 my-lg-0 d-flex justify-content-end"
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <NavDropdown title="Categories" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Col>
            <Col xs={5}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </Form>
            </Col>
            <Col xs={5}>
                <Row>
                    <Col xs={6}>
                        <a>+3637347347373</a>
                        <a>Repair Service</a>
                    </Col>
                    <Col xs={6}>
                        Icons
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
}
