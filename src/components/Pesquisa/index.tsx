import { useState } from "react";
import Input from "../Input";
import { PesquisaWrapper, Resultado, Subtitulo, Titulo } from "./style";
import { livros } from "./dadosPesquisa";

interface iLivros {
  nome: string;
  id: number;
  src: string;
}

export default function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState<iLivros[]>([]);

  return (
    <>
      <PesquisaWrapper>
        <Titulo>Já sabe por onde começar?</Titulo>
        <Subtitulo>Encontre seu livro em nossa estante:</Subtitulo>
        <Input
          placeholder="Escreva sua próxima leitura"
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
            const textoDigitado = e.target.value;
            const resultadoPesquisa = livros.filter((livro) => livro.nome.includes(textoDigitado));
            setLivrosPesquisados(resultadoPesquisa);
          }}
        />

        {livrosPesquisados.map((livro) => (
          <Resultado>
            <p>{livro.nome}</p>
            <img src={livro.src} />
          </Resultado>
        ))}
      </PesquisaWrapper>
    </>
  );
}
