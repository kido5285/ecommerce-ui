import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Info = styled.div`
  width: 100%;
  height: 105%;
  position: absolute;
  opacity: 0;
  top: -10px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 10px;
  min-width: 280px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f7f7f7;
  overflow: hidden;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  z-index: 2;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 200ms;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
