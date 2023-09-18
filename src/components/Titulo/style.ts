import styled from "styled-components";

interface iTitulo {
  cor: string;
  tamanhoFonte: string;
  alinhamento: string;
}

export const TituloWrapper = styled.h2<iTitulo>`
  background-color: #fff;
  color: ${(props) => props.cor || "#eb9b00"};
  font-size: ${(props) => props.tamanhoFonte || "18px"};
  margin: 0;
  padding: 30px 0;
  text-align: ${props => props.alinhamento || 'center'};
  width: 100%;
`;
