import React from "react";
import Digit from "./Digit";
import Colon from "./Colon";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <svg viewBox={[-1, -1, 12 * this.props.digitCount, 20]}>
        {this.props.value
          .toString()
          .padStart(this.props.digitCount, " ")
          .split("")
          .slice(-this.props.digitCount)
            .map((digit, key) =>{
                var isDecimal = this.props.decimalIndex == key+1;
                return <Digit
                  key={key}
                  value={digit}
                  x={key * 12}
                  color={this.props.color}
                  isDecimal= {isDecimal}
                />
            }
          )}
      </svg>
    );
  }
}

Display.defaultProps = {
  digitCount: 4,
  value: ""
};

export default Display;
