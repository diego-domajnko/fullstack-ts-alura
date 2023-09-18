import Header from "./components/Header";
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from "./components/UltimosLancamentos";
import { AppWrapper } from "./styles/App";

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppWrapper>
  );
}

export default App;
