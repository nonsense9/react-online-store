import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer
      className={`${styles.footer} bottom-0 w-100 pt-5 position-relative`}
    >
      <Container className={`pt-2 pb-1`}>
        <Row className=" justify-content-center">
          <Col xs={3}>
            <Col>
              <Image src="src/assets/images/logo.svg" />
            </Col>
            <Col xs={6} className="my-3">
              <p className="text-white">
                For the best offers sign up for the Our Newsletter
              </p>
            </Col>

            <Col xs={8}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                  className="bg-transparent"
                  size="sm"
                />
                <Button variant="btn bg-white" id="button-addon2">
                  Send
                </Button>
              </InputGroup>
            </Col>
          </Col>
          <Col xs={6}>
            <Row>
              <Col>
                <h5 className="text-white pb-2">Menu</h5>
                <ul className="d-flex flex-column gap-3">
                  <Link className="d-block text-white" to={''}>
                    Services
                  </Link>
                  <Link className="d-block text-white" to={''}>
                    Shop
                  </Link>
                  <Link className="d-block text-white" to={''}>
                    Blog
                  </Link>
                  <Link className="d-block text-white" to={''}>
                    Contact
                  </Link>
                </ul>
              </Col>
              <Col>
                <h5 className="text-white pb-2">Useful Links</h5>
                <ul className="d-flex flex-column gap-3">
                  <Link className="d-block text-white" to={''}>
                    Services
                  </Link>
                  <Link className="d-block text-white" to={''}>
                    Shop
                  </Link>
                  <Link className="d-block text-white" to={''}>
                    Blog
                  </Link>
                  <Link className="d-block text-white" to={''}>
                    Contact
                  </Link>
                </ul>
              </Col>
              <Col>
                <h5 className="text-white pb-2">Contact Us</h5>
                <p className="text-white">
                  Germania (Konstans) Radolfzeller Str. 24 78467 Konstanz
                </p>
                <p>
                  <a href="tel:+49(0)75318049494">+49 (0) 7531 8049494</a>
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={3}>
            <Col className="d-flex flex-column align-items-end">
              <h5 className="text-white pb-2">Social Network</h5>
              <Col className="d-flex gap-3">
                <i
                  className="pi pi-facebook"
                  style={{ fontSize: '1.5rem', color: '#fff' }}
                ></i>
                <i
                  className="pi pi-instagram"
                  style={{ fontSize: '1.5rem', color: '#fff' }}
                ></i>
                <i
                  className="pi pi-twitter"
                  style={{ fontSize: '1.5rem', color: '#fff' }}
                ></i>
              </Col>
            </Col>
          </Col>
        </Row>
        <hr
          style={{
            color: '#bdbdbd',
            backgroundColor: '#bdbdbd',
          }}
        />
      </Container>

      <div className="d-flex text-center">
        <Container className={`${styles.copyright}`}>
          <Link to={''} className="text-white">
            Privacy Policy
          </Link>
          <span className="text-white px-3">/</span>
          <Link to={''} className="text-white">
            Consumer Protection
          </Link>
          <span className="text-white px-3">/</span>
          <Link to={''} className="text-white">
            Cookies
          </Link>
          <div className="my-2">
            <p style={{ color: '#d1d3d4', fontSize: 9 }}>
              Ⓒ 2023 hallo-handy.de - All rights reserved. Powered by @alx_cky
              LTD.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
