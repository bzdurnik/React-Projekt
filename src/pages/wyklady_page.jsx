import { useState } from 'react';
import Calendar from 'react-calendar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';
import '/src/Calendar.css';

export const Wyklady = () => {
    const [date, setDate] = useState(new Date());
    // przykładowe wydarzenia
    const events = [
        { date: new Date(2024, 5, 21), title: 'Wykład o sztucznej inteligencji', speaker: 'Dr Jan Kowalski', keyword: 'AI' },
        { date: new Date(2024, 5, 4), title: 'Historia starożytna', speaker: 'Prof. Anna Nowak', keyword: 'Historia' },
        { date: new Date(2024, 5, 15), title: 'Nowoczesna fizyka', speaker: 'Dr Tomasz Zieliński', keyword: 'Fizyka' },
        { date: new Date(2024, 4, 11), title: 'Wprowadzenie do biotechnologii', speaker: 'Dr Ewa Wiśniewska', keyword: 'Biotechnologia' },
        { date: new Date(2024, 4, 14), title: 'Matematyka dla zaawansowanych', speaker: 'Prof. Michał Lewandowski', keyword: 'Matematyka' },
        { date: new Date(2024, 4, 2), title: 'Podstawy chemii organicznej', speaker: 'Dr Anna Kaczor', keyword: 'Chemia' },
    ];

    const renderTileContent = ({ date, view }) => {
        if (view === 'month') {
            const event = events.find(event =>
                date.getFullYear() === event.date.getFullYear() &&
                date.getMonth() === event.date.getMonth() &&
                date.getDate() === event.date.getDate()
            );
            return (
                <div className="tile-content">
                    <span className="custom-date-number">{date.getDate()}</span>
                    {event && <div className="event-title">{event.keyword || event.title}</div>}
                </div>
            );
        }
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const event = events.find(event =>
                date.getFullYear() === event.date.getFullYear() &&
                date.getMonth() === event.date.getMonth() &&
                date.getDate() === event.date.getDate()
            );
            return event ? 'has-event' : null;
        }
    };

    return (
        <Container fluid style={{ backgroundColor: 'black', color: 'white' }}>
            <Container>
                <Row className="mt-5">
                    <h1 className="nag2">Kalendarz Wykładów</h1>
                </Row>
                <Row className="mt-4">
                    <Col md={4}>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group controlId="searchDateFrom">
                                        <Form.Label>Data od</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="searchDateTo">
                                        <Form.Label>Data do</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="searchTopic" className="mt-3">
                                <Form.Label>Szukaj po tematyce</Form.Label>
                                <Form.Control type="text" placeholder="Wprowadź tematykę" />
                            </Form.Group>
                            <Form.Group controlId="searchSpeaker" className="mt-3">
                                <Form.Label>Szukaj po prowadzącym</Form.Label>
                                <Form.Control type="text" placeholder="Wprowadź nazwisko prowadzącego" />
                            </Form.Group>
                            <Button variant="outline-danger" className="mt-3">Szukaj</Button>
                        </Form>
                    </Col>
                    <Col md={8}>
                        <Calendar
                            onChange={setDate}
                            value={date}
                            tileContent={renderTileContent}
                            tileClassName={tileClassName}
                            locale="pl-PL"
                            className="react-calendar"
                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                    NADCHODZĄCE WYDARZENIA
                </Row>
                <Row className="mt-3">
                    <Accordion defaultActiveKey={['null']} alwaysOpen className="dark-accordion">
                        <Accordion.Item eventKey="0" className="item">
                            <Accordion.Header>
                                <Col md="1.5">
                                    <Alert variant="danger" className="custom-alert">
                                        AI
                                    </Alert>
                                </Col>
                                <Col md="1.5">
                                    <Alert variant="danger" className="custom-alert">
                                        14.06.2024
                                    </Alert>
                                </Col>
                                <Col md="1.">
                                    <Alert variant="danger" className="custom-alert">
                                        10:00 - 12:00
                                    </Alert>
                                </Col>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col md="8">
                                        <Row>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Row>
                                        <Row>
                                            <Col md="3" className="mt-2 ms-auto">
                                                <Button variant="outline-danger">Zapisz się</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3">
                                        <Image src="/src/images/jan_kowalski.png" rounded />
                                        Dr Jan Kowalski
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="item">
                            <Accordion.Header>Historia starożytna</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
        </Container>
    );
};
