import styled from 'styled-components';

const DivContainerImage = styled.div`
  background-image: url(./images/pizza.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  padding: 100px 0px;
`;

const DivParent = styled.div`
  margin: 300px 0px 0px 70px;
  @media (max-width: 900px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 40px;
  }
`;

const SubTitle = styled.h2`
  text-transform: uppercase;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 500;
  @media (max-width: 900px) {
    font-size: 20px;
    text-align: center;
  }
`;

const Home = () => {
    return (
        <DivContainerImage>
            <DivParent>
                <Title>Matt's Pizzeria</Title>
                <SubTitle>Pizza to fit any taste</SubTitle>
            </DivParent>
        </DivContainerImage>
    );
};

export default Home;