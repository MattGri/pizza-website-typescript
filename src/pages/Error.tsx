import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ErrorStatus = styled.p`
  text-align: center;
  margin: 80px 0px 20px 0px;
  font-size: 60px;
`;

const HomeButton = styled.button`
  display: block;
  margin: 10px auto 495px auto;
  cursor: pointer;
  color: #fff;
  background-color: #000;
  border: none;
  text-transform: uppercase;
  padding: 15px 25px;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background-color: #250202;
    color: #555575;
    transition: 0.5s;
  }
`;

const Text = styled.p`
  text-transform: uppercase;
  color: #7a7e81;
  text-align: center;
`;

const ErrorPage = () => {

  useEffect(() => {
    document.title = 'Error';
  }
    , []);

  const navigate = useNavigate();

  return (
    <>
      <ErrorStatus>404</ErrorStatus>
      <Text>The selected page does not exist :(</Text>
      <HomeButton onClick={() => navigate('/')}>Home Page</HomeButton>
    </>
  );
};

export default ErrorPage;