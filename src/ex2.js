//2) create bootstrap page to display Car Detail using card. display car name, its price, no of seats, engine type and color. 
//create function that return card. pass car object which has name,price,seats, and engine type in it.


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//functional components
 function Car(props){
  return(
    <div classname= 'col-lg-4'>
      <div calssname='card'>
        <div classname='card-img-top' src={props.photo}>
          <div calssname='card-body'>
              <ul className='list-group list-group-flush'>
                 <li className='list-group-item'><h3>{props.name}</h3></li>
                 <li className='list-group-item'>Rs 4500000</li>
                 <li className='list-group-item'>8 seats</li>
                 <li className='list-group-item'>disel</li>
              </ul>
          </div>
          <div classname='footer'>
                <button classname='btn btn-info w-50'>add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
 }

 function Allcar() {
  let output = (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Products</h1> <hr />
          </div>
        </div>
        <div className='row'>
          <Car />
          <Car />
          <Car />
          <Car />
        </div>
      </div>
      <Footer />
    </div>
  );
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
root.render(<Allcar/>);
