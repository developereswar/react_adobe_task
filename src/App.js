import React from "react";
import "./assets/scss/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Root from './components/Root';
import  ErrorNotFound from './components/404';
import {CartList} from './components/CartList';
import ApiStore from "./context/api.context";
import Header from "./components/Header";

export default function App() {


  return (
    <div className="App">
      <ApiStore>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route  exact path="/cartlist" component={CartList}/>
          <Route exact path="*" component={ErrorNotFound}/>
        </Switch>
      </Router>
      </ApiStore>
    </div>
  );
}
