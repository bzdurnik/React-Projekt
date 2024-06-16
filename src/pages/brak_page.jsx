import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import backgroundImage from '/src/images/EMH-3.png';

export const Brak = () => {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Row className="text-center w-100">
                <Col style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', display: 'inline-block', marginTop: '30vh' }}>
                        <h1 style={{ fontSize: '6rem', marginBottom: '20px' }}>404</h1>
                        <p style={{ fontSize: '1.5rem' }}>Nasz umysł jeszcze tu nie sięga</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Brak;
