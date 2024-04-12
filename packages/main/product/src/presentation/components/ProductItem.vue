<script setup lang="ts">
  import type { CartPloc } from '@core/cart';
  import { inject, computed } from 'vue';

  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });

  const productsPloc = inject<CartPloc>('cartBloc');

  const handleAddToCart = () => {
    productsPloc?.addProductToCart({ ...props });
  };

  const product = computed(() => ({
    ...props,
    price: props.price.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR',
    }),
  }));
</script>

<template>
  <div style="width: 200px; height: 400px">
    <div
      id="product-image"
      :style="{ backgroundImage: 'url(' + product.image + ')' }"
    ></div>
    <h2 id="product-title">{{ product.title }}</h2>
    <p id="product-price">
      {{ product.price }}
    </p>
    <button @click="handleAddToCart">Add to Cart</button>
  </div>
</template>

<style scoped>
  .p-card-header {
    padding: 8px;
  }

  #product-image {
    padding-top: 100%;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center;
  }

  #product-title {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 50px;
    margin: 0;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5;
  }

  #product-price {
    text-align: center;
    margin: 16px 0 0;
    font-weight: 500;
    line-height: 1.6;
    font-size: 1.3rem;
  }

  .p-card-footer {
    padding: 0;
  }

  #add-to-cart {
    margin: 0 auto;
    display: block;
  }
</style>
