import React, { FC, ReactElement } from "react";

import Face from "./Face";

const Emotions: FC = (): ReactElement => {
  return (
    <div className="App">
      <h1>Emotions </h1>
      <h2> Give me Click! </h2>
      <Face color={"cyan"} x={150} y={130} />
      <Face color={"yellow"} x={150} y={260} />
      <Face color={"pink"} x={150} y={200} />
    </div>
  );
};

export default Emotions;
