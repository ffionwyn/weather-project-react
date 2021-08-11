import React from "react";
import "./styles.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="Degrees">
        <h1 className="current-degrees">{props.value} °C</h1>
      </div>
    </div>
  );
}
