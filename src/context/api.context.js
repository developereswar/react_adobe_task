import React, { createContext, useState, useEffect } from "react";
import { Products } from "../service/products";

export const AppContext = createContext(true);
export const AppConsumer = AppContext.Consumer;
export const AppProvider = AppContext.Provider;

const ApiStore = ({ children }) => {
  const [ProductList, setProductList] = useState(null);
  const [bagList, setBagList] = useState([]);
  const [filterList, setFilterLists] = useState(null);
  useEffect(() => {
    setProductList(Products.items);
  }, []);

  const getList=(e)=>{
      setBagList([...new Set([...bagList, e])]);
      console.log(bagList)
  }
  return (
    <AppProvider value={{ProductList, getList, bagList,setBagList, setFilterLists, filterList}}>
      {children}
    </AppProvider>
  );
};

export default ApiStore;
