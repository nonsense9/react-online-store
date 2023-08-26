import styles from './Footer.module.scss';
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

export const Footer = () => {
    return <footer
        className={`
           bg-success bottom-0 w-100 pt-2 position-relative`}
    >
        <Container className={`${styles.footer} pt-2 pb-1`}>
            <Row className=" justify-content-center">
                <Col xs={3}>Hallo handy</Col>
                <Col xs={6}><Row>
                    <Col>
                        <h5>Menu</h5>
                        <ul>
                            <li>Services</li>
                            <li>Shop</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Useful Links</h5>
                    </Col>
                    <Col>
                        <h5>Contact Us</h5>
                    </Col>
                </Row></Col>
                <Col xs={3}>
                    <h5>Social Network</h5>
                </Col>
            </Row>
        </Container>
        <hr style={{
            color: "#bdbdbd",
            backgroundColor: "#bdbdbd"
        }}/>
        <div className="d-flex text-center">
            <Container className={`${styles.copyright}`}>
                <Link to={''}>Privacy Policy</Link>/
                <Link to={''}>Consumer Protection</Link>/
                <Link to={''}>Cookies</Link>
                <div>
                   Ⓒ 2023 hallo-handy.de - All rights reserved. Powered by @alx_cky LTD.
                </div>
            </Container>
        </div>
    </footer>
}
