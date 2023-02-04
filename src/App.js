import { RedButton } from "./Components/Button.style";
import { Container } from "./Components/Container.style";

import { GlobalStyle } from "./globalStyles";
function App() {
  return (
    <>
      <Container>
        <GlobalStyle />
        <RedButton buttonLabel="CLick" bg="red"></RedButton>
      </Container>
    </>
  );
}

export default App;
