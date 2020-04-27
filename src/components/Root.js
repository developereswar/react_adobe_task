import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductsList from "./ProductsList";
import Filters from "./Filters";
import { AppContext } from '../context/api.context';

export default class Root extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      filterData: [],
      selectedItems:[]
    };
  }

  
  getFilterData = (e)=>{
    var { selectedItems} = this.state;
    e.count= 0;
    selectedItems = [...new Set([...selectedItems, e])]
    this.setState({selectedItems})
    console.log(selectedItems)
  }

  render() {
    const { productList, filterData, selectedItems} = this.state;
    return (
      <>
      <Container fluid="true">
        <Row>
          <Col sm="3" className="FilterWrapper">
            <Filters data={productList}></Filters>
          </Col>
          <Col sm="9">
          <Row>
         <ProductsList
            data={productList}
            filterdata={this.getFilterData}
          ></ProductsList>
        </Row>
          </Col>
        </Row>
      </Container>
      </>
    );
  }
}
