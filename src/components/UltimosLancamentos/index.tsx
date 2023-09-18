import CardRecomenda from "../CardRecomenda";
import imagemLivro from "../../assets/livro2.png";
import Titulo from "../Titulo";
import { livros } from "./dadosUltimosLancamentos";
import { NovosLivrosContainer, UltimosLancamentosContainer } from "./style";

export default function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor={"#EB9B00"} tamanhoFonte={"36px"} alinhamento="center">
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />
    </UltimosLancamentosContainer>
  );
}
