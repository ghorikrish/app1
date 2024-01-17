import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function DigitalClock() {
  //create data class object 
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm  = null;
  if(hour>=12)
    ampm = "PM";
  else 
    ampm = "AM"
  let output = (<div className='container'>
    <div className='row'>
      <div className='col-12'>
            <table width='25%' className='table-bordered' align='center'>
                <tr>
                    <th><h1>{hour}</h1></th>
                    <th><h1>{minute}</h1></th>
                    <th><h1>{seconds}</h1></th>
                    <th><h1>{ampm}</h1></th>
                </tr>
            </table>
      </div>
    </div>
  </div>);
  root.render(output);
}
//call DigitalClock at interval of 1 seconds
setInterval(DigitalClock,1000);