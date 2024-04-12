<script setup lang="ts">
  import { provide } from 'vue';
  import { AppBar } from '@main/cart';
  import { dependenciesLocator } from '@core/common';

  provide('cartBloc', dependenciesLocator.provideCartPloc());
</script>

<template>
  <AppBar />
</template>
