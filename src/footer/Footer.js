import React from "react";
import { Grid, List, Container, Segment, Header } from "semantic-ui-react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Hakkında" />
                <List link inverted>
                  <List.Item as="a">Site Haritası</List.Item>
                  <List.Item as="a">İletişim</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Galeri" />
                <List link inverted>
                  <List.Item as="a">Referanslar</List.Item>
                  <List.Item as="a">Projeler</List.Item>
                  <List.Item as="a">Fiyat Listesi</List.Item>
                  <List.Item as="a">Teklif Paneli</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Müşteri Hizmetleri
                </Header>
                <p>© 2021 Ender Enerji - Tüm Hakları Saklıdır.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
