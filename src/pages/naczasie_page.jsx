import React from 'react';
import { Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

export const Naczasie = () => {
    return (
        <div>
            <Row>
                <h2 className="nag3">Popularne Kursy ostatnich 30 dni:</h2>
            </Row>
            <Row className="mt-3">
                <Col className="center mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/wojciech.png" />
                        <Card.Body>
                            <Card.Title className="center2">Wojciech Bobak</Card.Title>
                            <Card.Text>
                                Były agent mosadu prowadzi wykład o najlepszych
                                metodach infiltrowania komputerów przeciwnika.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Cyberbezpieczeństwo</ListGroup.Item>
                            <ListGroup.Item>Biały wywiad</ListGroup.Item>
                            <ListGroup.Item>Inżynieria</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            <Button variant="outline-secondary" disabled>12 godzin</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="center mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/joanna.png" />
                        <Card.Body>
                            <Card.Title className="center2">Joanna Kaczor</Card.Title>
                            <Card.Text>
                                Szef kuchni z nagrodzoną restauracją nauczy uczestników,
                                jak przygotować autentyczne włoskie dania, krok po kroku.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Gotowanie</ListGroup.Item>
                            <ListGroup.Item>Kuchnia włoska</ListGroup.Item>
                            <ListGroup.Item>Sztuka kulinarna</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            <Button variant="outline-secondary" disabled>8 godzin</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="center mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/hiroshi.png" />
                        <Card.Body>
                            <Card.Title className="center2">Hiroshi Tanaka</Card.Title>
                            <Card.Text>
                                Ekspert w dziedzinie robotyki poprowadzi warsztaty,
                                w trakcie których uczestnicy zaprogramują własnego robota.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Automatyzacja</ListGroup.Item>
                            <ListGroup.Item>Programowanie</ListGroup.Item>
                            <ListGroup.Item>Technologia</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            <Button variant="outline-secondary" disabled>10 godzin</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="center mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/janusz.png" />
                        <Card.Body>
                            <Card.Title className="center2">Janusz Nowicki</Card.Title>
                            <Card.Text>
                                Profesjonalny fotograf podzieli się swoimi sekretami
                                na temat uchwycenia idealnych portretów w naturalnym świetle.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Portrety</ListGroup.Item>
                            <ListGroup.Item>Prezentacja</ListGroup.Item>
                            <ListGroup.Item>Fotografia artystyczna</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            <Button variant="outline-secondary" disabled>6 godzin</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="center mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/damian.png" />
                        <Card.Body>
                            <Card.Title className="center2">Damian Zając</Card.Title>
                            <Card.Text>
                                Specjalista w dziedzinie elektroniki zaprezentuje,
                                jak samodzielnie skonstruować prosty system alarmowy do domu.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Systemy alarmowe</ListGroup.Item>
                            <ListGroup.Item>DIY elektronika</ListGroup.Item>
                            <ListGroup.Item>Bezpieczeństwo domowe</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            <Button variant="outline-secondary" disabled>9 godzin</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="center mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/karolina.png" />
                        <Card.Body>
                            <Card.Title className="center2">Karolina Pawlak</Card.Title>
                            <Card.Text>
                                Ekspert ogrodnictwa miejskiego pokaże, jak założyć własny ogródek na balkonie,
                                niezależnie od dostępnej przestrzeni.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Ogrody miejskie</ListGroup.Item>
                            <ListGroup.Item>Zielone przestrzenie</ListGroup.Item>
                            <ListGroup.Item>Uprawa roślin</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            <Button variant="outline-secondary" disabled>5 godzin</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="center mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/pawel.png" />
                        <Card.Body>
                            <Card.Title className="center2">Paweł Wróbel</Card.Title>
                            <Card.Text>
                                Znany ekolog poprowadzi warsztaty na temat
                                tworzenia domowych systemów do kompostowania, promując ekologiczny styl życia.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Kompostowanie</ListGroup.Item>
                            <ListGroup.Item>Ekologiczny styl życia</ListGroup.Item>
                            <ListGroup.Item>Zrównoważony rozwój</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            <Button variant="outline-secondary" disabled>7 godzin</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="center mt-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/lukas.png" />
                        <Card.Body>
                            <Card.Title className="center2">Lucas Garcia</Card.Title>
                            <Card.Text>
                                Inżynier z wieloletnim doświadczeniem w branży
                                lotniczej poprowadzi wykład o projektowaniu dronów.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Lotnictwo</ListGroup.Item>
                            <ListGroup.Item>Technologia</ListGroup.Item>
                            <ListGroup.Item>Projektowanie</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            <Button variant="outline-secondary" disabled>15 godzin</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5">
                <h2 className="nag3">Sugestie Kursów:</h2>
            </Row>
            <Row className="mt-3">
                <Col>
                    <p className="center">
                        Nasze kursy są projektowane z myślą o Tobie! Sprawdź nasze rekomendacje i znajdź kursy, które mogą Cię zainteresować.
                        Kursy z zakresu psychologii, rozwoju osobistego, zarządzania czasem i wiele więcej. Zostań mistrzem w wybranej dziedzinie, rozwijaj swoje umiejętności i zdobywaj nowe kompetencje z naszymi rekomendacjami.
                    </p>
                </Col>
            </Row>
            <Row className="mt-5">
                <h2 className="nag3">Liczba Odwiedzin:</h2>
            </Row>
            <Row className="mt-3">
                <Col className="center">
                    <p className="center">Nasza platforma ma już ponad 1,000,000 odwiedzin! Dziękujemy za zaufanie. Dołącz do naszej rosnącej społeczności i zacznij swoją przygodę z nauką już dziś. Odkryj, dlaczego tysiące użytkowników wybierają naszą platformę do rozwoju osobistego i zawodowego.</p>
                </Col>
            </Row>
            <Row className="mt-5">
                <h2 className="nag3">Popularni Wykładowcy:</h2>
            </Row>
            <Row className="mt-3">
                <Col className="center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/popular_lecturer.png" />
                        <Card.Body>
                            <Card.Title className="center2">Dr. Anna Kowalska</Card.Title>
                            <Card.Text>
                                Specjalistka w dziedzinie psychologii, prowadzi kursy z zakresu rozwoju osobistego i psychologii pozytywnej. Z jej kursów skorzystało już tysiące zadowolonych uczestników.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button variant="outline-danger">Zobacz Profil</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/popular_lecturer2.png" />
                        <Card.Body>
                            <Card.Title className="center2">Prof. Jan Nowak</Card.Title>
                            <Card.Text>
                                Ekspert w dziedzinie nauk ścisłych, jego kursy z fizyki i matematyki cieszą się ogromną popularnością. Jego podejście do nauczania sprawia, że skomplikowane zagadnienia stają się proste i zrozumiałe.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button variant="outline-danger">Zobacz Profil</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/images/popular_lecturer3.png" />
                        <Card.Body>
                            <Card.Title className="center2">Marta Zielińska</Card.Title>
                            <Card.Text>
                                Doświadczona trenerka personalna, prowadzi kursy z zakresu fitnessu, zdrowego stylu życia oraz jogi. Pomogła wielu osobom osiągnąć ich cele zdrowotne i fizyczne.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button variant="outline-danger">Zobacz Profil</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

