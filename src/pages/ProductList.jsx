import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../comps/Announcement";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import Newsletter from "../comps/Newsletter";
import Products from "../comps/Products";
import {mobile} from '../responsive';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterCont = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({display: 'flex', flexDirection: 'column'})}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({marginRight: '0'})}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: #fff;
  border: 1px solid #000;
  outline: none;
  cursor: pointer;
  ${mobile({margin: '10px 0'})}
`;
const Op = styled.option`
  background-color: #fff;
  border: 1px solid #000;
  outline: none;
  cursor: pointer;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filter, setFilter] = useState({categories: cat});
  const [sort, setSort] = useState("asc");
  const handleFilters = (e) => {
    const val = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: val.toLowerCase(),
    });
  }
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterCont>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="categories" defaultValue="Categories" onChange={handleFilters}>
            <Op disabled>
              Categories
            </Op>
            <Op>Chairs</Op>
            <Op>Sofa</Op>
            <Op>Beds</Op>
            <Op>Drawers</Op>
            <Op>Tables</Op>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select defaultValue="Price" name="price" onChange={e => setSort(e.target.value)}>
            <Op disabled>
              Price
            </Op>
            <Op value="dsc">Descending</Op>
            <Op value="asc">Ascending</Op>
          </Select>
        </Filter>
      </FilterCont>
      <Products cat={cat} filter={filter} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
