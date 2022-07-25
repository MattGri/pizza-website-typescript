import styled from 'styled-components';
import {
    FaTwitter,
    FaInstagram,
    FaFacebookSquare,
    FaLinkedin,
} from 'react-icons/fa';

const DivContainer = styled.div`
  background-color: #000;
  padding: 20px 0px;
`;

const DivParent = styled.div`
  width: 100%;
`;

const UlItems = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  @media (max-width: 360px) {
    flex-wrap: wrap;
  }
`;

const InstagramItem = styled(FaInstagram)`
  color: white;
  width: 50px;
  height: 50px;
  margin: 20px;
`;

const TwitterItem = styled(FaTwitter)`
  color: white;
  width: 50px;
  height: 50px;
  margin: 20px;
`;

const FacebookItem = styled(FaFacebookSquare)`
  color: white;
  width: 50px;
  height: 50px;
  margin: 20px;
`;

const LinkedinItem = styled(FaLinkedin)`
  color: white;
  width: 50px;
  height: 50px;
  margin: 20px;
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
`;

const Instagram = styled(InstagramItem)`
  cursor: pointer;
`;

const Twitter = styled(TwitterItem)`
  cursor: pointer;
`;

const Facebook = styled(FacebookItem)`
  cursor: pointer;
`;
const Linkedin = styled(LinkedinItem)`
  cursor: pointer;
`;

const Websites = styled.a`
  @media (max-width: 360px) {
    margin: 0 20px;
  }
`;

const Footer = () => {
    return (
        <DivContainer>
            <DivParent>
                <UlItems>
                    <Websites target="_blank" href="https://www.instagram.com">
                        <Instagram />
                    </Websites>
                    <Websites target="_blank" href="https://www.twitter.com">
                        <Twitter />
                    </Websites>
                    <Websites target="_blank" href="https://www.facebook.com">
                        <Facebook />
                    </Websites>
                    <Websites target="_blank" href="https://www.Linkedin.com">
                        <Linkedin />
                    </Websites>
                </UlItems>
                <Text>2022 pizza.com</Text>
            </DivParent>
        </DivContainer>
    );
};

export default Footer;
