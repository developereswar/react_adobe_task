import React, { useContext } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { AppContext } from "../context/api.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

export const CartList = () => {
  let total = 0;
  const { bagList, setBagList } = useContext(AppContext);

  const removeItem = (i) => {
    let arr = bagList.filter((e) => {
      return e !== i;
    });
    setBagList(arr);
  };

  const AddCount = (e) => {
    let i = bagList.indexOf(e);
    e.count++;
    e.count = e.count < 1 ? 1 : e.count;
    bagList[i] = e;
    setBagList([...bagList]);
  };
  const SubCount = (e) => {
    let i = bagList.indexOf(e);
    e.count--;
    e.count = e.count < 1 ? 1 : e.count;
    bagList[i] = e;
    setBagList([...bagList]);
  };

  const priceList = () => {
    let price = 0;

      bagList &&
      bagList.map((e) => {
        console.log(e.count, e.price.display)
        price =+ e.count * e.price.display;
      })
    return price;
  };

  return (
    <Container>
      <Row>
      <Col sm="8">
        {bagList &&
          bagList.map((e, i) => {
            return (
              
                <div className="carList mt-2"  key={i}>
                  <div>
                    <img src={e.image} width="100" />
                  </div>
                  <div className="pt-5 text-center flcontainer">
                    <div className="flrow"> {e.name}</div>

                    <div className="flrow pt-5 text-left">
                      <span>
                        <FontAwesomeIcon icon={faRupeeSign} /> {e.price.actual}
                      </span>
                      <span className="mr-2">
                        <strike className="text-muted">
                          {e.price.display}{" "}
                        </strike>
                      </span>
                      <span className="text-success text-rigth">
                        {e.discount}% off
                      </span>
                    </div>
                  </div>
                  <div className="pt-5 qty text-left">
                    <span
                      className="minus bg-dark"
                      onClick={() => {
                        SubCount(e);
                      }}
                    >
                      -
                    </span>
                    <input
                      type="text"
                      className="count"
                      name="qty"
                      value={e.count}
                      readonly
                    />
                    <span
                      className="plus bg-dark"
                      onClick={() => {
                        AddCount(e);
                      }}
                    >
                      +
                    </span>
                  </div>
                  <div className="pt-5 text-center">
                    <b
                      onClick={() => {
                        removeItem(e);
                      }}
                    >
                      Remove
                    </b>
                  </div>
                </div>
          
            );
          })}
    </Col>
        <Col sm="4" className="mt-3">
          <div className="card">
            <h5 className="card-header">PRICE DETAILS</h5>
            <div className="card-body">
              <Row>
                  <Col>Price :</Col>
                  <Col>{priceList()}</Col>
              </Row>
            </div>
            <div className="card-footer"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
