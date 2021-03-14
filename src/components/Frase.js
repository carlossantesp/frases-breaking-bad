import React from "react";
import styled from "@emotion/styled";

const ContenedorFrase = styled.article`
  margin-bottom: 2rem;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    position: relative;
    &::before {
      content: open-quote;
      font-size: 3rem;
      color: black;
      position: relative;
      left: 0;
      top: 1rem;
    }
  }
  p {
    text-align: right;
    color: #444;
  }
  @media (min-width: 1440px) {
    h1 {
      font-size: 2rem;
      &::before {
        content: open-quote;
        font-size: 4rem;
      }
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

const Frase = ({ frase }) => {
  if (Object.keys(frase).length === 0) return null;
  return (
    <ContenedorFrase>
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
