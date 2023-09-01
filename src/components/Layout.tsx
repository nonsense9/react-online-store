import { Col, Container, Row } from 'react-bootstrap';
import { Header } from './Header';
import { Footer } from './Footer/Footer.tsx';
import { data } from '../../data.json';
import { Breadcrumbs } from './Breadcrumbs.tsx';
import { Filters } from './Filters.tsx';
import { ProductCard } from './ProductCard.tsx';
import { Sale } from './Sale.tsx';
import { Paginate } from './Paginate.tsx';
import { SortBy } from './SortBy.tsx';
import { useState } from 'react';

export const Layout = () => {
  const mutatePriceToInt = data.map((i) => {
    return {
      ...i,
      price: Number(i.price),
    };
  });
  const [products, setProducts] = useState(mutatePriceToInt);

  return (
    <>
      <Sale />
      <Header setProducts={setProducts} />
      <Container className="min-vh-70 p-0">
        <Breadcrumbs />
        <Filters setProducts={setProducts} />
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
        <Paginate totalProductCount={products.length} />
      </Container>
      <Footer />
    </>
  );
};
