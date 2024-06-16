import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Pracownicy = () => {

    return (
        <Container fluid>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Filtry</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Filtruj po nazwisko</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Filtruj po stanowisku</Form.Label>
                                        <Form.Select>
                                            <option>Wybierz</option>
                                            <option value="1">Stanowisko1</option>
                                            <option value="2">Stanowisko2</option>
                                            <option value="3">Stanowisko3</option>
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
                        <th>Id</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Stanowisko</th>
                        <th>Wynagrodzenie netto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Imie1</td>
                        <td>Nazwisko1</td>
                        <td>Stanowisko1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Imie2</td>
                        <td>Nazwisko2</td>
                        <td>Stanowisko2</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Imie3</td>
                        <td>Nazwisko3</td>
                        <td>Stanowisko3</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    )
}
