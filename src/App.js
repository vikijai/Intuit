import "./App.css";
import Tooltip from "./Tooltip";
import CustomIframe from "./CustomIframe";
import { useState } from "react";

function App() {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleTooltipClick = (e) => {
    const { clientX, clientY } = e;
    setTooltipPosition({ x: clientX, y: clientY });
    setTooltipVisible(!tooltipVisible);
  };
  return (
    <div className="App">
      <p>Iframes in React</p>
      <CustomIframe title="A custom made iframe" onClick={handleTooltipClick} width="500" height="250">
        <form>
          <p>firstName</p>
          <p>LastName</p>
          <p>Login</p>
          <input type="text" />
          <p>password</p>
          <input type="password" />
        </form>
        {tooltipVisible && (
          <Tooltip tooltipPosition={tooltipPosition} />
        )}
      </CustomIframe>
    </div>
  );
}

export default App;
