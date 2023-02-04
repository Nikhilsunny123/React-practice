import { useState, createContext } from "react";
import Compo1 from "./Components/Compo1";

export const AppContext = createContext(null);

function App() {
  const [userName, setUserName] = useState("nik");
  return (
    <>
      <AppContext.Provider value={{ userName, setUserName }}>
        <div>
          <h1>Context api</h1>
          <Compo1 />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
