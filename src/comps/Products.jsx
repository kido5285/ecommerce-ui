import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { pop } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f7f7f7;
`;

const Products = ({ cat, filter, sort }) => {
  const [prods, setProds] = useState([]);
  const [filteredProds, setFilteredProds] = useState([]);
  useEffect(() => {
    const getProds = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://ecomapi109.herokuapp.com/api/products?category${cat}`
            : "https://ecomapi109.herokuapp.com/api/products"
        );
        setProds(res.data);
      } catch (e) {}
    };
    getProds();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProds(
      prods.filter((item) => {
        if(filter['categories']){
          const contradiction = item['categories'].includes(filter['categories']);
          return contradiction;
        }
      })
    );
    if(sort === 'asc'){
      setFilteredProds((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProds((prev) => [...prev].sort((a, b) => b.price - a.price));
    };
  }, [prods, cat, filter]);

  useEffect(() => { 
    if(sort === 'asc'){
      setFilteredProds((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProds((prev) => [...prev].sort((a, b) => b.price - a.price));
    };
  }, [sort])

  return (
    <Container>
      {cat ? filteredProds.map((item, i) => (
        <Product item={item} key={i} />
      )) : prods.map((item, i) => (
        <Product item={item} key={i} />
      ))}
    </Container>
  );
};

export default Products;
