import React from "react";
import CartContent from "./CartContent";
import { useCartBloc } from "../app/page";
import { usePlocState } from "../common/usePlocState";

const CartDrawer: React.FC = () => {
    const ploc = useCartBloc();
    const state = usePlocState(ploc);

    const jsx = state.open ? (
        <div>
            <button onClick={() => ploc.closeCart()}>X</button>
            <div>
                <h4>Cart</h4>
            </div>
            <hr />
            <CartContent />
        </div>
    ) : (
        ""
    );

    return jsx;
};

export default CartDrawer;
