import styled from "styled-components";
import Navbar from "../comps/Navbar";
import Announcement from "../comps/Announcement";
import Newsletter from "../comps/Newsletter";
import Footer from "../comps/Footer";
import { Remove, Add } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useEffect, useState } from "react";
import { publicReq } from "../reqMethods";
import { useLocation } from "react-router-dom";
import {addProduct} from "../redux/cartRedux"
import { useDispatch } from "react-redux";

const Cont = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  min-height: 90vh;
  display: flex;
  align-items: center;
  ${mobile({ padding: "10px", flexDirection: "column", minHeight: "50vh" })}
`;
const ImgCont = styled.div`
  flex: 1;
`;
const Img = styled.img`
  width: 100%;
`;
const InfoCont = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 600;
`;
const Desc = styled.p`
  margin: 20px 0;
  font-size: 1.1rem;
  letter-spacing: 2px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  ${mobile({ width: "100%" })}
`;
const AmountCont = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-top: 20px;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 5px;
`;
const Btn = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.1rem;
  transition: all 300ms;
  margin-top: 20px;
  &:hover {
    background-color: #f8f6f4;
    text-decoration: underline;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [prod, setProd] = useState({});
  const [quant, setQuant] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProd = async () => {
      try {
        const res = await publicReq.get("/products/find/" + id);
        setProd(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getProd();
  }, [id]);

  const handleQuant = (type) => {
    if (type === "sub" && quant > 1) {
      setQuant(quant - 1);
    } else if (type === "add") {
      setQuant(quant + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...prod, quantity: quant }));
  };

  return (
    <Cont>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgCont>
          <Img src={prod.img}></Img>
        </ImgCont>
        <InfoCont>
          <Title>{prod.title}</Title>
          <Desc>{prod.desc}</Desc>
          <Price>${prod.price && prod.price.toFixed(2)}</Price>
          <AddCont>
            <AmountCont>
              <Remove
                onClick={() => handleQuant("sub")}
                style={{ cursor: "pointer" }}
              />
              <Amount>{quant}</Amount>
              <Add
                onClick={() => handleQuant("add")}
                style={{ cursor: "pointer" }}
              />
            </AmountCont>
            <Btn onClick={handleClick}>Add To Cart</Btn>
          </AddCont>
        </InfoCont>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Cont>
  );
};

export default Product;
