import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(${(props) => props.mode === "true" ? "1.1" : "1"});
  filter: blur(${(props) => props.mode === "true" ? "3" : "0"}px);
  transition: all 300ms;
  cursor: pointer;
  ${mobile({height: "20vh"})}
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  pointer-events: none;
  font-size: 3rem;
`;
const Btn = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1.2rem;
  color: gray;
  cursor: pointer;
  opacity: ${(props) => props.mode === "true" ? "1" : "0"};
  transition: all 300ms;
`;

const CatItem = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Link to={`/products/${item.cat}`}>
        <Image src={item.src} mode={hover.toString()} />
        <Info>
          <Title>{item.name}</Title>
          <Btn mode={hover.toString()} onMouseEnter={() => setHover(true)} onMouseOut={() => setHover(true)}>Shop Now</Btn>
        </Info>
      </Link>
    </Container>
  );
};

export default CatItem;
