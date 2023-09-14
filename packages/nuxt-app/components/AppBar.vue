<script setup lang="ts">
import { inject } from "vue";
import { CartPloc } from "core";
import { useBlocState } from "../common/useBlocState";

const cartBloc = inject<CartPloc>("cartBloc") as CartPloc;
const state = useBlocState(cartBloc);

const handleOpenCart = () => {
    cartBloc?.openCart();
};
</script>

<template>
    <button @click="handleOpenCart">
        Cart {{ state.totalItems ? state.totalItems.toString() : "0" }}
    </button>
</template>
