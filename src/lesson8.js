import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//functional components
class Menu extends React.Component {
  render() {
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
}
class Footer extends React.Component {
  render() {
    return (<div className='container-fluid text-bg-dark'>
      <div className='row'>
        <div className='col-12'>
          <p className='text-center'>Developed By frontend21@theeasylearn</p>
        </div>
      </div>
    </div>);
  }
}

class Product extends React.Component {
  constructor(props)
  {
    super(props); //calling parent class constructor otherwise render method is not called.
    //create property variables
    this.name = props.name;
    this.price = props.price;
    this.stock = props.stock;
    this.photo = props.photo;
  }

  render() {
    return (<div className='col-lg-3'>
      <div className='card'>
        <img className='card-img-top' src={this.photo} />
        <div className='card-body'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'><h3>{this.name}</h3></li>
            <li className='list-group-item'>Rs {this.price}</li>
            <li className='list-group-item'>{this.stock} left</li>
          </ul>
        </div>
        <div className='card-footer'>
          <button className='btn btn-danger w-100'>Add to cart</button>
        </div>
      </div>
    </div>);
  }
}
class Page extends React.Component {
  render() {
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
            <Product name='Macbook' price='99000' stock='9' photo='https://picsum.photos/300?random=1' /> {/* it will call the constructor of product class */}

            <Product name='IPad' price='45000' stock='8' photo='https://picsum.photos/300?random=2' />

            <Product name='IWatch' price='28000' stock='19' photo='https://picsum.photos/300?random=3' />

            <Product name='apple tv' price='225000' stock='3' photo='https://picsum.photos/300?random=4' />
          </div>
        </div>

        <Footer />
      </div>
    );
    return output;
  }
}
root.render(<Page />);