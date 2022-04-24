import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { mobile } from "../responsive";
import app from '../firebase';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { register } from "../redux/apiCalls";
import { Link } from "react-router-dom";

const Cont = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(https://images.unsplash.com/photo-1535057091038-4602e2fa7a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)
    no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  min-width: 320px;
  background-color: #fff;
  ${mobile({ width: "75%", minWidth: "none" })}
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
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
const MustAgree = styled.span`
  font-size: 15px;
  margin: 20px 0;
`;
const Submit = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`;

const Register = () => {
  const [userN, setUserN] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();

  const createUser = (e) => {
    e.preventDefault();
    if(file){
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const StorageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(StorageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const user = {username: userN, email, password, img: downloadURL};
            register(dispatch, user);
          });
        }
      );
    } else {
      const user = {username: userN, email, password, img: ''};
      register(dispatch, user);
    }
  };

  return (
    <Cont>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="name" required/>
          <Input placeholder="username" onChange={(e) => setUserN(e.target.value)} required/>
          <Input placeholder="email"  onChange={(e) => setEmail(e.target.value)} type="email" required/>
          <Input placeholder="password"  onChange={(e) => setPassword(e.target.value)} type="password" required/>
          <Input placeholder="confirmed" onChange={(e) => setPassword(e.target.value)} type="password" required/>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: 'center',
              flex: 1,
              minWidth: "40%",
              margin: "20px 10px 0 0",
              padding: "10px",
            }}
          >
            <span style={{ marginRight: '10px' }}>Avatar(optional): </span>
            <input placeholder="avatar" type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <MustAgree>
            By creating An account, you must agree to our{" "}
            <b>TOS(Terms of service)</b> and <b>Privacy Policy</b>
          </MustAgree>
          <Submit onClick={createUser}>Create</Submit>
        </Form>
          <p style={{margin: '10px 0px'}}>
            <Link to="/login">Already have an account</Link>
          </p>
      </Wrapper>
    </Cont>
  );
};

export default Register;
