import {Badge, Button, Card, Col, Container, Row} from "react-bootstrap";

const Products = ({products, categories, isProductsLoading, productsError, currentCategory}) => {
    if (productsError)
        return (
            <>
                <h3>При загрузке продуктов произошла ошибка ${productsError}</h3>
            </>
        );

    if (isProductsLoading)
        return (
            <>
                <h3>Загрузка продуктов</h3>
            </>
        );

    return (
        <>
            <Container>
                <Row xs={1} md={4} className="g-4 mt-3">
                    {products.filter(el => el.categoryId === currentCategory).map((product, idx) =>
                        <Col key={idx} >
                            <Card border="primary" style={{width: '18rem'}} className="text-center">
                                <Card.Header>Категория: <Badge bg="light"
                                                               text="dark">{categories.find(el => el.id === product.categoryId).title}</Badge></Card.Header>
                                <Card.Img variant="top" src={product.url}/>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <Button variant="primary">Купить</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">
                                    Price: <Badge bg="secondary">{product.price}</Badge>
                                </Card.Footer>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default Products;