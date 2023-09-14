<script setup lang="ts">
import { CartPloc } from "core";
import { inject } from "vue";
import { useBlocState } from "../common/useBlocState";
import CartContent from "./CartContent.vue";

const cartBloc = inject<CartPloc>("cartBloc") as CartPloc;
const state = useBlocState(cartBloc);

const handleCloseCart = () => {
    cartBloc?.closeCart();
};
</script>
<template>
    <div>
        <div v-if="state.open" position="right" style="width: 400px; padding: 0px">
            <div id="cart-container">
                <div id="header">
                    <button class="p-button-link" @click="handleCloseCart">X</button>
                    <h3>Cart</h3>
                    <h3></h3>
                </div>
                <hr />
                <CartContent />
            </div>
        </div>
    </div>
</template>

<style scoped>
#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 8px 0px 8px;
}

#cart-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
}

h3 {
    margin-right: 16px;
}

.p-button-link {
    margin: 8px 0px;
}
</style>
