import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert, Modal } from 'react-bootstrap';

const categories = [
    'Fotografia', 'Programowanie', 'Kulinaria', 'Języki Obce', 'Marketing i Biznes', 'Zdrowie i Fitness',
    'Sztuka i Muzyka', 'Literatura i Pisanie', 'Nauki Ścisłe', 'Edukacja i Pedagogika', 'Technologie Informacyjne',
    'Umiejętności Miękkie', 'Sztuka Cyfrowa i Animacja', 'DIY'
];

const questions = [
    { question: 'Jakie jest najlepsze oświetlenie do portretów?', options: ['Światło naturalne', 'Lampy studyjne', 'Błysk z aparatu', 'Lampa LED'] },
    { question: 'Które z poniższych programów służy do edycji zdjęć?', options: ['Photoshop', 'Excel', 'Word', 'PowerPoint'] },
    { question: 'Co to jest przysłona?', options: ['Kontroluje ilość światła', 'Kontroluje czas naświetlania', 'Kontroluje balans bieli', 'Kontroluje ISO'] },
    { question: 'Który z poniższych obiektywów jest najlepszy do fotografii portretowej?', options: ['50mm', '18-55mm', '75-300mm', '24-70mm'] },
    { question: 'Jakie ISO jest zalecane do fotografowania w słabym oświetleniu?', options: ['100', '400', '800', '1600'] },
    { question: 'Co to jest balans bieli?', options: ['Dostosowanie kolorów do źródła światła', 'Kontrola ekspozycji', 'Ustawienie przysłony', 'Regulacja ostrości'] },
    { question: 'Które z poniższych narzędzi nie jest używane w Lightroomie?', options: ['Klonowanie', 'Kadrowanie', 'Krzywe', 'Gradient'] },
    { question: 'Które z poniższych narzędzi nie jest używane w Photoshopie?', options: ['Lasso', 'Pędzel', 'Gradient', 'Excel'] },
    { question: 'Co to jest histogram?', options: ['Wykres przedstawiający rozkład tonalny obrazu', 'Narzędzie do kadrowania', 'Funkcja balansu bieli', 'Ustawienie ISO'] },
    { question: 'Jakie znaczenie ma liczba przysłony (f-stop)?', options: ['Kontroluje głębię ostrości', 'Reguluje czas naświetlania', 'Dostosowuje balans bieli', 'Zwiększa ISO'] }
];

const results = {
    totalQuestions: questions.length,
    correctAnswers: 3,
    improvementSuggestions: ['Praktyka w studio', 'Edycja zdjęć', 'Kompozycja zdjęć'],
    suggestedCourses: ['Kurs zaawansowanej fotografii', 'Kurs edycji zdjęć', 'Kurs kompozycji fotograficznej']
};

export const Kompetencji = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [showSummary, setShowSummary] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes timer

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setShowModal(true);
    };

    const handleStartTest = () => {
        setShowModal(false);
        setTimeLeft(600); // Reset timer to 10 minutes
    };

    useEffect(() => {
        if (timeLeft > 0 && !showSummary && !showModal) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            handleFinishTest();
        }
    }, [timeLeft, showSummary, showModal]);

    const handleAnswerSelect = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            handleFinishTest();
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleFinishTest = () => {
        if (answers.includes(null)) {
            alert('Proszę odpowiedzieć na wszystkie pytania.');
        } else {
            setShowSummary(true);
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <Container fluid style={{ backgroundColor: 'black', color: 'white' }}>
            <Container>
                <Row className="mt-5">
                    <h1 className="nag2">Test Kompetencji</h1>
                </Row>
                <Row className="mt-4">
                    {!selectedCategory ? (
                        <Col>
                            <h2>Wybierz kategorię</h2>
                            <Row className="mt-4">
                                {categories.map((category, index) => (
                                    <Col key={index} md={3} className="mb-3">
                                        <Button variant="outline-danger" onClick={() => handleCategorySelect(category)}>
                                            {category}
                                        </Button>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    ) : !showSummary ? (
                        <Col>
                            {showModal ? (
                                <Modal show={true} onHide={() => setShowModal(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Informacje o teście</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>Ten test sprawdzi Twoje umiejętności i wiedzę z zakresu fotografii. Test składa się z 10 pytań, a na jego wykonanie masz 10 minut.</p>
                                        <p>Upewnij się, że jesteś przygotowany, ponieważ czas zacznie się odmierzać natychmiast po rozpoczęciu testu.</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="outline-danger" onClick={handleStartTest}>
                                            Rozpocznij
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            ) : (
                                <div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h2>Test: {selectedCategory}</h2>
                                        <Alert variant="info" className="mb-0">
                                            Czas do końca testu: {formatTime(timeLeft)}
                                        </Alert>
                                    </div>
                                    <h3>Pytanie {currentQuestion + 1} z {questions.length}</h3>
                                    <p>{questions[currentQuestion].question}</p>
                                    <Form>
                                        {questions[currentQuestion].options.map((option, index) => (
                                            <Form.Check
                                                key={index}
                                                type="radio"
                                                name={`question-${currentQuestion}`}
                                                label={option}
                                                onChange={() => handleAnswerSelect(currentQuestion, option)}
                                                checked={answers[currentQuestion] === option}
                                            />
                                        ))}
                                    </Form>
                                    <div className="mt-3 d-flex justify-content-start">
                                        <Button variant="outline-secondary" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
                                            Poprzednie pytanie
                                        </Button>
                                        <Button className="ms-3" variant="outline-danger" onClick={handleNextQuestion}>
                                            {currentQuestion < questions.length - 1 ? 'Następne pytanie' : 'Zakończ test'}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Col>
                    ) : (
                        <Col>
                            <h2>Podsumowanie testu</h2>
                            <Alert variant="success">
                                <h4>Wyniki</h4>
                                <p>Odpowiedziałeś poprawnie na {results.correctAnswers} z {results.totalQuestions} pytań.</p>
                            </Alert>
                            <h4>Sugestie do poprawy</h4>
                            <ul>
                                {results.improvementSuggestions.map((suggestion, index) => (
                                    <li key={index}>{suggestion}</li>
                                ))}
                            </ul>
                            <Button variant="outline-danger" className="me-2">Zapisz do swoich testów</Button>
                            <h4>Proponowane kursy</h4>
                            <ul>
                                {results.suggestedCourses.map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                            <Button variant="outline-danger">Przejdź do kursów</Button>
                        </Col>
                    )}
                </Row>
            </Container>
        </Container>
    );
};
