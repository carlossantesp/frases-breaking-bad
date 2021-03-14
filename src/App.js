import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";
import breakingBad from "./breaking-bad.jpg";
import logo from "./logo.svg";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "logo" "img" "frase";
  padding: 1rem;
  max-width: 400px;
  align-items: stretch;
  @media (min-width: 768px) {
    grid-template-areas: "logo logo" "img frase";
    grid-template-columns: 1fr 1fr;
    max-width: 900px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (min-width: 1440px) {
    max-width: 1000px;
  }
`;

const LogoWrapper = styled.div`
  grid-area: logo;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ImageWrapper = styled.div`
  grid-area: img;
  width: 100%;
  max-height: 20rem;
  overflow: hidden;
  @media (min-width: 768px) {
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 992px) {
    max-height: initial;
    height: auto;
  }
`;

const FraseWrapper = styled.section`
  grid-area: frase;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.2);
  @media (min-width: 992px) {
    padding: 2rem;
  }
`;

const Logo = styled.img`
  width: 10rem;
  margin-inline: auto;
  @media (min-width: 768px) {
    width: 12em;
  }
`;

const ImagenApp = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Boton = styled.button`
  cursor: pointer;
  border: none;
  display: block;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  margin-top: 1rem;
  border-radius: 2rem;
  margin-inline: auto;
  text-transform: uppercase;
  font-weight: bold;
  transition: background 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.65);
  }
`;

function App() {
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );

    const frase = await api.json();

    setFrase(frase[0]);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo src={logo} alt="Logo breaking bad" />
      </LogoWrapper>
      <ImageWrapper>
        <ImagenApp src={breakingBad} alt="walter breaking bad" />
      </ImageWrapper>
      <FraseWrapper>
        <Frase frase={frase} />
        <Boton onClick={consultarAPI}>Obtener Frase</Boton>
      </FraseWrapper>
    </Wrapper>
  );
}

export default App;
