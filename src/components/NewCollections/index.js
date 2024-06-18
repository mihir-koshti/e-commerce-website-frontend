import React from "react";
import { NewCollectionsStyled } from "./NewCollectionsStyled";
import new_collections from "../../assets/new_collections";
import { Col, Container, Row } from "react-bootstrap";
import ItemCard from "../ItemCard";
const NewCollections = () => {
  return (
    <NewCollectionsStyled>
        <Container >
      <div className="new-collections">
        <h1 className="text-center">NEW COLLECTIONS</h1>
        <hr />
        <div className="collections-items">
          <Row>
            {new_collections.map((item) => {
              return (
                <Col lg={3}>
                  <ItemCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      </Container>
    </NewCollectionsStyled>
  );
};

export default NewCollections;
