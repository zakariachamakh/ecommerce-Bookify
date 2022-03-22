import React from "react";
import "./ecommerceCard.css";
import { useWishlistContext, useAuthContext } from "../../contexts";
import { addToWishlist, deleteFromWishlist } from "../../helpers";

function ProductCard({ product }) {
	const { wishList, setWishList } = useWishlistContext();
	const { authState } = useAuthContext();
	const { token } = authState;

	return (
		<div className="card__ecommerce">
			<div className="card__badge">
				{wishList.find((wishlistItem) => wishlistItem._id === product._id) ? (
					<i
						className="fas fa-heart fa-2x"
						onClick={() => deleteFromWishlist(product._id, setWishList, token)}
					></i>
				) : (
					<i
						className="far fa-heart fa-2x"
						onClick={() => addToWishlist(product, setWishList, token)}
					></i>
				)}
			</div>
			<img className="card__image" src={product.image} alt={product.title} />
			<div className="card__titles">
				<h2>{product.title}</h2>
				<p>{product.author}</p>
			</div>
			<div className="card__price">
				<div className="current__price">
					<i className="fas fa-rupee-sign fa-1x"></i>
					<span>{product.price}</span>
				</div>
				<div className="previous__price">
					<i className="fas fa-rupee-sign fa-1x"></i>
					<span>{product.previousPrice}</span>
				</div>
				<div className="static__rating">
					<p>{product.rating}</p>
					<i className="fas fa-star rating__icon"></i>
				</div>
			</div>
			<button className="card__button-ecom">Add to cart</button>
		</div>
	);
}

export { ProductCard };
