import React, { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((qwe) => {
        setData(qwe);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Products</h2>
      {data.map((item) => (
        <div key={item.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} width="100" />
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Data;