import perfil from "../../assets/perfil.svg";
import sacola from "../../assets/sacola.svg";
import { Item, ListWrapper } from "./style";
const icones = [perfil, sacola];

export default function IconesHeader() {
  return (
    <>
      <ListWrapper>
        {icones.map((icone, index) => (
          <Item className="icone" key={`icone-${index}`}>
            <img src={icone} />
          </Item>
        ))}
      </ListWrapper>
    </>
  );
}
