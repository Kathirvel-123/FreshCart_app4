import React from "react";

export default function CartModal({ isOpen, closeModal, cartItems, removeItem }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-11/12 max-w-lg rounded-xl shadow-xl p-6 animate-fadeIn">
        
       
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={closeModal} className="text-red-600 font-semibold text-lg">
            ✖
          </button>
        </div>

      
        {cartItems.length === 0 ? (
          <p className="text-center py-5 text-gray-600">Cart is empty</p>
        ) : (
          <div className="mt-4 space-y-4 max-h-72 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border rounded-lg p-3 shadow-sm">
                <img src={item.image} className="w-16 h-16 object-contain" />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-bold text-green-700">₹ {item.price}</p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-white bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-4">
          <button
            onClick={closeModal}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
