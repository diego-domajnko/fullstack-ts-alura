import styled from "styled-components";

export const PesquisaWrapper = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  min-height: 270px;
  text-align: center;
  padding: 85px 0;
  width: 100%;
`;

export const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

export const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const Resultado = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`;
