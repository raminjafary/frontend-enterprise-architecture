import React, { Key } from "react";
import { useCartBloc } from "../app/page";
import { CartItemState } from "core";
import Image from "next/image";

interface CartProps {
    key: Key;
    cartItem: CartItemState;
}

const CartContentItem: React.FC<CartProps> = ({ cartItem }) => {
    const bloc = useCartBloc();

    return (
        <React.Fragment>
            <ul>
                <li>
                    <Image
                        priority
                        width={80}
                        height={80}
                        src={cartItem.image}
                        alt={cartItem.title}
                    />
                    <div>
                        <h3>{cartItem.title}</h3>
                        <div>
                            <input
                                type="number"
                                value={cartItem.quantity}
                                onChange={event =>
                                    bloc.editQuantityCartItem(cartItem, +event.target.value)
                                }
                            />
                            <span>{cartItem.price}</span>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => bloc.removeCartItem(cartItem)}>delete</button>
                    </div>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default CartContentItem;
