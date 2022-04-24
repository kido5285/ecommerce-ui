import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CatItem from "./CatItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #f7f7f7;
  ${mobile({padding: "0px", flexDirection: "column"})}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((cat,i) => (
        <CatItem item={cat} key={i}/>
      ))}
    </Container>
  );
};

export default Categories;
