import { Container } from "react-bootstrap";
import React from "react";
//import Image from "react-bootstrap/Image";
import "./Galeri.css";
import G1 from "../images/geleri/g1.jpg";
import G2 from "../images/geleri/g2.jpg";
import G3 from "../images/geleri/g3.jpg";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

const Galeri = () => {
  return (
    <div>
      <Container className="galeri">
        <ImageList sx={{ width: 1200, height: 1250 }} cols={3} rowHeight={300}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
};
const itemData = [
  {
    img: G1,
    title: "Ev",
  },
  {
    img: G2,
    title: "Tarla",
  },
  {
    img: G3,
    title: "Veranda",
  },
];

export default Galeri;
