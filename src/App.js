import React from 'react';
import { 
  Navbar, 
  Nav, 
  Container, 
  Carousel, 
  Card, 
  Button, 
  Row, 
  Col, 
  Form 
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Мой Сайт</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Главная</Nav.Link>
              <Nav.Link href="#features">Возможности</Nav.Link>
              <Nav.Link href="#pricing">Цены</Nav.Link>
              <Nav.Link href="#contact">Контакты</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=First+Slide"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Первый слайд</h3>
            <p>Описание первого слайда.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Second+Slide"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Второй слайд</h3>
            <p>Описание второго слайда.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="my-5">
        {/* Заменяем Jumbotron на Card с соответствующими классами */}
        <Card className="text-center p-5 bg-light mb-5" id="home">
          <Card.Body>
            <h1 className="display-4">Добро пожаловать на наш сайт!</h1>
            <p className="lead">
              Это пример одностраничного сайта, созданного с помощью React и Bootstrap.
            </p>
            <Button variant="primary">Узнать больше</Button>
          </Card.Body>
        </Card>

        <Row id="features" className="mb-5">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Функция 1</Card.Title>
                <Card.Text>
                  Описание первой функции вашего продукта или услуги.
                </Card.Text>
                <Button variant="primary">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Функция 2</Card.Title>
                <Card.Text>
                  Описание второй функции вашего продукта или услуги.
                </Card.Text>
                <Button variant="primary">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
              <Card.Body>
                <Card.Title>Функция 3</Card.Title>
                <Card.Text>
                  Описание третьей функции вашего продукта или услуги.
                </Card.Text>
                <Button variant="primary">Подробнее</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row id="pricing" className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Наши тарифы</h2>
            <Row>
              <Col md={4}>
                <Card className="text-center">
                  <Card.Header>Базовый</Card.Header>
                  <Card.Body>
                    <Card.Title>$10/мес</Card.Title>
                    <Card.Text>
                      <ul className="list-unstyled">
                        <li>Функция 1</li>
                        <li>Функция 2</li>
                        <li>Поддержка</li>
                      </ul>
                    </Card.Text>
                    <Button variant="primary">Выбрать</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center">
                  <Card.Header>Стандарт</Card.Header>
                  <Card.Body>
                    <Card.Title>$20/мес</Card.Title>
                    <Card.Text>
                      <ul className="list-unstyled">
                        <li>Функция 1</li>
                        <li>Функция 2</li>
                        <li>Функция 3</li>
                        <li>Поддержка</li>
                      </ul>
                    </Card.Text>
                    <Button variant="primary">Выбрать</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="text-center">
                  <Card.Header>Премиум</Card.Header>
                  <Card.Body>
                    <Card.Title>$30/мес</Card.Title>
                    <Card.Text>
                      <ul className="list-unstyled">
                        <li>Все функции</li>
                        <li>Приоритетная поддержка</li>
                        <li>Дополнительные возможности</li>
                      </ul>
                    </Card.Text>
                    <Button variant="primary">Выбрать</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row id="contact" className="mb-5">
          <Col md={6} className="mx-auto">
            <h2 className="text-center mb-4">Свяжитесь с нами</h2>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Ваше имя</Form.Label>
                <Form.Control type="text" placeholder="Введите имя" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email адрес</Form.Label>
                <Form.Control type="email" placeholder="Введите email" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Сообщение</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Ваше сообщение" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Отправить
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>О компании</h5>
              <p>Краткое описание вашей компании и ее деятельности.</p>
            </Col>
            <Col md={4}>
              <h5>Контакты</h5>
              <p>Email: info@example.com</p>
              <p>Телефон: +7 (123) 456-78-90</p>
            </Col>
            <Col md={4}>
              <h5>Социальные сети</h5>
              <p>Ссылки на соцсети</p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center mt-3">
              <p>&copy; {new Date().getFullYear()} Мой Сайт. Все права защищены.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;