<script setup lang="ts">
  import { inject } from 'vue';
  import { type CartPloc } from '@core/cart';
  import { usePlocState } from '@lib/vue-ploc';

  const cartBloc = inject<CartPloc>('cartBloc') as CartPloc;
  const state = usePlocState(cartBloc);

  const handleOpenCart = () => {
    cartBloc?.openCart();
  };
</script>

<template>
  <button @click="handleOpenCart">
    Cart {{ state.totalItems ? state.totalItems.toString() : '0' }}
  </button>
</template>
