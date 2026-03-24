import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../App";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function About() {
  const { data, loading, error } = useContext(context);

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ✅ Reset page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  if (loading) return <div className="loader"></div>;
  if (error) return <h2 className="status error">{error}</h2>;

  // ✅ Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="container">
      {/* ✅ Products */}
      {currentItems.map((v) => {
        const { id, title, price, description, category, image, rating } = v;
        return (
          <div className="card" key={id}>
            <LazyLoadImage
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
              src={image}
              alt={title}
            />

            <div className="card-body">
              <span className="category">{category}</span>

              <h3 title={title}>{title.slice(0, 40)}...</h3>

              <p className="desc">{description.slice(0, 90)}...</p>

              <div className="info">
                <span className="price">₹ {price}</span>
                <span className="rating">⭐ {rating.rate}</span>
              </div>

              <Link to={`/product/${title.split(" ").join("-")}`}>
                View Product
              </Link>
            </div>
          </div>
        );
      })}

      {/* ✅ Pagination Controls */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default About;