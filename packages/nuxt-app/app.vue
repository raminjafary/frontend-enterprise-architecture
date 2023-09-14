<script setup lang="ts">
import { provide } from "vue";
import { dependenciesLocator } from "core";
import AppBar from "./components/AppBar.vue";
import ProductList from "./components/ProductList.vue";
import CartSidebar from "./components/CartSidebar.vue";

provide("cartBloc", dependenciesLocator.provideCartPloc());
</script>

<template>
    <div>
        <AppBar />
        <ProductList search-term="Element" />
        <CartSidebar />
    </div>
</template>
