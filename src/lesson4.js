import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MarkSheet(student) {
  let output = (<div className='container'>
    <div className='row'>
      <div className='col-6 offset-3'>
          <div className='card'>
              <div className='card-header'>
                  <h3>{student.fullname}</h3>
              </div>
              <div className='card-body'>
                  <table className='table table-bordered'>
                      <tr>
                          <td>Maths</td>
                          <td>
                            {student.maths}
                          </td>
                      </tr>
                      <tr>
                          <td>Science</td>
                          <td>
                              {student.science}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              english
                          </td>
                          <td>
                              {student.english}
                          </td>
                      </tr>
                      <tr>
                          <td>Total</td>
                          <td>
                              {student.maths + student.science + student.english}
                          </td>
                      </tr>
                      <tr>
                          <td>Average</td>
                          <td>
                          {(student.maths + student.science + student.english)/3}
                          </td>
                      </tr>
                  </table>
              </div>
          </div>
      </div>
    </div>
  </div>);
  return output;
}
let student = {
  fullname: 'Rahul bhatt',
  maths: 85,
  science: 90,
  english: 100
}
root.render(MarkSheet(student));