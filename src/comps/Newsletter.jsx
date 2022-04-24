import { Send } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({padding: '10px'})}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Des = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign: 'center'})}
`;
const InputCont = styled.div`
  width: 50%;
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({width: '80%'})}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  height: 100%;
  outline: none;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: #fff;
  height: 100%;
  margin-top: 0px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Des>Receive offers, invites and updates</Des>
      <InputCont>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputCont>
    </Container>
  );
};

export default Newsletter;
