import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, book) => sum + book.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No items in cart.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow p-4 gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-600 mb-2">₹{item.price}</p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-8">
            <h3 className="text-2xl font-bold">Total: ₹{total}</h3>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => navigate('/home')}
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Cart;



// import React, { useContext } from 'react';
// import { CartContext } from '../context/CartContext';

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const total = cartItems.reduce((sum, book) => sum + book.price, 0);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">Your Shopping Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500 text-lg">No items in cart.</p>
//       ) : (
//         <div className="space-y-6">
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex flex-col sm:flex-row items-center bg-white rounded-lg shadow p-4 gap-4"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-24 h-32 object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h4 className="text-xl font-semibold">{item.title}</h4>
//                 <p className="text-gray-600 mb-2">₹{item.price}</p>
//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           <div className="text-right mt-8">
//             <h3 className="text-2xl font-bold">Total: ₹{total}</h3>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
