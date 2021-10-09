import React from 'react';

import './App.css';

const App = () => {
  const colorBlocks = [];

  for (var red = 8; red < 256; red += (red === 248) ? 7 : 8) {
    const redInHEX = red.toString(16).padStart(2, '0');

    for (var green = 8; green < 256; green += (green === 248) ? 7 : 8) {
      const greenInHEX = green.toString(16).padStart(2, '0');

      for (var blue = 8; blue < 256; blue += (blue === 248) ? 7 : 8) {
        const blueInHEX = blue.toString(16).padStart(2, '0');
        const backgroundColor = `#${redInHEX}${greenInHEX}${blueInHEX}`;
        const tooltip = `RGB(${red},${green},${blue}); HEX ${backgroundColor}`;

        colorBlocks.push(
          <div key={backgroundColor}  title={tooltip} className="inner" style={{ backgroundColor }}>
          </div>
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