import React, { useContext } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { AppContext } from "../context/api.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

export const CartList = () => {
  const { bagList } = useContext(AppContext);
  return (
    <Container>
      <Row>
        {bagList &&
          bagList.map((e) => {
            return (
              <Col sm="6">
                <div className="carList mt-2">
                  <div>
                    <img src={e.image} width="120" />
                  </div>
                  <div className="pt-5 text-center">
                    <p> {e.name}</p> <br/>
                    <p>
                      {" "}
                      <FontAwesomeIcon icon={faRupeeSign} /> {e.price.actual}
                    </p>
                  </div>
                  <div className="pt-5 text-left">
                    <span className="mr-2">
                     
                      <strike className="text-muted">{e.price.display} </strike>
                    </span>
                    <span className="text-success text-rigth">
                      {e.discount}% off
                    </span>
                  </div>
                  <div className="pt-5 text-left">
                    <p>
                      <b>Remove</b>
                    </p>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};
