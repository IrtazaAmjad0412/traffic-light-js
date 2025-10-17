import { useState } from "react";

export const FunctionalTrafficLight = ({ colors }) => {
  const [trafficLightIndex, setTrafficLightIndex] = useState(0);
  const currentTrafficLightColor = colors[trafficLightIndex];

  const nextTrafficLight = () =>
    trafficLightIndex === 0
      ? setTrafficLightIndex(colors.length - 1)
      : setTrafficLightIndex(trafficLightIndex - 1);

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        {colors.map((color) => {
          return (
            <div
              key={color}
              className={
                currentTrafficLightColor === color ? `circle ${color}` : "circle black"
              }
            ></div>
          );
        })}
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
