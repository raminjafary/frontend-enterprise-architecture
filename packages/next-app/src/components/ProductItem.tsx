import React from "react";
import Image from "next/image";
import { Product } from "core";
import { useCartBloc } from "../app/page";

interface ProductListProps {
    product: Product;
}

const ProductItem: React.FC<ProductListProps> = ({ product }) => {
    const bloc = useCartBloc();

    return (
        <div>
            <Image priority src={product.image} alt="''" width={300} height={300} />
            <div>
                <h3>{product.title}</h3>
                <p>
                    {product.price.toLocaleString("es-ES", {
                        style: "currency",
                        currency: "EUR",
                    })}
                </p>
                <button onClick={() => bloc.addProductToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;
