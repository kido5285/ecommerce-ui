import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({flexDirecton: 'column'})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialCont = styled.div`
  display: flex;
`;
const SocialI = styled.div`
  width: 40px;
  height: 40px;
  color: #fff;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: '#fff8f8'})}
`;
const Center = styled.div`
  flex: 1;
  ${mobile({display: 'none'})}
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactI = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shoply</Logo>
        <Desc>
          The entire SHOPLY team prides ourselves on sourcing the very best and
          authentic modern design from around the world. Even more important is
          the customer experience. We work tirelessly - and we mean tirelessly -
          to make sure the entire online shopping experience is as
          customer-centric as possible. We want each and every customer to feel
          a part of the SHOPLY family whether they are buying a deck of gold
          playing cards or furnishing a hotel.
        </Desc>
        <SocialCont>
          <SocialI color="4267B2">
            <Facebook />
          </SocialI>
          <SocialI color="E4405F">
            <Instagram />
          </SocialI>
          <SocialI color="1DA1F2">
            <Twitter />
          </SocialI>
          <SocialI color="E60023">
            <Pinterest />
          </SocialI>
        </SocialCont>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem> Free Shipping + Returns </ListItem>
          <ListItem>Start a return</ListItem>
          <ListItem>Return Policy</ListItem>
          <ListItem>FAQs</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Trade Program</ListItem>
          <ListItem>Affiliate Program</ListItem>
          <ListItem>Terms of service</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Press Requests</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactI>
          <Room style={{ marginRight: "5px" }} /> 118 North Water St, Suite 105
          Lancaster PA 17603
        </ContactI>
        <ContactI>
          <Phone style={{ marginRight: "5px" }} /> (877)-404-6763
        </ContactI>
        <ContactI>
          <MailOutline style={{ marginRight: "5px" }} /> hello@shoply.com
        </ContactI>
      </Right>
    </Container>
  );
};

export default Footer;
