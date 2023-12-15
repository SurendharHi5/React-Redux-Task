import React from 'react'
import { connect } from 'react-redux'
import { increaseQuantity, decreaseQuantity, updatePrice } from './actions'

function CartPage({ products, increaseQuantity, decreaseQuantity, updatePrice }) {
   
    var totalAmount = 0;
    var totalQuantity = 0;


  return (
    <div>
<section className="h-100" style={{backgroundColor: "#eee" }}>
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          
        </div>

        {products.map(product=>{
            totalAmount += product.price * product.quantity;
                  totalQuantity += product.quantity
                  return(
            <div key={product.id}>

        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src={product.thumbnail}
                  className="img-fluid rounded-3" alt="Cotton T-shirt" />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">{product.title}</p>
                <p>{product.description}</p>
                <p><p>Brand : {product.brand} </p></p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                  onClick={() =>decreaseQuantity(product.id)}>
                  <i className="fas fa-minus"></i>
                </button>

                <input id="form1" min="0"  value={product.quantity} type="number"
                  className="form-control form-control-sm text-center" />

                <button className="btn btn-link px-2"
                 onClick={() =>increaseQuantity(product.id)}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">Price : ${product.price * product.quantity}</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        </div>
        )})}


        <div className="card mb-4">
          <div className="card-body p-4 d-flex flex-row">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Total Quantity 
                <span>{totalQuantity}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Free</span>
              </li>
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                
                </div>
                <span><strong>${totalAmount}</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
            
          </div>
        </div>

        

      </div>
    </div>
  </div>
</section>
        
    </div>
  );
}

const mapStateToprops = state =>({
   products:state.products
});

const mapDispatchToProps = {
    increaseQuantity,
    decreaseQuantity,
    updatePrice
};

export default connect(mapStateToprops, mapDispatchToProps)(CartPage);