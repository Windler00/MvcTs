import React from 'react';
import ReactDOM from 'react-dom';
import Test from "./test/test"
import { fontTest } from "./app.module.css";

function App() {
  return (
    <div>
        <h1 className={fontTest}>Hello, React!</h1>
        <Test></Test>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));