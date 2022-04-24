import styled from "styled-components";
import Navbar from "../comps/Navbar";
import Announcement from "../comps/Announcement";
import Footer from "../comps/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userReq } from "../reqMethods";
import { useNavigate } from "react-router-dom";
import {clearCart} from '../redux/cartRedux'

const KEY = process.env.REACT_APP_STRIPE;

const Cont = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const TopBtn = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid #000")};
  background-color: ${(props) =>
    props.type === "filled" ? "#000" : "transparent"};
  color: ${(props) => props.type === "filled" && "#fff"};
  outline: none;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProdDets = styled.div`
  flex: 2;
  display: flex;
`;
const PriceDets = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 200px;
`;
const Dets = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProdName = styled.span``;
const ProdId = styled.span``;
const ProdAmountCont = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProdAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;
const ProdPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;
const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SumItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SumTxt = styled.span``;
const SumPrice = styled.span``;
const Btn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeReq = async () => {
      try {
        const res = await userReq.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        dispatch(clearCart());
        navigate('/success', {data: res.data});
      } catch (e) {
        console.log(e);
      }
    };
    console.log(stripeToken)
    stripeToken && cart.total >= 1 && cart.quantity > 0 && makeReq();
  }, [stripeToken, cart.total, navigate]);

  return (
    <Cont>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your Shopping Cart</Title>
        <Top>
          <TopBtn>Continue Shopping</TopBtn>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopBtn type="filled">Checkout Now</TopBtn>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((item, i) => (
              <>
                <Product>
                  <ProdDets>
                    <Image src={item.img} />
                    <Dets>
                      <ProdName>
                        <b>Product: </b> {item.title}
                      </ProdName>
                      <ProdId>
                        <b>ID: </b> {item._id}
                      </ProdId>
                    </Dets>
                  </ProdDets>
                  <PriceDets>
                    <ProdAmountCont>
                      <Add />
                      <ProdAmount>{item.quantity}</ProdAmount>
                      <Remove />
                    </ProdAmountCont>
                    <ProdPrice>
                      {" "}
                      ${item.price &&
                        (item.price * item.quantity).toFixed(2)}{" "}
                    </ProdPrice>
                  </PriceDets>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SumItem>
              <SumTxt>Subtotal</SumTxt>
              <SumPrice>${cart.total}</SumPrice>
            </SumItem>
            <SumItem>
              <SumTxt>Estimated Shipping</SumTxt>
              <SumPrice>$20.90</SumPrice>
            </SumItem>
            <SumItem>
              <SumTxt>Shipping Discount</SumTxt>
              <SumPrice>- $20.90</SumPrice>
            </SumItem>
            <SumItem type="total">
              <SumTxt>Total</SumTxt>
              <SumPrice>${cart.total}</SumPrice>
            </SumItem>
            <StripeCheckout
              name="Shoply"
              image="https://avatars.githubusercontent.com/u/75468540?v=4"
              billingAddress
              shippingAddress
              description={`The total will be ${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Btn>Checkout</Btn>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Cont>
  );
};

export default Cart;
