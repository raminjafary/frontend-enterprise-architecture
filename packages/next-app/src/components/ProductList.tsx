import { useEffect } from "react";
import ProductItem from "./ProductItem";
import { dependenciesLocator } from "core";
import { usePlocState } from "../common/usePlocState";

const ProductList: React.FC = () => {
    const ploc = dependenciesLocator.provideProductsPloc();
    const state = usePlocState(ploc);

    useEffect(() => {
        const searchProducts = async (filter: string) => {
            ploc.search(filter);
        };

        searchProducts("Element");
    }, [ploc]);

    switch (state.kind) {
        case "LoadingProductsState": {
            return <div>loading...</div>;
        }
        case "ErrorProductsState": {
            return <div>{state.error}</div>;
        }
        case "LoadedProductsState": {
            return (
                <div>
                    <h4>{"Results for "}</h4>

                    <span>{"Element"}</span>
                    <div>
                        {state.products.map((product, index) => (
                            <ProductItem product={product} key={index} />
                        ))}
                    </div>
                </div>
            );
        }
    }
};

export default ProductList;
