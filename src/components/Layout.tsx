import { Col, Container, Row } from 'react-bootstrap';
import { Header } from './Header';
import { Footer } from './Footer/Footer.tsx';
import { products } from '../../data.json';
import { Breadcrumbs } from './Breadcrumbs.tsx';
import { Filters } from './Filters.tsx';
import { ProductCard } from './ProductCard.tsx';
import { Sale } from './Sale.tsx';
import { Paginate } from './Paginate.tsx';
import { SortBy } from './SortBy.tsx';

export const Layout = () => {
  return (
    <>
      <Sale />
      <Header />
      <Container className="min-vh-70 p-0">
        <Breadcrumbs />
        <Filters />
        <SortBy />
        <div className="d-flex justify-content-center h-100">
          <Row>
            {products.map((i, idx) => (
              <Col xs={3} key={idx} className="my-3">
                <ProductCard {...i} />
              </Col>
            ))}
          </Row>
        </div>
        <Paginate />
      </Container>
      <Footer />
    </>
  );
};
