import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//functional components
function Menu() {
  return (<div className='container-fluid bg-light'>
    <div className='row'>
      <div className='col-12'>
        <ul className='nav'>
          <li className='nav-link'>
            <a className='nav-link' href='#'>Home</a>
          </li>
          <li className='nav-link'>
            <a className='nav-link' href='#'>About us</a>
          </li>
          <li className='nav-link'>
            <a className='nav-link' href='#'>Product</a>
          </li>
          <li className='nav-link'>
            <a className='nav-link' href='#'>Service</a>
          </li>
          <li className='nav-link'>
            <a className='nav-link' href='#'>Contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>);
}
function Footer() {
  return (<div className='container-fluid text-bg-dark'>
    <div className='row'>
      <div className='col-12'>
        <p className='text-center'>Developed By frontend21@theeasylearn</p>
      </div>
    </div>
  </div>);
}
function Product() {
  return (<div className='col-lg-3'>
    <div className='card'>
      <img className='card-img-top' src='https://picsum.photos/300' />
      <div className='card-body'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><h3>IPhone</h3></li>
          <li className='list-group-item'>Rs 125000</li>
          <li className='list-group-item'>10 left</li>
        </ul>
      </div>
      <div className='card-footer'>
        <button className='btn btn-danger w-100'>Add to cart</button>
      </div>
    </div>
  </div>);
}
function Page() {
  let output = (
    <div>
      <Menu />
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Products</h1> <hr />
          </div>
        </div>
        <div className='row'>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <Footer />
    </div>
  );
  return output;
}
//call DigitalClock at interval of 1 seconds
root.render(<Page />);