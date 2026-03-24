import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { context } from "../App";

function Product() {
  const { title } = useParams();

  const { data, loading, error } = useContext(context);

  const product = data.find((f) => f.title.split(" ").join("-") === title);
  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }
  if (error) {
    return <h2 className="text-center text-red-500">{error}</h2>;
  }
  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }
  const related = data.filter(
    (v) => v.category === product.category && v.title !== title
  );
  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-xl p-6">
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-96 object-contain"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>

            <p className="text-gray-600">{product.description}</p>

            <p className="text-lg font-semibold text-green-600">
              ₹ {product.price}
            </p>

            <p className="text-sm text-gray-500 capitalize">
              Category: {product.category}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⭐</span>
              <span>{product.rating?.rate}</span>
              <span className="text-gray-500">
                ({product.rating?.count} reviews)
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold">
                Add to Cart
              </button>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <h3 className="text-xl font-bold mb-4">Related Products</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {related.length === 0 ? (
            <p>No related products found</p>
          ) : (
            related.map((v) => {
              return (
                <div className="card shadow-md p-4 rounded" key={v.id}>
                  <img
                    src={v.image}
                    alt={v.title}
                    className="h-40 mx-auto object-contain"
                  />

                  <div className="card-body mt-3">
                    <span className="text-sm text-gray-500">
                      {v.category}
                    </span>

                    <h3 className="font-semibold">
                      {v.title.slice(0, 40)}...
                    </h3>

                    <p className="text-sm text-gray-600">
                      {v.description.slice(0, 90)}...
                    </p>

                    <div className="flex justify-between mt-2">
                      <span className="font-bold">₹ {v.price}</span>
                      <span>⭐ {v.rating?.rate}</span>
                    </div>

                    <Link
                      to={`/product/${v.id}`}
                      className="block mt-3 text-center bg-blue-500 text-white py-1 rounded"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Product;