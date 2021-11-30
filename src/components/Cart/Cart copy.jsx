// import React, { useContext } from "react";
// import "./cart.css";
// import QuantityButton from "../Button/QuantityButton";
// import Button from "../Button/Button";
// import { ModalContext } from "../context/modalContext";
// import { sumCart } from "../helpers";
// import "animate.css";

// export default function Cart(props) {
//   const { cart, onRemoveAllProducts, onUpdateCart } = props;
//   const context = useContext(ModalContext);
//   const total = sumCart(cart);

//   if (context.isShowing.cart)
//     return (
//       <>
//         <div
//           onClick={() => context.toggleModal("cart")}
//           className="cart-mask animate__animated animate__fadeIn"
//         ></div>
//         <div className="cart animate__animated animate__fadeIn">
//           <div className="cart__quantity-control">
//             <p className="cart__quantity-control--display">{`Cart (${cart.length})`}</p>
//             <p
//               className="cart__quantity-control--remove"
//               onClick={() => onRemoveAllProducts(cart)}
//             >
//               Remove all
//             </p>
//           </div>
//           <div className="cart__items">
//             {cart.map((product, index) => {
//               return (
//                 <div key={index} className="cart__item">
//                   <img
//                     className="cart__item--image"
//                     src={product.image.cart}
//                     alt={`${product.name} ${product.category}`}
//                   />
//                   <div>
//                     <p className="cart__item--product-name">
//                       {product.shortName}
//                     </p>
//                     <p className="cart__item--price">{`€ ${product.price}`} </p>
//                   </div>
//                   <QuantityButton
//                     data-index={index}
//                     onProductQuantityChange={onUpdateCart}
//                     style={{ maxWidth: "96px", maxHeight: "32px" }}
//                   >
//                     {product.quantity}
//                   </QuantityButton>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="cart__total">
//             <p className="cart__total--title">Total:</p>
//             <p className="cart__total--price">{`€ ${total}`}</p>
//           </div>
//           <Button
//             onClick={() => context.toggleModal("cart")}
//             linkTo="/checkout"
//             style={{ width: "100%" }}
//             backgroundColor="orange"
//           >
//             Checkout
//           </Button>
//         </div>
//       </>
//     );
//   else return null;
// }
