import React from "react";
import { TituloWrapper } from "./style";

interface iTitulo {
  children: React.ReactNode;
  cor: string;
  tamanhoFonte: string;
  alinhamento: string;
}

export default function Titulo({ cor, tamanhoFonte, alinhamento, children }: iTitulo) {
  return (
    <TituloWrapper cor={cor} tamanhoFonte={tamanhoFonte} alinhamento={alinhamento}>
      {children}
    </TituloWrapper>
  );
}
