import { Button, Col, NavDropdown, Row } from 'react-bootstrap';
import { data } from '../../data.json';
import {useEffect, useState} from "react";

const filters: Filters[] = [
  {
    title: 'Brand',
    items: [
      { text: 'Apple', id: 0 },
      { text: 'Samsung', id: 1 },
    ],
  },
  {
    title: 'Price',
    items: [
      {
        text: '600 EUR',
        id: 0,
      },
      {
        text: '1600 EUR',
        id: 1,
      },
    ],
  },
  { title: 'Display', items: [] },
  { title: 'Memory', items: [] },
  { title: 'RAM', items: [
      {
        text: '6 GB',
        id: 0,
      },
      {
        text: '16 GB',
        id: 1,
      },
    ] },
  { title: 'Battery', items: [] },
  { title: 'Model', items: [] },
  { title: 'Nr.Sim', items: [] },
  { title: 'Refresh Rate', items: [] },
  { title: 'Color', items: [] },
  { title: 'Processor', items: [] },
  { title: 'Connection', items: [] },
  { title: 'Type of Display', items: [] },
  { title: 'NFC', items: [] },
  { title: 'Processor Model', items: [] },
];

export const Filters = ({ setProducts }) => {
  const [selectedCategory, setCategory] = useState<any>(null)
  const handleFilters = ({ text }, category) => {
    setCategory(category)

    const next = [...data];
    let res: any = [];

    switch (selectedCategory) {
      case 'Brand': {
        res = next.filter((i) => i.brand === text);
        break;
      }
      case 'Price': {
        res = next.filter((i) => i.price === text);
        break;
      }
      case 'RAM': {
        res = next.filter((i) => i.ram === text);
        break;
      }
      default: {
        res = [...data]
      }
    }
    setProducts(res);
  };

  const resetFilters = () => {
    setCategory(null);
    setProducts(data)
  }

  useEffect(() => {}, [])
  return (
    <Col>
      <Row className="mb-3">
        <h4>Smartphones</h4>
      </Row>
      <Row className="mb-2">
        <div className="d-flex flex-wrap">
          {filters.map(({ title, items }, idx) => (
            <div key={idx} className="filters__toggle">
              <NavDropdown
                title={title}
                key={idx}
                id={title}
                style={{ borderStyle: 'groove' }}
                className="py-2"
              >
                {items.map((item, idx) => (
                  <NavDropdown.Item
                    key={idx}
                    onClick={() => handleFilters(item, title)}
                  >
                    {item.text}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </div>
          ))}
        </div>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button onClick={resetFilters}>Reset</Button>
        </Col>
      </Row>
    </Col>
  );
};
