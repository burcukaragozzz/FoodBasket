import React, { Component } from 'react';
import './App.css';

class Basket extends Component {
  render() {
    const { basketList, removeItemBasket, removeAllItemBasket, totalPrice, orderConfirmed} = this.props;

    let ProductBasketMaps = basketList.map((food, i) =>
      <div className="product-basket" key={food.name}>
        <div className="product-basket__name">{food.name}</div>
        <div className="product-basket__piece">{food.piece}</div>
        <div className="product-basket__price">{(food.piece * food.price) + " TL"}</div>
        <button className="product-basket__remove-button" onClick={() => removeItemBasket(food.name)}>Sepetten Çıkar</button>
      </div>
    )

    return (
      <>
        <div className="basket-header">
          <p className="basket-header__text">Ürün Adı</p>
          <p className="basket-header__text">Ürün Adedi</p>
          <p className="basket-header__text">Ürün Tutarı</p>
          <p className="basket-header__text"></p>
        </div>
        {ProductBasketMaps}
        <div className="basket-footer">
          <div className="basket-footer__total-price">Toplam Tutar: {totalPrice} TL</div>
          <div className="basket-footer__order-buttons">
            <button className="basket-footer__remove-all-item-button" onClick={removeAllItemBasket}>Sepeti Boşalt</button>
            <button className="basket-footer__order-confirmed-button" onClick={orderConfirmed}>Sipariş Ver</button>
          </div>
        </div>
      </>
    );
  }
}

export default Basket;
