import React, { useState, useEffect } from 'react';

function Count() {
  const data=useState(0);
  console.log(data);
  const [count, setCount] = data;
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
export default Count