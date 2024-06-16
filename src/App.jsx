import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
/*import ExampleCarouselImage from 'react - bootstrap / Image';*/
import firstSlideImage from '/src/images/slider1.png';
import secondSlideImage from '/src/images/slider2.png';
import thirdSlideImage from '/src/images/slider3.png';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './images/EMH-3.png'
import backgroundImage1 from './images/EMH-4.png'
/*import Badge from 'react-bootstrap/Badge';*/
import './App.css';
function App() {
    const [isChecked, setIsChecked] = useState({
        'wyb 1': false,
        'wyb 2': false,
        'wyb 3': false,
        'wyb 4': false
    });

    const handleCheck = (event) => {
        setIsChecked({
            ...isChecked,
            [event.target.id]: event.target.checked
        });
    };

    const isAnyChecked = Object.values(isChecked).some(value => value);

    return (
        //  mozna dodać to:" style={{ backgroundColor: 'lightgrey' }} " do kontenera poniżej i ustawić tło
        // lub zrobić: " import backgroundImage from './images/tatata.png'; "
        // i wtedy:"" <Container fluid style={{ backgroundImage: `url(${backgroundImage})` }}>  "aby dodać grafike jako tło 
        <Container fluid >
            <Container justify-content-center>
                
                <Row>
                    <Col style={{ backgroundImage: `url(${backgroundImage1})` }}>
                        <Row>
                            <Row className="mt-5 nag2">
                                <h1>
                                    EDU MASTER HUB
                                </h1>
                                <h2 className="nag6">Uwolnij swoj potencjal</h2>
                            </Row>
                           
                            <Row className="mt-5 mb-5 nag1" >
                                <h2>
                                    CO CIE DZIS SPROWADZA?
                                </h2>
                            </Row>
             {/* ----------- ANKIETA  -----------------------------------------*/}
                            <Form>
                                <h5>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-1">
                                            <div className="chbox Alpha">
                                                <input type="checkbox" id="wyb1" onChange={handleCheck} />
                                                <label htmlFor="wyb1">
                                                    Rozwoj kompetencji zawodowych
                                                </label>
                                            </div>

                                            <div className="chbox">
                                                <input type="checkbox" id="wyb2" onChange={handleCheck} />
                                                <label htmlFor="wyb2">
                                                    Poprawa prac domowych
                                                </label>
                                            </div>

                                            <div className="chbox">
                                                <input type="checkbox" id="wyb3" onChange={handleCheck} />
                                                <label htmlFor="wyb3">
                                                    Artystyczne szukam inspiracji
                                                </label>
                                            </div>

                                            <div className="chbox">
                                                <input type="checkbox" id="wyb4" onChange={handleCheck} />
                                                <label htmlFor="wyb4">
                                                    Chce wypelnic wolny czas
                                                </label>
                                            </div>
                                            <div className="chbox Omega">
                                                <input type="checkbox" id="wyb5" onChange={handleCheck} />
                                                <label htmlFor="wyb5">
                                                    Cos innego
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </h5>
                            </Form>

                        </Row>
                        <Row>
                            <Col>
                                <Link to="/brak" className="d-block">
                                    <Button variant="outline-danger" className="mb-5 mt-2 nag3" disabled={!isAnyChecked}>
                                        <h3>Przekaż </h3>
                                    </Button>
                                </Link>
                            </Col>

                        </Row>
                    </Col>
                    <Col style={{ backgroundImage: `url(${backgroundImage})` }}>
                        
                    </Col>
                </Row>
            </Container>
            {/* ----------- KARUZELA  -----------------------------------------*/}
            <Row className="mt-1 ">
                <Col>
                    <Carousel interval={700} data-bs-theme="light" controls={false} indicators={false}>
                        <Carousel.Item>
                            <img src={firstSlideImage} className="d-block w-100" alt="First slide" />
                            <Carousel.Caption className="slid">
                                <h2>PASJA I KREATYWNOSC</h2>
                                <p>Inspiracje i motywacje dla twojej artstycznej strony.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={secondSlideImage} className="d-block w-100" alt="Second slide" />
                            <Carousel.Caption className="slid">
                                <h2>TECHNOLOGIA I INZYNIERIA</h2>
                                <p>Rozwin swoj zmysl techniczny, zawodowo i hobbystycznie.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={thirdSlideImage} className="d-block w-100" alt="Third slide" />
                            <Carousel.Caption className="slid">
                                <h2>POMYSLY DO REALIZACJI W DOMU</h2>
                                <p>Majsterkowicz czy pomysłowa Pani domu, kazdy znajdzie cos dla siebie</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Container>
                {/* ----------- KARTY  -----------------------------------------*/}
                <Row className="center mt-4">
                    ...
                </Row>
                <Row >
                    
                    <h2 className="center nag3">
                        NIE SZUKAJ DALEJ
                    </h2>
                    <Col>
                    ...
                    </Col>
                    <Col xs={8}>
                    <h3 className="mb-5 nag4" style={{ textAlign: 'justify' }}>
                        Rozwijaj swoje umiejętności z naszymi kursami online!
                        Wybierz spośród wielu tematów, ucz się w komfortowym
                        tempie i zdobądź nową wiedzę. Nasze kursy pomogą Ci osiągnąć
                        cele zawodowe i osobiste, poprawić efektywność pracy,
                        zwiększyć kreatywność oraz zdobyć certyfikaty,
                        które wyróżnią Cię na rynku pracy.
                        Zacznij już dziś i zainwestuj w swoją przyszłość!
                        </h3>
                    </Col>
                    <Col>
                        ...
                    </Col>
                </Row>
                {/* ----------- KARTY  -----------------------------------------*/}
                <Row >
                    <h2 className="nag3">
                         Popularne Kursy ostatnich 30 dni: 
                    </h2>
                </Row>
                <Row className="mt-3">
                    <Col className="center mt-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/src/images/wojciech.png"  />
                            <Card.Body>
                                <Card.Title className="center2" >Wojciech Bobak</Card.Title>
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
                                    jak przygotować autentyczne włoskie dania, krok po kroku
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Gotowanie</ListGroup.Item>
                                <ListGroup.Item>Kuchnia włoska</ListGroup.Item>
                                <ListGroup.Item>Sztuka kulinarna</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="center mt-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/src/images/hiroshi.png" />
                            <Card.Body>
                                <Card.Title className="center2">Hiroshi Tanaka</Card.Title>
                                <Card.Text>
                                    Ekspert w dziedzinie robotyki  poprowadzi warsztaty,
                                    w trakcie których uczestnicy zaprogramują własnego robota
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Automatyzacja</ListGroup.Item>
                                <ListGroup.Item>Programowanie</ListGroup.Item>
                                <ListGroup.Item>Technologia</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
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
                                    tworzenia domowych systemów do kompostowania, promując ekologiczny styl życia
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Kompostowanie</ListGroup.Item>
                                <ListGroup.Item>Ekologiczny styl życia</ListGroup.Item>
                                <ListGroup.Item>Zrównoważony rozwój</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
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
                                    lotniczej poprowadzi wykład o projektowaniu  dronów.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Lotnictwo</ListGroup.Item>
                                <ListGroup.Item>Technologia</ListGroup.Item>
                                <ListGroup.Item>Projektowanie</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Button variant="outline-danger">Odwiedz kurs</Button>{' '}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row >

                    <h2 className="center nag3 mt-5">
                        NIE SZUKAJ DALEJ
                    </h2>
                    <Col>
                        test
                    </Col>
                    <Col xs={8}>
                        <h3 className="mb-5 nag4" style={{ textAlign: 'justify' }}>
                            Rozwijaj swoje umiejętności z naszymi kursami online!
                            Wybierz spośród wielu tematów, ucz się w komfortowym
                            tempie i zdobądź nową wiedzę. Nasze kursy pomogą Ci osiągnąć
                            cele zawodowe i osobiste, poprawić efektywność pracy,
                            zwiększyć kreatywność oraz zdobyć certyfikaty,
                            które wyróżnią Cię na rynku pracy.
                            Zacznij już dziś i zainwestuj w swoją przyszłość!
                        </h3>
                    </Col>
                    <Col>
                        test
                    </Col>
                </Row>
               
            </Container>
        </Container >






        //<div>
        //    <div>Tekst Aplikacja 1</div>
        //</div>
    );

}

export default App;
