import styled from "styled-components";

export const Card = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  width: 100%;
`;

export const Botao = styled.button`
  background-color: #eb9b00;
  border: none;
  color: #fff;
  display: block;
  font-size: 16px;
  font-weight: 900;
  padding: 10px 0px;
  text-align: center;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`;

export const Descricao = styled.p`
  max-width: 300px;
`;

export const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

export const ImgLivro = styled.img`
  width: 150px;
`;
