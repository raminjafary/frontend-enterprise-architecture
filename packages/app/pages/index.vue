<script setup lang="ts">
  import { provide } from 'vue';
  import { CartSidebar } from '@main/cart';
  import AppBar from '~/components/islands/AppBar.vue';
  import { ProductList } from '@main/product';
  import { dependenciesLocator } from '@core/common';

  provide('cartBloc', dependenciesLocator.provideCartPloc());
</script>

<template>
  <div>
    <NuxtIsland name="AppBar" lazy />

    <ProductList search-term="Element" />

    <CartSidebar />
  </div>
</template>
