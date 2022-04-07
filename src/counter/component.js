import React from 'react';

export const Component = ({ count, handleIncrementClick, handleDecrementClick }) => (


  <div>
      <pre>
          {
              JSON.stringify(count)
          }
      </pre>
    <h1>Helloworld React & Redux! </h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);