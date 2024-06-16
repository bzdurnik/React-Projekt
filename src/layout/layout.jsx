/*import React from 'react';*/
// @charset UTF-8

import { Container, Navbar, Nav, NavDropdown, Button, Form, Offcanvas, Image, Row, Col } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '/src/App.css';

export function Layout() {
    return (
        <div className="app">
            <Navbar bg="dark" variant="dark" expand="lg" className="sticky-header">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand>
                            <Link to="/" className="d-block">
                                <Image src="/src/images/logo-1.png" className="logo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Offcanvas
                            id="offcanvasNavbar-expand"
                            aria-labelledby="offcanvasNavbarLabel-expand"
                            placement="start"
                            style={{ width: '300px' }} // Dostosowanie szerokości offcanvas
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="me-auto">
                                    <NavDropdown title="Rozwijak" id="offcanvasNavbarDropdown-expand">
                                        <NavDropdown.Item href="#action3">Webinary</NavDropdown.Item>
                                        <NavDropdown title="Dalej" id="nested-nav-dropdown" className="dropdown-submenu">
                                            <NavDropdown.Item href="#newLectures">Najnowsze wykłady</NavDropdown.Item>
                                            <NavDropdown.Item href="#oldLectures">Stare wykłady</NavDropdown.Item>
                                            <NavDropdown.Item href="#englishLectures">Wykłady po angielsku</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown.Item href="#action5">Prelekcje</NavDropdown.Item>
                                        <NavDropdown.Item href="#action6">Pokazy</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#allEvents">Wszystkie wydarzenia</NavDropdown.Item>
                                    </NavDropdown>

                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Szukaj: kursu, tematu, lekcji"
                                            className="me-2 custom-input"
                                            style={{ minWidth: '250px' }}
                                            aria-label="Szukaj"
                                        />
                                        <Button variant="outline-danger">Szukaj</Button>
                                    </Form>
                                </Nav>

                                <Nav>
                                    <Nav.Link>
                                        <Link to="/rozwoj" className="d-block">Ścieżki rozwoju</Link>
                                    </Nav.Link>
                                    <NavDropdown title="Testy" id="testy">
                                        <NavDropdown.Item>
                                            <Link to="/kompetencji" className="d-block">Kompetencji</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link to="/towary" className="d-block">Umiejętności</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link to="/towary" className="d-block">Predyspozycji</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Kalendarz" id="offcanvasNavbarDropdown-expand">
                                        <NavDropdown.Item>
                                            <Link to="/webinary" className="d-block">Webinary</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link to="/prelekcje" className="d-block">Prelekcje</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link to="/wyklady" className="d-block">Wykłady</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#allEvents">Wszystkie wydarzenia</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link>
                                        <Link to="/" className="d-block">Fora</Link>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <Link to="/naczasie" className="d-block">Na czasie</Link>
                                    </Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="px-3">
                <Container fluid style={{ marginTop: '110px' }}>
                    <Outlet />
                </Container>
            </div>
            {/*   --------------------STOPKA ------------------*/}
            <footer className="bg-black text-white mt-5 py-3 ">
                <Container fluid>
                    <Row>
                        <hr className="separator" />
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className="center">
                            <div className="vertical-buttons">
                                <b className="nag4">Partnerzy</b>
                                <Button variant="link" className="custom-link">National Luis Uniwercity</Button>
                                <Button variant="link" className="custom-link">Ministerswto Edukacji</Button>
                                <Button variant="link" className="custom-link">Orlen S.A</Button>
                            </div>
                        </Col>
                        <Col className="center">
                            <div className="vertical-buttons">
                                <b className="nag4">O nas</b>
                                <Button variant="link" className="custom-link">Historia</Button>
                                <Button variant="link" className="custom-link">Artykuly prasowe</Button>
                                <Button variant="link" className="custom-link">Nagrody i wyruznienia</Button>
                                <Button variant="link" className="custom-link">Kariera u nas</Button>
                                <Button variant="link" className="custom-link">Ochrona informacji</Button>
                                <Button variant="link" className="custom-link">Regulamin</Button>
                                <Button variant="link" className="custom-link">Dane kontaktowe</Button>
                            </div>
                        </Col>
                        <Col className="center">
                            <div className="vertical-buttons">
                                <b className="nag4">Nasze media</b>
                                <Button variant="link" className="custom-link"><FaTwitter /> Twitter</Button>
                                <Button variant="link" className="custom-link"><FaInstagram /> Instagram</Button>
                                <Button variant="link" className="custom-link"><FaYoutube /> YouTube</Button>
                                <Button variant="link" className="custom-link"><FaLinkedin /> LinkedIn</Button>
                            </div>
                        </Col>
                        <Col className="center">
                            <div className="vertical-buttons">
                                <b className="nag4">Download</b>
                                <Button variant="link" className="custom-link">Link1</Button>
                                <Button variant="link" className="custom-link">Link2</Button>
                                <Button variant="link" className="custom-link">Link3</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Layout;
