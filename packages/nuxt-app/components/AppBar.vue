<script setup lang="ts">
import { inject } from "vue";
import { CartPloc } from "core";
import { usePlocState } from "../common/usePlocState";

const cartBloc = inject<CartPloc>("cartBloc") as CartPloc;
const state = usePlocState(cartBloc);

const handleOpenCart = () => {
    cartBloc?.openCart();
};
</script>

<template>
    <button @click="handleOpenCart">
        Cart {{ state.totalItems ? state.totalItems.toString() : "0" }}
    </button>
</template>
