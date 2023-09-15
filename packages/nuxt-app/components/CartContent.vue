<script setup lang="ts">
import { inject } from "vue";
import { CartPloc } from "core";
import { usePlocState } from "../common/usePlocState";
import CartContenttItem from "./CartContenttItem.vue";

const ploc = inject<CartPloc>("cartBloc") as CartPloc;
const state = usePlocState(ploc);
</script>

<template>
    <div>
        <div v-if="state.kind === 'LoadingCartState'" id="info-container">loading...</div>
        <div v-if="state.kind === 'ErrorCartState'" id="info-container">Error</div>
        <div v-if="state.kind === 'UpdatedCartState'" id="items-container">
            <div v-if="state.items.length > 0" style="max-height: 650px; overflow: scroll">
                <div v-for="item in state.items" :key="item.id">
                    <CartContenttItem v-bind="item" />
                </div>
            </div>
            <h2 v-if="state.items.length === 0">Empty Cart :(</h2>
        </div>
        <hr />
        <div id="total-price-container">
            <h3>Total Price</h3>
            <h3>{{ state.totalPrice }}</h3>
        </div>
    </div>
</template>

<style scoped>
#info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
#items-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 150px;
    justify-content: space-around;
}
#total-price-container {
    display: flex;
    align-items: center;
    padding: 8px 0px;
    justify-content: space-around;
}
</style>
