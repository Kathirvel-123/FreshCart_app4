export default function ProductCard({ product, addToCart }) {
  const { title, price, image, category } = product;

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 duration-300 flex flex-col overflow-hidden ">

      <div className="h-48 flex justify-center items-center p-4 bg-gray-50">
        <img 
          className="max-h-full max-w-full object-contain" 
          src={image} 
          alt={title} 
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1" title={title}>
          {title}
        </h2>

        <p className="text-sm text-gray-500 capitalize mb-3">{category}</p>

        <p className="text-xl font-bold text-black mt-auto mb-4">
          {formattedPrice}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-orange-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition duration-150"
        >
           Add to Cart
        </button>
      </div>
    </div>
  );
}
