import React from "react";
import Combo2 from "./Combo2";
import { useContext } from "react";
import { AppContext } from "../App";

function Compo1() {
  const { setUserName } = useContext(AppContext);

  return (
    <div>
      Compo1
      <button
        onClick={() => {
          setUserName("you");
        }}
      >
        Change
      </button>
      <Combo2 />
    </div>
  );
}

export default Compo1;
