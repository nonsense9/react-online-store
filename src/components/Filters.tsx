import { Button, Col, NavDropdown, Row } from 'react-bootstrap';
import { splitArrayInPieces } from '../utils';

const filters: Filters[] = [
  {
    title: 'Brand',
    items: [
      { text: 'Apple', id: 0 },
      { text: 'Nokia', id: 1 },
    ],
  },
  { title: 'Price', items: [] },
  { title: 'Display', items: [] },
  { title: 'Memory', items: [] },
  { title: 'RAM', items: [] },
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

export const Filters = () => {
  const splitArrayInThreePieces = splitArrayInPieces(filters, 5);
  return (
    <Col>
      <Row className="mb-3">
        <h4>Smartphones</h4>
      </Row>
      <Row className="mb-2">
        {splitArrayInThreePieces[0].map(({ title, items }, idx) => (
          <Col key={idx}>
            <NavDropdown
              title={title}
              key={idx}
              id={title}
              style={{ borderStyle: 'groove' }}
              className="py-2"
            >
              {items.map((item, idx) => (
                <NavDropdown.Item key={idx} href={`${title}/${item.text}`}>
                  {item.text}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Col>
        ))}
      </Row>
      <Row className="mb-2">
        {splitArrayInThreePieces[1].map(({ title, items }, idx) => (
          <Col key={idx}>
            <NavDropdown
              title={title}
              key={idx}
              id={title}
              style={{ borderStyle: 'groove' }}
              className="py-2"
            >
              {items.map((item, idx) => (
                <NavDropdown.Item key={idx} href={`${title}/${item.text}`}>
                  {item.text}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Col>
        ))}
      </Row>
      <Row className="mb-2">
        {splitArrayInThreePieces[2].map(({ title, items }, idx) => (
          <Col key={idx}>
            <NavDropdown
              title={title}
              key={idx}
              id={title}
              style={{ borderStyle: 'groove' }}
              className="py-2"
            >
              {items.map((item, idx) => (
                <NavDropdown.Item key={idx} href={`${title}/${item.text}`}>
                  {item.text}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Col>
        ))}
      </Row>
      <Row>
        <Col className="d-flex justify-content-end">
          <Button>Reset</Button>
        </Col>
      </Row>
    </Col>
  );
};
