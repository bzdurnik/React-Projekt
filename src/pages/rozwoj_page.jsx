import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Alert from 'react-bootstrap/Alert';
import { GiPathDistance, GiSkills, GiBlackBook, GiMusicalNotes, GiBrain, GiTeacher, GiTechnoHeart } from 'react-icons/gi';
import { FaCode, FaPaintBrush, FaRobot, FaUtensils, FaCamera, FaLanguage, FaBusinessTime } from 'react-icons/fa';
import { IoIosFitness, IoMdPeople } from 'react-icons/io';
import { MdOutlineAnimation } from 'react-icons/md';

const getIcon = (interest) => {
    switch (interest) {
        case 'Programowanie':
            return <FaCode />;
        case 'Projektowanie graficzne':
            return <FaPaintBrush />;
        case 'Robotyka':
            return <FaRobot />;
        case 'Kulinaria':
            return <FaUtensils />;
        case 'Fotografia':
            return <FaCamera />;
        case 'DIY':
            return <GiSkills />;
        case 'Języki Obce':
            return <FaLanguage />;
        case 'Marketing i Biznes':
            return <FaBusinessTime />;
        case 'Zdrowie i Fitness':
            return <IoIosFitness />;
        case 'Sztuka i Muzyka':
            return <GiMusicalNotes />;
        case 'Literatura i Pisanie':
            return <GiBlackBook />;
        case 'Nauki Ścisłe':
            return <GiBrain />;
        case 'Edukacja i Pedagogika':
            return <GiTeacher />;
        case 'Technologie Informacyjne':
            return <GiTechnoHeart />;
        case 'Umiejętności Miękkie':
            return <IoMdPeople />;
        case 'Sztuka Cyfrowa i Animacja':
            return <MdOutlineAnimation />;
        default:
            return null;
    }
};

const skillLevel = (numSkills) => {
    if (numSkills <= 3) return 'Łatwy';
    if (numSkills <= 5) return 'Średnio zaawansowany';
    if (numSkills <= 7) return 'Ekspert';
    return 'Expert';
};

export const Rozwoj = () => {
    const [selectedInterest, setSelectedInterest] = useState('');
    const [availablePaths, setAvailablePaths] = useState([]);

    const interests = [
        'Programowanie',
        'Projektowanie graficzne',
        'Robotyka',
        'Kulinaria',
        'Fotografia',
        'DIY',
        'Języki Obce',
        'Marketing i Biznes',
        'Zdrowie i Fitness',
        'Sztuka i Muzyka',
        'Literatura i Pisanie',
        'Nauki Ścisłe',
        'Edukacja i Pedagogika',
        'Technologie Informacyjne',
        'Umiejętności Miękkie',
        'Sztuka Cyfrowa i Animacja',
    ];

    const paths = {
        'Programowanie': [
            { title: 'Ścieżka Front-End', skills: { 'HTML': 55, 'CSS': 75, 'JavaScript': 90, 'React': 80 }, description: 'Naucz się budować nowoczesne interfejsy użytkownika. Pracuj z najnowszymi technologiami front-endowymi. Zdobądź praktyczne umiejętności tworzenia dynamicznych aplikacji webowych.' },
            { title: 'Ścieżka Back-End', skills: { 'Node.js': 85, 'Express': 80, 'MongoDB': 70, 'SQL': 65 }, description: 'Opanuj techniki programowania serwerów i baz danych. Zdobądź umiejętności w pracy z różnymi technologiami backendowymi. Naucz się tworzyć skalowalne i wydajne aplikacje.' },
            { title: 'Ścieżka Full-Stack', skills: { 'HTML': 60, 'CSS': 70, 'JavaScript': 90, 'Node.js': 85, 'React': 80 }, description: 'Zostań wszechstronnym programistą, znającym zarówno front-end jak i back-end. Naucz się łączyć różne technologie, aby tworzyć kompleksowe rozwiązania. Zdobądź umiejętności, które są wysoko cenione na rynku pracy.' },
        ],
        'Projektowanie graficzne': [
            { title: 'Ścieżka Grafika Cyfrowa', skills: { 'Photoshop': 74, 'Illustrator': 80, 'Design Principles': 85 }, description: 'Twórz zachwycające projekty graficzne za pomocą nowoczesnych narzędzi. Naucz się pracy z oprogramowaniem graficznym i poznaj zasady projektowania. Zdobądź umiejętności potrzebne do pracy jako grafik cyfrowy.' },
            { title: 'Ścieżka Projektowanie UX/UI', skills: { 'User Research': 70, 'Wireframing': 75, 'Prototyping': 80 }, description: 'Projektuj intuicyjne interfejsy użytkownika, które zachwycają swoją użytecznością. Opanuj techniki badania użytkowników i tworzenia prototypów. Zdobądź umiejętności potrzebne do pracy jako projektant UX/UI.' },
            { title: 'Ścieżka Ilustrator', skills: { 'Rysunek': 35, 'Kolorowanie': 75, 'Techniki Cyfrowe': 80 }, description: 'Twórz niesamowite ilustracje za pomocą tradycyjnych i cyfrowych narzędzi. Naucz się różnych technik rysowania i kolorowania. Zdobądź umiejętności potrzebne do pracy jako ilustrator.' },
        ],
        'Robotyka': [
            { title: 'Ścieżka Inżynier Robotyki', skills: { 'Mechanika': 46, 'Elektronika': 85, 'Programowanie Robotów': 95 }, description: 'Projektuj i buduj zaawansowane systemy robotyczne. Opanuj mechanikę, elektronikę i programowanie robotów. Pracuj nad nowatorskimi projektami w dziedzinie robotyki.' },
            { title: 'Ścieżka Automatyka', skills: { 'PLC': 20, 'Systemy SCADA': 75, 'Kontrola Procesów': 80 }, description: 'Opanuj techniki automatyzacji procesów przemysłowych. Naucz się pracy z systemami PLC i SCADA. Zdobądź umiejętności potrzebne do pracy w automatyce przemysłowej.' },
            { title: 'Ścieżka Projektowanie Systemów', skills: { 'Projektowanie Systemów': 85, 'Symulacja': 80, 'Optymalizacja': 75 }, description: 'Projektuj i optymalizuj systemy robotyczne. Opanuj techniki symulacji i optymalizacji systemów. Pracuj nad nowatorskimi projektami w dziedzinie projektowania systemów.' },
        ],
        'Kulinaria': [
            { title: 'Ścieżka Szef Kuchni', skills: { 'Techniki Kulinarne': 33, 'Zarządzanie Kuchnią': 85, 'Tworzenie Menu': 80 }, description: 'Stań się mistrzem sztuki kulinarnej i zarządzaj swoją własną kuchnią. Naucz się różnych technik kulinarnych i zarządzania kuchnią. Twórz wyjątkowe menu, które zachwyci Twoich gości.' },
            { title: 'Ścieżka Piekarz', skills: { 'Pieczenie Chleba': 75, 'Dekorowanie Ciast': 70, 'Techniki Piekarnicze': 80 }, description: 'Odkryj sekrety piekarstwa i zostań ekspertem w swojej dziedzinie. Naucz się różnych technik pieczenia chleba i dekorowania ciast. Zdobądź umiejętności potrzebne do pracy jako piekarz.' },
            { title: 'Ścieżka Cukiernik', skills: { 'Przygotowanie Deserów': 80, 'Dekorowanie Ciast': 85, 'Tworzenie Pralinek': 75 }, description: 'Twórz niesamowite desery i dekoruj ciasta jak profesjonalista. Naucz się różnych technik przygotowywania deserów i tworzenia pralinek. Zdobądź umiejętności potrzebne do pracy jako cukiernik.' },
        ],
        'Fotografia': [
            { title: 'Ścieżka Fotoedytor', skills: { 'Photoshop': 80, 'Lightroom': 85, 'Teoria Koloru': 75 }, description: 'Edytuj zdjęcia na najwyższym poziomie za pomocą profesjonalnych narzędzi. Naucz się pracy z oprogramowaniem do edycji zdjęć. Zdobądź umiejętności potrzebne do pracy jako fotoedytor.' },
            { title: 'Ścieżka Fotograf Filmowy', skills: { 'Kinematografia': 90, 'Edycja Wideo': 85, 'Oświetlenie': 80 }, description: 'Twórz niezapomniane filmy i opanuj techniki kinematograficzne. Naucz się pracy z kamerą i oświetleniem. Zdobądź umiejętności potrzebne do pracy jako fotograf filmowy.' },
            { title: 'Ścieżka Fotograf Ślubny', skills: { 'Fotografia Portretowa': 85, 'Zarządzanie Klientami': 75, 'Edycja Zdjęć': 80 }, description: 'Uwieczniaj najważniejsze chwile w życiu par młodych, tworząc niezapomniane wspomnienia. Naucz się pracy z klientami i edycji zdjęć. Zdobądź umiejętności potrzebne do pracy jako fotograf ślubny.' },
            { title: 'Ścieżka Technik Fotografii', skills: { 'Podstawy Fotografii': 70, 'Techniki Oświetleniowe': 80, 'Postprodukcja': 75 }, description: 'Opanuj techniki fotografii i postprodukcji, aby tworzyć wyjątkowe zdjęcia. Naucz się pracy z różnymi technikami oświetleniowymi. Zdobądź umiejętności potrzebne do pracy jako technik fotografii.' },
        ],
        'DIY': [],
        'Języki Obce': [],
        'Marketing i Biznes': [],
        'Zdrowie i Fitness': [],
        'Sztuka i Muzyka': [],
        'Literatura i Pisanie': [],
        'Nauki Ścisłe': [],
        'Edukacja i Pedagogika': [],
        'Technologie Informacyjne': [],
        'Umiejętności Miękkie': [],
        'Sztuka Cyfrowa i Animacja': [],
    };

    const handleInterestChange = (event) => {
        const interest = event.target.value;
        setSelectedInterest(interest);
        setAvailablePaths(paths[interest]);
    };

    return (
        <Container fluid style={{ backgroundColor: 'black', color: 'white' }}>
            <Container>
                <Row className="mt-5">
                    <h1 className="nag2">Ścieżki Rozwoju <GiPathDistance /></h1>
                </Row>
                <Row className="mt-4">
                    <Col md={4}>
                        <Form>
                            <Form.Group controlId="selectInterests">
                                <Form.Label>Wybierz swoje zainteresowanie</Form.Label>
                                {interests.map(interest => (
                                    <Form.Check
                                        type="radio"
                                        name="interests"
                                        label={<div>{getIcon(interest)} {interest}</div>}
                                        value={interest}
                                        onChange={handleInterestChange}
                                        key={interest}
                                    />
                                ))}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col md={8}>
                        {availablePaths.length > 0 ? (
                            <Accordion defaultActiveKey="0" className="dark-accordion">
                                {availablePaths.length > 0 ? availablePaths.map((path, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index} className="item">
                                        <Accordion.Header>
                                            <Row className="w-100">
                                                <Col md={3}>
                                                    <Alert variant="danger" className="custom-alert">
                                                        {path.title}
                                                    </Alert>
                                                </Col>
                                                <Col md={3}>
                                                    <Alert variant="danger" className="custom-alert">
                                                        {skillLevel(Object.keys(path.skills).length)}
                                                    </Alert>
                                                </Col>
                                            </Row>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            {Object.keys(path.skills).map((skill, skillIndex) => (
                                                <div key={skillIndex}>
                                                    <h5>{skill}</h5>
                                                    <ProgressBar now={path.skills[skill]} label={`${path.skills[skill]}%`} />
                                                </div>
                                            ))}
                                            <div className="mt-4">
                                                <h5>Opis ścieżki</h5>
                                                <p>{path.description}</p>
                                            </div>
                                            <div className="mt-4 d-flex justify-content-between">
                                                <Button variant="outline-danger">Dodaj do swojego planu rozwoju</Button>
                                                <Button variant="outline-danger">Sprawdź dostępne kursy</Button>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )) : (
                                    <p>Brak dostępnych ścieżek dla tej kategorii.</p>
                                )}
                            </Accordion>
                        ) : (
                            <p>Brak dostępnych ścieżek. Wybierz zainteresowanie, aby zobaczyć ścieżki.</p>
                        )}
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};
