import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
  render() {
    const { productList, calculateProductPiece, onChangeInput, addItemBasket } = this.props;

    let ProductMenuMaps = productList.map((food) =>
      <div className="product-menu" key={food.name}>
        <img className="product-menu__image" src={food.image} alt="backgroundImage" />
        <div className="product-menu__name">{food.name}</div>
        <div className="product-menu__piece-buttons">
          <button disabled={food.piece === 0} onClick={() => calculateProductPiece(food.name, (food.piece - 1))}>-</button>
          <input className="product-menu__piece" type="number" name={food.name} onChange={onChangeInput} value={food.piece} placeholder="Piece"></input>
          <button onClick={() => calculateProductPiece(food.name, (food.piece + 1))}>+</button>
        </div>
        <button disabled={food.piece <= 0} className="product-menu__add-button" onClick={() => addItemBasket(food.name)}>Sepete Ekle</button>
        <div className="product-menu__price">{food.price} TL</div>
      </div>
    )

    return (
      <>
        {ProductMenuMaps}
      </>
    );
  }
}

export default Menu;
