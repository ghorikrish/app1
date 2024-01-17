import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output = (<div className='container'>
  {/* /* example of boostrap in reactjs     */}
  <div className='row'>
    <div className='col-6 offset-3'>
      <div className='card'>
        <div className='card-header text-bg-primary'>
          <div className='h1'>Login</div>
        </div>
        <div className='card-body'>
            <form>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type='email' id='email' className='form-control' required placeholder='Email' />
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input type='password' id='password' className='form-control' required placeholder='Password' />
              </div>
              <div className='d-flex justify-content-end'>
                <button type='submit' className='btn btn-primary'>Login</button>
                <button type='reset' className='btn btn-danger'>Clear all</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</div>)
root.render(output);