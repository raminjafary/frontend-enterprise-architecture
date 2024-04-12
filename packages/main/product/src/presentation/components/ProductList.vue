<script setup lang="ts">
  import { onMounted } from 'vue';
  import { usePlocState } from '../../../../../lib/vue-ploc/src';
  import ProductItem from './ProductItem.vue';
  import { dependenciesLocator } from '@core/common';

  const props = defineProps({
    searchTerm: {
      type: String,
      required: true,
    },
  });

  const ploc = dependenciesLocator.provideProductsPloc();
  const state = usePlocState(ploc);

  onMounted(() => {
    ploc.search(props.searchTerm);
  });
</script>

<template>
  <div>
    <div v-if="state.kind === 'LoadingProductsState'" id="info-container">
      loading...
    </div>
    <div v-if="state.kind === 'ErrorProductsState'" id="info-container">
      Error
    </div>
    <div id="products-container" idv-if="state.kind === 'LoadedProductsState'">
      <h2>Results for "{{ state.searchTerm }}"</h2>

      <div class="p-grid">
        <div
          v-for="product in state.products"
          :key="product.id"
          class="p-col-6 p-md-4 p-lg-3 p-xl-2"
        >
          <ProductItem v-bind="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #products-container {
    padding: 16px;
  }

  #info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
