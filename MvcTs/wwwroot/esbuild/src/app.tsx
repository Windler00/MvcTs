import React from 'react';
import ReactDOM from 'react-dom';
import Test from "./test"

function App() {
  return (
    <div>
        <h1>Hello, React!</h1>
        <Test></Test>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));