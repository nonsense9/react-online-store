import { Button, Col, FormLabel, NavDropdown, Row } from 'react-bootstrap';
import { data } from '../../data.json';
import { useEffect, useState } from 'react';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import { Filter, Item } from '../models';

const filters: Filter[] = [
  {
    label: 'Brand',
    items: [
      { text: 'Apple', id: 0 },
      { text: 'Samsung', id: 1 },
      { text: 'Nokia', id: 1 },
    ],
  },
  {
    label: 'Price',
    items: [
      {
        text: 600,
        id: 0,
      },
      {
        text: 1600,
        id: 1,
      },
      {
        text: 9600,
        id: 2,
      },
    ],
  },
  { label: 'Display', items: [] },
  { label: 'Memory', items: [] },
  {
    label: 'RAM',
    items: [
      {
        text: '6 GB',
        id: 0,
      },
      {
        text: '16 GB',
        id: 1,
      },
      {
        text: '36 GB',
        id: 2,
      },
    ],
  },
  { label: 'Battery', items: [] },
  { label: 'Model', items: [] },
  { label: 'Nr.Sim', items: [] },
  { label: 'Refresh Rate', items: [] },
  { label: 'Color', items: [] },
  { label: 'Processor', items: [] },
  { label: 'Connection', items: [] },
  { label: 'Type of Display', items: [] },
  { label: 'NFC', items: [] },
  { label: 'Processor Model', items: [] },
];

export const Filters = ({ setProducts }) => {
  const [selectedCategory, setCategory] = useState<any>({
    brand: [],
    price: [],
    ram: [],
  });

  //TODO Refactor to work without bugs, right now it brokes when you select couple options in the same category
  const handleFilters = ({ text }, category) => {
    setCategory((prevState) => ({
      ...prevState,
      [category]: prevState[category].includes(text)
        ? prevState[category].filter((i) => i !== text)
        : [...prevState[category], text],
    }));
  };

  const resetFilters = () => {
    setCategory(null);
    setProducts(data);
  };

  useEffect(() => {
    const categories = (Object.keys(selectedCategory) as (keyof Item)[]).filter(
      (key) => selectedCategory[key].length !== 0,
    );

    if (categories.length === 0) {
      setProducts(data);
      return;
    }

    const filtered = data.filter((item: Item) => {
      for (const cat of categories) {
        return selectedCategory[cat].includes(item[cat]);
      }
    });

    setProducts(filtered);
  }, [selectedCategory]);

  return (
    <Col>
      <Row className="mb-3">
        <h4>Smartphones</h4>
      </Row>
      <Row className="mb-2">
        <div className="d-flex flex-wrap">
          {filters.map(({ label, items }, idx) => (
            <div key={idx} className="filters__toggle">
              <NavDropdown
                title={label}
                key={idx}
                id={label}
                style={{ borderStyle: 'groove' }}
                className="py-2"
              >
                {items.map((item, idx) => (
                  <div key={idx}>
                    <FormLabel>{item.text}</FormLabel>
                    <FormCheckInput
                      multiple
                      name={item.text as string}
                      onChange={() => handleFilters(item, label.toLowerCase())}
                    ></FormCheckInput>
                  </div>
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
