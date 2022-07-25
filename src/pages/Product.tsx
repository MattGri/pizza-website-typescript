import styled from 'styled-components';

const MenuContainer = styled.div`
  padding: 20px 0px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const DivWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const DivBox = styled.div`
  margin: 20px;
  border: 1px solid black;
  border-radius: 20px;
  @media (max-width: 1000px) {
    margin: 20px auto;
  }
`;

const PizzaImage = styled.img`
  width: 300px;
  height: 250px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @media (max-width: 1000px) {
    display: block;
    margin: 0 auto;
  }
`;

const DivContainer = styled.div`
  padding: 20px 0px;
  margin-left: 20px;
`;

const PizzaTitle = styled.h2`
  margin-bottom: 10px;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Price = styled.p`
  font-size: 13px;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Product = () => {
  return (
    <MenuContainer>
      <Title>Our Menu</Title>
      <DivWrapper>
        <DivBox>
          <PizzaImage src="../images/pepperoni.jpg" alt="Pepperoni Pizza" />
          <DivContainer>
            <PizzaTitle>Pepperoni Pizza</PizzaTitle>
            <Price>$15.99</Price>
          </DivContainer>
        </DivBox>
        <DivBox>
          <PizzaImage src="../images/margherita.jpg" alt="Margherita Pizza" />
          <DivContainer>
            <PizzaTitle>Margherita Pizza</PizzaTitle>
            <Price>$11.99</Price>
          </DivContainer>
        </DivBox>
        <DivBox>
          <PizzaImage src="../images/mattspizza.jpg" alt="Matt's Pizza" />
          <DivContainer>
            <PizzaTitle>Matt's Special Pizza</PizzaTitle>
            <Price>$19.99</Price>
          </DivContainer>
        </DivBox>
      </DivWrapper>
      <DivWrapper>
        <DivBox>
          <PizzaImage src="../images/vegan.jpg" alt="Vegan Pizza" />
          <DivContainer>
            <PizzaTitle>Vegan Pizza</PizzaTitle>
            <Price>$17.99</Price>
          </DivContainer>
        </DivBox>
        <DivBox>
          <PizzaImage src="../images/pineapple.jpg" alt="Pineapple Pizza" />
          <DivContainer>
            <PizzaTitle>Pineapple Pizza</PizzaTitle>
            <Price>$4.99</Price>
          </DivContainer>
        </DivBox>
        <DivBox>
          <PizzaImage src="../images/expensive.jpg" alt="Pedro Pizza" />
          <DivContainer>
            <PizzaTitle>Very Expensive Pizza</PizzaTitle>
            <Price>$99.99</Price>
          </DivContainer>
        </DivBox>
      </DivWrapper>
    </MenuContainer>
  );
};

export default Product;