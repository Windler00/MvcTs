import React from 'react';
import ReactDOM from 'react-dom';
import { testFont} from "./test.module.css"

const Test = () =>  {
    return (
        <div>
            <h1 className={testFont}>
                Test
            </h1>
        </div>
    );
}

export default Test