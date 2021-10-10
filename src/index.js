import React from 'react';
import ReactDOM from 'react-dom';
import InfiniteScroll from "react-infinite-scroll-component";

import './index.css';

const App = () => {
  const [redValue, setRedValue] = React.useState(8);
  const [hasMoreBlocks, setHasMoreBlocks] = React.useState(true);
  const [colorBlocks, setColorBlocks] = React.useState([]);

  React.useEffect(() => {
    setBlocks(redValue);
  }, []);

  const setBlocks = (red) => {
    var tempColorBlocks = [];
    const redInHEX = red.toString(16).padStart(2, '0');

    for (var green = 8; green < 256; green += (green === 248) ? 7 : 8) {
      const greenInHEX = green.toString(16).padStart(2, '0');

      for (var blue = 8; blue < 256; blue += (blue === 248) ? 7 : 8) {
        const blueInHEX = blue.toString(16).padStart(2, '0');
        const backgroundColor = `#${redInHEX}${greenInHEX}${blueInHEX}`;
        const tooltip = `RGB(${red},${green},${blue}); HEX ${backgroundColor}`;

        tempColorBlocks.push(
          <div key={backgroundColor} title={tooltip} className="inner" style={{ backgroundColor }}>
          </div>
        );
      }
    }

    setColorBlocks([...colorBlocks, tempColorBlocks])
  }

  const renderMoreColorBlocks = () => {
    if (redValue >= 255) {
      setHasMoreBlocks(false);
    }
    else {
      const red = redValue + (redValue === 248 ? 7 : 8);
      setRedValue(red);
      setBlocks(red);
    }
  }

  return (
    <div id="main" className="main">
      <InfiniteScroll
        dataLength={colorBlocks.length}
        next={renderMoreColorBlocks}
        hasMore={hasMoreBlocks}
        loader={<h4>Loading...</h4>}
        endMessage={<p style={{ margin : '0 auto' }}><b>NO MORE COLORS!</b></p>}
      >
        {colorBlocks}          
      </InfiniteScroll>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);