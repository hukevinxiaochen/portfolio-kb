import React from "react";

export const Test = ({ children }) => {
  return (
    <div id="test">
      <h3>This is a test</h3>
      <p>
        Children go here:<span>{children}</span>
      </p>
    </div>
  );
};
