import { LogoImage, LogoWrapper } from "./style";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <>
      <LogoWrapper className="logo">
        <LogoImage src={logo} alt="logo" className="logo-img" />
        <p>
          <strong>Alura</strong> Books
        </p>
      </LogoWrapper>
    </>
  );
}
