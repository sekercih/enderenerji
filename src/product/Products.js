import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Container,
  Col,
  Row,
} from "react-bootstrap";
//import { Icon } from "semantic-ui-react";
import Gold01 from "../images/card/gold.jpg";
import Platinum01 from "../images/card/platinum.jpg";
import Silver01 from "../images/card/silver.jpg";
import "./Produckts.css";
import { CaretForwardOutline } from "react-ionicons";

const cardData = [
  {
    title: "Güneş Paneli Polikristal 40 Watt",
    image: Gold01,
    cards: ["Mono Solar Panel"],
    description:
      "Enjoy a 0% Intro APR on purchases and balance transfers for the first 12 billing cycles. After that, a variable APR applies $95/year there after.",
  },
  {
    title: "Güneş Paneli 320W Mono Solar Panel",
    image: Platinum01,
    cards: ["Mono Solar Panel"],
    description:
      "Güneş panellerimizi tarımsal sulama , off-grid akülü güneş enerjisi sistemlerinde , on-grid şebeke bağlantılı güneş enerjisi sistemlerinde rahatlıkla kullanabilirsiniz.Ürünlerimiz 10 Yıl firmamız tarafından garantilidir.",
  },
  {
    title: "PanasonicHIT325 Watt Mono Panel",
    image: Silver01,
    cards: ["Mono Solar Panel"],
    description:
      "PANASONIC HIT Güneş panelleri, gölgelenmeye karşı gösterdiği direnç ve yüksek sıcaklıklardaki benzersiz performansı ile elektrik üretimi ve kazancını doruğa taşıyor. Karavanlar için mükemmel ve kaliteli çözüm…• %19,7 Panel Verimliliği",
  },
];
const Product = () => {
  return (
    <Container className="product-container">
      <Row>
        <p className="h2 text-center margin">Solar Panel</p>
      </Row>
      <Row className="d-flex justify-content-center ">
        {cardData.map((item) => {
          const { cards, image, title, description } = item;
          return (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-flex justify-content-center"
            >
              <Card style={{ width: "22rem", marginBottom: "25px" }}>
                <Card.Title>{title}</Card.Title>
                <Card.Img src={image} className="product-image" />
                <ListGroup className="list-group-flush">
                  {cards.map((card) => {
                    return (
                      <ListGroupItem className="py-1">
                        <Card.Link href="#" className="product-card-link">
                          <p className="d-flex justify-content-between">
                            <span> {card}</span>

                            <CaretForwardOutline
                              color={"#ff0000"}
                              beat
                              height="30px"
                              width="30px"
                            />
                            {/* <Icon
                              name="angle right"
                              className="icon-card"
                            ></Icon> */}
                          </p>
                        </Card.Link>
                      </ListGroupItem>
                    );
                  })}
                </ListGroup>
                <Card.Body>
                  <Card.Text>{description}</Card.Text>
                  <Card.Link href="#" className="product-details">
                    Detail
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Product;
