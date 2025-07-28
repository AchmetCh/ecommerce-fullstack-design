// // src/components/pages/Cart.jsx

// import React from 'react';
// import { createOrder } from '../services/api';

// const Cart = ({ cartItems, onAdd, onRemove }) => {
//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
//   };

//   const handleCheckout = async () => {
//     const order = {
//       products: cartItems.map(item => ({
//         product: item._id,
//         quantity: item.quantity,
//       })),
//       total: getTotalPrice(),
//     };
//     try {
//       await createOrder(order);
//       alert('Order placed successfully!');
//     } catch (error) {
//       alert('Failed to place order.');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-lg">{item.name}</h3>
//                     <p className="text-gray-500">${item.price.toFixed(2)}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={() => onRemove(item)}
//                     className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
//                   >
//                     -
//                   </button>
//                   <span className="font-semibold">{item.quantity}</span>
//                   <button
//                     onClick={() => onAdd(item)}
//                     className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <div className="font-bold text-blue-600">
//                   ${(item.price * item.quantity).toFixed(2)}
// </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-right mt-8">
//             <h3 className="text-xl font-semibold">
//               Total: ${getTotalPrice()}
//             </h3>
//             <button
//               onClick={handleCheckout}
//               className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//             >
//               Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


