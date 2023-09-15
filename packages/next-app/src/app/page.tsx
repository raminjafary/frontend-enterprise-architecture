"use client";

import styles from "./page.module.css";
import AppBar from "@/components/AppBar";
import { CartPloc, dependenciesLocator } from "core";
import { createContext } from "@/common/context";
import ProductList from "@/components/ProductList";
import CartDrawer from "@/components/CartDrawer";

const [blocContext, useBlocContext] = createContext<CartPloc>();

export const useCartBloc = useBlocContext;

export default function Home() {
    return (
        <main className={styles.main}>
            <blocContext.Provider value={dependenciesLocator.provideCartPloc()}>
                <AppBar />
                <ProductList />
                <CartDrawer />
            </blocContext.Provider>
        </main>
    );
}
