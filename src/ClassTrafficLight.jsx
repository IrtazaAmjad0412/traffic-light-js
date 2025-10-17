import React from "react";

export class ClassTrafficLight extends React.Component {
  state = {
    count: 0,
  };

  nextTrafficLight = () => {
    const { colors } = this.props;
    this.state.count === 0
      ? this.setState({ count: colors.length - 1 })
      : this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { colors } = this.props;
    const currentTrafficLightColor = colors[this.state.count];

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          {colors.map((color) => {
            return (
              <div
                key={color}
                className={
                  currentTrafficLightColor === color ? `circle ${color}` : `circle black`
                }
              ></div>
            );
          })}
        </div>
        <button
          className="next-state-button"
          onClick={() => {
            this.nextTrafficLight();
          }}
        >
          Next State
        </button>
      </div>
    );
  }
}
