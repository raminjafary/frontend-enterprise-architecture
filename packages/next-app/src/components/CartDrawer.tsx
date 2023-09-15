import React from "react";
import CartContent from "./CartContent";
import { useCartBloc } from "../app/page";
import { useBlocState } from "../common/useBlocState";

const CartDrawer: React.FC = () => {
    const ploc = useCartBloc();
    const state = useBlocState(ploc);

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
