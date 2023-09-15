"use client";
import { useCartBloc } from "@/app/page";
import { usePlocState } from "@/common/usePlocState";

const AppBar: React.FC = () => {
    const ploc = useCartBloc();
    const state = usePlocState(ploc);

    const totalItems = state.kind === "UpdatedCartState" ? state.totalItems : 0;

    return (
        <div>
            <button onClick={() => ploc.openCart()}>Cart {totalItems}</button>
        </div>
    );
};

export default AppBar;
