import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export default function Combo2() {
  const { userName } = useContext(AppContext);
  return (
    <div>
      Combo2 <h1>{userName}</h1>
    </div>
  );
}
