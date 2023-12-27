import { useGetAllProductsQuery } from "../features/productsApi";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";

const ProductDescription = () => {
  const { productId } = useParams();
  const { data } = useGetAllProductsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const product = data?.find((p) => p.id === Number(productId));

  if (!product) {
    return <p>Product not found</p>;
  }

  // console.log(product);

  return (
    <div className="desc-page">
      <div className="product-description" key={product.id}>
        <div className="img-btn">
          <div className="product-img">
            <img src={product.img} alt={product.name} />
          </div>
        </div>
        <div className="item-details">
          <h3>{product.name}</h3>
          <h2>${product.price}</h2>
          <div className="highlights">
            <ul>
              <li>{product.memory}</li>
              <li>{product.display}</li>
              <li>{product.camera}</li>
              <li>{product.processor}</li>
            </ul>
          </div>
          <div className="add-to-cart-btn">
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="continue-shopping">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductDescription;
