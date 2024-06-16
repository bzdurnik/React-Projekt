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

export const Webinary = () => {
    const [date, setDate] = useState(new Date());
    // przykładowe wydarzenia
    const events = [
        { date: new Date(2024, 5, 14), title: 'Webinar o fotografii', speaker: 'Janusz Nowicki', keyword: 'Graphic design' },
        { date: new Date(2024, 5, 18), title: 'Domowy botoks', speaker: 'Joanna Kaczor', keyword: 'DIY beuty' },
        { date: new Date(2024, 5, 22), title: 'Warsztaty z robotyki', speaker: 'Hiroshi Tanaka', keyword: 'Akordeon od podstaw' },
        { date: new Date(2024, 4, 11), title: 'Webinar o fotografii', speaker: 'Janusz Nowicki', keyword: 'Nauka .CSS' },
        { date: new Date(2024, 4, 14), title: 'Kurs kulinarny', speaker: 'Joanna Kaczor', keyword: 'Kulimnaria' },
        { date: new Date(2024, 4, 2), title: 'Warsztaty z robotyki', speaker: 'Hiroshi Tanaka', keyword: 'Robotyka' },
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
                    <h1 className="nag5">Kalendarz Webinarów</h1>
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
                </Row >
                < Row className="mt-5">
                    NADCHODZĄCE WYDARZENIA
                </Row>
                <Row className="mt-3 ">
                    <Accordion defaultActiveKey={['null']} alwaysOpen className="dark-accordion" >
                        <Accordion.Item eventKey="0" className="item" >
                            <Accordion.Header >
                                <Col md="1.5" >
                                    <Alert variant="danger" className="custom-alert" >
                                        Robotyka
                                    </Alert>
                                </Col>
                                <Col md="1.5" >
                                    <Alert variant="danger" className="custom-alert" >
                                        02.05.2024
                                    </Alert>
                                </Col>
                                <Col md="1.">
                                    <Alert variant="danger" className="custom-alert" >
                                        14:00 - 16:00
                                    </Alert>
                                </Col>
                                {/*<Col md="1.5">*/}
                                {/*    <Alert variant="danger" className="custom-alert" >*/}
                                {/*        Hiroshi Tanaka*/}
                                {/*    </Alert>*/}
                                {/*</Col>*/}
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
                                        <Row >
                                            <Col md="3" className="mt-2 ms-auto " >
                                            <Button variant="outline-danger">Zapisz sie</Button>{' '}
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md="3">
                                        <Image src="/src/images/hiroshi.png" rounded />
                                        Hiroshi Tanaka
                                                
                             </Col>
                            
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="item">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
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
