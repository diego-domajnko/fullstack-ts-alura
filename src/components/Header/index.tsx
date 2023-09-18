import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import { HeaderWrapper } from "./style";

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderWrapper>
  );
}
