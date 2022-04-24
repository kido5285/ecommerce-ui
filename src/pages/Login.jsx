import styled from "styled-components";
import { mobile } from "../responsive";
import {useState} from 'react';
import {login} from '../redux/apiCalls';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Cont = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1648559470669-59ad84eee849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  min-width: 320px;
  background-color: #fff;
  ${mobile({width: '75%', minWidth: 'none'})}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Submit = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin: 15px 0;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-style: 12px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Error = styled.span`
  color: red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password: pass});
  }
  return (
    <Cont>
      <Cont>
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input placeholder="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="password" type="password"  onChange={(e) => setPass(e.target.value)}/>
            <Submit onClick={handleClick} disabled={isFetching}>Login</Submit>
            {error && <Error>Something went wrong...</Error>}
            <Link href="/">Forgot Password?</Link>
            <Link href="/register">Create a new account</Link>
          </Form>
        </Wrapper>
      </Cont>
    </Cont>
  );
};

export default Login;
