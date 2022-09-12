import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item" data-test id="cartItem">
          <div className="cart-item-info" data-test id="cartItem">
            <img src={imageUrl} alt={name} className="cart-item-image" />
            <h1 className="cart-item-desktop-name">{name}</h1>
          </div>
          <div className="cart-qty-price-cont" data-test id="cartItem">
            <h1 className="cart-item-mobile-name">{name}</h1>
            <div className="cart-qty-container">
              <button
                data-test
                id="decrement-quantity"
                className="decrement-quantity"
                type="button"
                onClick={decreaseQuantity}
              >
                <BsDashSquare size={16} />
              </button>
              <p data-test id="item-quantity" className="item-quantity">
                {quantity}
              </p>
              <button
                data-test
                id="increment-quantity"
                className="increment-quantity"
                type="button"
                onClick={increaseQuantity}
              >
                <BsPlusSquare size={16} />
              </button>
            </div>
            <p className="price" data-test id="total-price">
              <FaRupeeSign size={12} /> {cost * quantity}
            </p>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
