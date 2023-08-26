import {Col, Container, Row} from "react-bootstrap";
import {Header} from "./Header";
import {Footer} from "./Footer/Footer.tsx";
import {products} from '../../data.json';
import {Breadcrumbs} from "./Breadcrumbs.tsx";
import {Filters} from "./Filters.tsx";
import {ProductCard} from "./ProductCard.tsx";

export const Layout = () => {
    return <>
        <div className="row" style={{backgroundColor: "red"}}><p
            className="text-white text-center">Sale.....................</p>
        </div>
        <Container className="min-vh-70 p-0">
            <Header/>
            <Breadcrumbs/>
            <Filters/>
            <div className="d-flex justify-content-center h-100">
                <Container>
                    <Row>
                        {products.map((i, idx) => (<Col xs={3} key={idx} className="mx-auto">
                            <ProductCard {...i}/>
                        </Col>))}
                    </Row>
                </Container>
            </div>
        </Container>
        <Footer/>

    </>
}
