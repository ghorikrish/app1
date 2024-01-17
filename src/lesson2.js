import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//variable declaration
var num1 = 10;
var num2 = 3;
var output = (<div>
                <h1 className='heading'>Expression in Reactjs</h1>
                <hr/>
                <ul className='myStyle'>
                    <li>num1 = {num1} num2 = {num2}</li>
                    <li>Addition = {num1+num2}</li>
                    <li>Substraction = {num1-num2}</li>
                    <li>Multiplication = {num1*num2}</li>
                    <li>Division = {num1 / num2}</li>
                </ul>
              </div>)
root.render(output);