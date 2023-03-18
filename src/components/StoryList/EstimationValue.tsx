import React from "react";
import "./EstimationValue.css";

type ClickFunction = (value: string) => void;
type Props = {
  value: string;
  onClick: ClickFunction;
};

const EstimationValue = (props: Props) => {
  return (
    <div
      className="card value-card col-5 col-md-4 col-lg-2 align-middle"
      onClick={() => props.onClick(props.value)}
    >
      <p className="estimation-text display-1 text-center mt-2">{props.value}</p>
    </div>
  );
};

export default EstimationValue;
