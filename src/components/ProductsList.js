import React, { useContext, useEffect } from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/api.context";

const ProductsList = () => {
  const {ProductList, getList, filterList} = useContext(AppContext);

  const addedItem = (e) => {
    getList(e)
  };

  const listPorducts =(data)=>{
    return(data && data.map((val, key) => {
          return (
            <Col sm="3" className="mb-3 mt-3" key={key}>
              <Card>
                <CardImg
                  top
                  width="100%"
                  height="250px"
                  src={val.image}
                  alt={val.name}
                />
                <CardBody>
                  <CardTitle className="text-left">
                    <label> {val.name} </label>
                  </CardTitle>
                  <CardText>
                    <Row className="text-left font-weight-bold">
                      <Col>
                        <FontAwesomeIcon icon={faRupeeSign} />
                        {val.price.actual}
                      </Col>
                      <Col>
                        <strike className="text-muted">
                          {val.price.display}{" "}
                        </strike>
                      </Col>
                      <Col>
                        <span className="text-success">
                          {val.discount}% off
                        </span>
                      </Col>
                    </Row>
                  </CardText>
                  <Button
                    color="warning"
                    className="btnAddCart"
                    onClick={() => {
                      addedItem(val);
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardBody>
              </Card>
            </Col>
          );
        })
    )
  }
  return (
    <>
     { listPorducts(filterList || ProductList)}
    </>
  );
};

export default ProductsList;
