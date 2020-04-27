import React, { useContext } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { AppContext } from "../context/api.context";
export default class Filters extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 10000, max: 50000 },
    };
  }
  componentDidUpdate() {}

  filterData = () => {

    const { min, max } = this.state.value;
    const { ProductList, setProductList } = this.context;
    ProductList &&
      ProductList.map((val) => {
        if (val.price.actual < max || val.price.actual > min) {
            setProductList(val)
        }
      });
  };

  render() {
    return (
      <div className="p-3">
        <h4 className="text-left mb-5">Filters</h4>
        <InputRange
          maxValue={20000}
          minValue={17000}
          value={this.state.value}
          onChange={(value) => {this.setState({ value });
            this.filterData(value);
          }}
        />
      </div>
    );
  }
}
