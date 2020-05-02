import React, { useMemo } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { AppContext } from "../context/api.context";
import ProductsList from "./ProductsList";
export default class Filters extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 1000, max: 10000 },
      filterProducts:[]
    };
  }
  componentDidUpdate() {}

  filterData = (e) => {
      this.setState({value: e });
    const { min, max } = this.state.value;
    const { ProductList, setFilterLists } = this.context;
    let filterProducts = ProductList &&
      ProductList.filter((val) => {
        
        if (val.price.actual <=  e.max || val.price.actual <= e.min) {
          console.log(val.price.actual)
          return val;
        }
        
      });
      
      this.setState({filterProducts});
      setFilterLists(filterProducts)
  };

  render() {
    const{max, min} = this.state.value;
    return (
      <div className="p-3">
        <h4 className="text-left mb-5">Filters</h4>
        <InputRange
          maxValue={80000}
          minValue={5000}
          value={this.state.value}
          onChange={(value) => {
            this.filterData(value);
          }}
        />
      </div>
    );
  }
}
