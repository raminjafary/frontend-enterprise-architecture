import React from "react";
import CartContentItem from "./CartContentItem";
import { CartItemState } from "core";
import { useCartBloc } from "../app/page";
import { useBlocState } from "../common/useBlocState";

const CartContent: React.FC = () => {
    const ploc = useCartBloc();
    const state = useBlocState(ploc);

    const cartItems = (items: CartItemState[]) => (
        <li>
            {items.map((item, index) => (
                <CartContentItem key={index} cartItem={item} />
            ))}
        </li>
    );

    const emptyCartItems = () => (
        <React.Fragment>
            <h5>Empty Cart :(</h5>
        </React.Fragment>
    );

    switch (state.kind) {
        case "LoadingCartState": {
            return <div>loading...</div>;
        }
        case "ErrorCartState": {
            return (
                <div>
                    <h4>{state.error}</h4>
                </div>
            );
        }
        case "UpdatedCartState": {
            return (
                <React.Fragment>
                    <div>{state.items.length > 0 ? cartItems(state.items) : emptyCartItems()}</div>
                    <hr />
                    <div>
                        <span>Total Price</span>
                        <span>{state.totalPrice}</span>
                    </div>
                </React.Fragment>
            );
        }
    }
};

export default CartContent;
