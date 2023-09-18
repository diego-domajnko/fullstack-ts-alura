import Titulo from "../Titulo";
import { Botao, Card, Descricao, ImgLivro, Subtitulo } from "./style";

interface iCard {
  titulo: string;
  subtitulo: string;
  descricao: string;
  img: string;
}

export default function CardRecomenda({ titulo, subtitulo, descricao, img }: iCard) {
  return (
    <>
      <Card>
        <div>
          <Titulo tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">
            {titulo}
          </Titulo>
          <Subtitulo>{subtitulo}</Subtitulo>
          <Descricao>{descricao}</Descricao>
        </div>
        <div>
          <ImgLivro src={img} />
          <Botao>Saiba mais</Botao>
        </div>
      </Card>
    </>
  );
}
