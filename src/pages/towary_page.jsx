import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Towary = () => {
    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtrowanie listy</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj po nazwie</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj kat.</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Cegly</option>
                                            <option value="2">Wylewki</option>
                                            <option value="3">Farby</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Kod</th>
                        <th>Nazwa</th>
                        <th>Kategoria</th>
                        <th>PKWiU</th>
                        <th>Cena</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Towar 1</td>
                        <td>Kategoria 1</td>
                        <td>111</td>
                        <td>111</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Towar 2</td>
                        <td>Kategoria 2</td>
                        <td>222</td>
                        <td>222</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Towar 3</td>
                        <td>Kategoria 3</td>
                        <td>333</td>
                        <td>333</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    )
} 
