// import ReactTooltip from 'react-tooltip';
import "semantic-ui-css/semantic.min.css";
import { Popup } from "semantic-ui-react";

import './App.css';

// const colorToHex = color => {
//   var hex = color.toString(16);
//   return (hex.length === 1 && "0" + hex) || hex;
// }

// const colorToHex = color => color.toString(16).padStart(2, '0');

// const convertRGBtoHex = (red, green, blue) => {
//   return '#' + colorToHex(red) + colorToHex(green) + colorToHex(blue);
// }

const App = () => {
  var colorBlocks = [];

  for (var red = 8; red < 256; red += (red === 248) ? 7 : 8) {
    const redInHEX = red.toString(16).padStart(2, '0');

    for (var green = 8; green < 256; green += (green === 248) ? 7 : 8) {
      const greenInHEX = green.toString(16).padStart(2, '0');

      for (var blue = 8; blue < 256; blue += (blue === 248) ? 7 : 8) {
        const blueInHEX = blue.toString(16).padStart(2, '0');
        const backgroundColor = `#${redInHEX}${greenInHEX}${blueInHEX}`;

        colorBlocks.push(
          <Popup
            key={backgroundColor}
            trigger={<div className="inner" style={{ backgroundColor }}></div>}
          >
            {backgroundColor}
          </Popup>
        );
      }
    }
  }

  return (
    <div className="main">
      {colorBlocks}
    </div>
  );
}

export default App;