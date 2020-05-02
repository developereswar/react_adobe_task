import React, { Fragment, useContext }  from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  Collapse,
  NavbarToggler
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useHistory, withRouter} from "react-router";
import { AppContext } from "../context/api.context";
import cartList from "./CartList";
import { Route } from "react-router-dom";

const Header = () => {
  const {bagList} = useContext(AppContext)
  const history = useHistory();

 
  return (
    <Fragment>
  
    <Navbar color="primary" dark expand="md">
      <NavbarBrand >
        <Link to="/" > <FontAwesomeIcon icon={faStar} /> </Link>
      </NavbarBrand>
      <NavbarToggler />
      <Collapse navbar className="justify-content-end">
        <Nav navbar>
          <NavItem>
            <NavLink>
              <FontAwesomeIcon icon={faShoppingCart} onClick={()=>{history.push('/cartlist')} } />
              {(bagList.length !== 0) && <span className="countList" >{bagList.length}</span> } 
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    </Fragment>
  );
};

export default withRouter(Header);
