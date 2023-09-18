import { Item, ListWrapper } from "./style";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

export default function OpcoesHeader() {
  return (
    <>
      <ListWrapper>
        {textoOpcoes.map((texto, index) => (
          <Item className="opcao" key={`menu-${index}`}>
            <p>{texto}</p>
          </Item>
        ))}
      </ListWrapper>
    </>
  );
}
