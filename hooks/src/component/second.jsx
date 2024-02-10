import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import First from "./first";

function UseHooks() {
  const [currLikes, setLikes] = useState(0);
  const [state, changeState] = useState(true);
  const [displayContext, setDisplayContext] = useState(false);
  const contextValue = useContext(First);

  useEffect(() => {
    const bgColor = state ? "black" : "grey";
    const content = document.getElementById("content");
    content.style.backgroundColor = bgColor;
  }, [state]);

  const handleLikes = () => {
    setLikes(currLikes + 1);
  };

  const handleToggle = () => {
    changeState(!state);
  };

  const toggleContext = () => {
    setDisplayContext(!displayContext);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle</button>
      <div id="content">
        <p style={{ display: displayContext ? "block" : "none" }}>
          {contextValue}
        </p>
        <button onClick={toggleContext}>Content</button>
        <h3>{currLikes}</h3>
        <button onClick={handleLikes}>Like</button>
      </div>
    </div>
  );
}

export default UseHooks;