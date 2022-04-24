import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.ind * -100}vw);
  transition: all 500ms;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  transform: translateX(0vw);
  transition: all 300ms;
`;

const ImgCont = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoCont = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 78px;
`;
const Descrip = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Btn = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #000;
  outline: none;
  transition: all 500ms;
  &:hover {
    padding: 15px;
  }
`;

const Slider = () => {
  const [ind, setInd] = useState(0);

  const switchSlide = (d) => {
    if (d === "left") {
      setInd(ind > 0 ? ind - 1 : 2);
    } else {
      setInd(ind < 2 ? ind + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => switchSlide("left")}>
        <ArrowLeftOutlined fontSize="large"/>
      </Arrow>
      <Wrapper ind={ind}>
        <Slide bg="f5fafd">
          <ImgCont>
            <Image src="https://cdn.shopify.com/s/files/1/1087/6904/files/normanlight2_2000x.jpg?v=1647945101" />
          </ImgCont>
          <InfoCont>
            <Title>Normann Copenhagen</Title>
            <Descrip>
              Normann Copenhagen is a Danish design company established in 1999
              with the mission to create original and innovative products in a
              simple and contemporary design that withstands the test of time.
            </Descrip>
            <Btn>SHOP NOW</Btn>
          </InfoCont>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgCont>
            <Image src="https://cdn.shopify.com/s/files/1/1087/6904/products/82767314228f0fd9305c05e01a0b9fdd_1400x.jpg?v=1571438954" />
          </ImgCont>
          <InfoCont>
            <Title>Perch Bunk Bed </Title>
            <Descrip>
              The elegant Perch bunk bed is the perfect centerpiece for any
              child's room. Its compact footprint leaves plenty of room for play
              and additional furnishings. The versatile Perch easily separates
              into a loft bed and a standalone twin, giving many configuration
              options.
            </Descrip>
            <Btn>SHOP NOW</Btn>
          </InfoCont>
        </Slide>
        <Slide bg="F7F5FB">
          <ImgCont>
            <Image src="https://cdn.shopify.com/s/files/1/1087/6904/products/bfe5bbb5ab8617d1d31d1878ca434220fb3568bb_640x_2x.progressive_a006b786-f6cc-472e-ba38-39034433d61b_1400x.jpg?v=1587212995" />
          </ImgCont>
          <InfoCont>
            <Title>Offset Coffee Table</Title>
            <Descrip>
              The Offset Coffee Table is a playful and irregular screw together
              furniture piece which displays the beauty of solid oak in generous
              proportions. Designed by Philippe Malouin, each Offset leg
              attaches to the top by way of an off-centre threaded connector -
              ensures that each leg finally rests in an individualistic
              position. Solid, stable and hardwearing, this is a durable piece
              for everyday use.
            </Descrip>
            <Btn>SHOP NOW</Btn>
          </InfoCont>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => switchSlide("right")}>
        <ArrowRightOutlined fontSize="large"/>
      </Arrow>
    </Container>
  );
};

export default Slider;
