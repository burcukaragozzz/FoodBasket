import React, { Component } from 'react';
import './App.css';
import Menu from './menu';
import Basket from './basket';
import productListItems from './productList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      productList: productListItems,
      basketList: [],
      totalPrice: 0,
    };
  }

  calculateProductPiece = (name, count) => {
    let newProductList = JSON.parse(JSON.stringify(this.state.productList));

    newProductList.find(product => product.name === name).piece = count;
    this.setState({
      productList: newProductList
    });
  };

  onChangeInput = (e) => {
    let newProductList = JSON.parse(JSON.stringify(this.state.productList));

    newProductList.find(product => product.name === e.target.name).piece = e.target.valueAsNumber;
    this.setState({
      productList: newProductList
    });
  };

  addItemBasket = (name) => {
    let basket = JSON.parse(JSON.stringify(this.state.basketList));
    let selectedItem = this.state.productList.find(product => product.name === name);
    let totalPriceAllProduct = this.state.totalPrice + (selectedItem.price * selectedItem.piece);

    if (basket.find(product => product.name === name)) {
      basket.find(product => product.name === name).piece += selectedItem.piece;
    } else {
      basket.push(selectedItem);
    }
    this.setState({
      basketList: basket,
      totalPrice: totalPriceAllProduct
    });
    console.log(basket);
  };

  removeItemBasket = (name) => {
    let basket = JSON.parse(JSON.stringify(this.state.basketList));
    let index = basket.indexOf(basket.find(product => product.name === name));
    debugger;
    let selectedItem = this.state.productList.find(product => product.name === name);
    let totalPriceAllProduct = this.state.totalPrice - (selectedItem.price * basket[index].piece);

    basket.splice(index, 1);
    this.setState({
      basketList: basket,
      totalPrice: totalPriceAllProduct
    });
  };

  removeAllItemBasket = () => {
    this.setState({
      basketList: [],
      totalPrice: 0,
    })
  };

  orderConfirmed = () => {
    if(this.state.basketList.length !== 0){
      alert("Siparişiniz onaylandı!") ;

      this.setState({
        basketList: [],
        totalPrice: 0,
      })
    }
    else{
      alert("Sepetiniz boş, lütfen sepetinize ürün eklediğinizden emin olun! ")
    }
  };

  render() {
    const { productList, basketList, totalPrice } = this.state;

    return (
      <div className="content-wrapper">
        <div className="content-wrapper__header">
          <p className="content-wrapper__header-text">MENÜ</p>
          <p className="content-wrapper__header-text">SEPET</p>
        </div>
        <div className="menu-basket-contaiener">
          <div className="menu">
            <Menu
              productList={productList}
              calculateProductPiece={this.calculateProductPiece}
              onChangeInput={this.onChangeInput}
              addItemBasket={this.addItemBasket}
            />
          </div>
          <div className="basket">
            <Basket
              basketList={basketList}
              removeItemBasket={this.removeItemBasket}
              removeAllItemBasket={this.removeAllItemBasket}
              orderConfirmed={this.orderConfirmed}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
