import { useState } from "react";

const trafficLightColors = ["red", "yellow", "green"];

export const FunctionalTrafficLight = () => {
  const [trafficLightIndex, setTrafficLightIndex] = useState(0);
  const currentTrafficLightColor = trafficLightColors[trafficLightIndex];

  const nextTrafficLight = () =>
    trafficLightIndex === 0
      ? setTrafficLightIndex(trafficLightColors.length - 1)
      : setTrafficLightIndex(trafficLightIndex - 1);

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={currentTrafficLightColor === "red" ? "circle red" : "circle black"}
        ></div>
        <div
          className={
            currentTrafficLightColor === "yellow" ? "circle yellow" : "circle black"
          }
        ></div>
        <div
          className={
            currentTrafficLightColor === "green" ? "circle green" : "circle black"
          }
        ></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => {
          nextTrafficLight();
        }}
      >
        Next State
      </button>
    </div>
  );
};
