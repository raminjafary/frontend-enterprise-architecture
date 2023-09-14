<script setup lang="ts">
import { CartPloc } from "core";
import { inject, ref } from "vue";

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
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const cartBloc = inject<CartPloc>("cartBloc");

const handleQuantityChange = (e: { target: HTMLInputElement }) => {
    cartBloc?.editQuantityCartItem({ ...props }, +e.target.value);
};

const handleRemoveItem = () => {
    cartBloc?.removeCartItem({ ...props });
};

const item = ref({ ...props });
</script>

<template>
    <div id="card" style="margin: 8px">
        <div class="item-container">
            <img class="item-image" width="80" :src="item.image" :alt="item.title" />
            <div class="middle-container">
                {{ item.title }}

                <div class="quantity-price-container">
                    <div class="quantity-container">
                        <label for="vertical" style="display: block; margin-bottom: 8px"
                            >Quantity</label
                        >
                        {{ item.quantity }}
                        <input
                            :modelValue="item.quantity"
                            inputStyle="width: 30px"
                            @input="handleQuantityChange"
                        />
                    </div>
                    <div class="p-text-italic price">{{ item.price }}</div>
                </div>
            </div>

            <button class="p-button-link" @click="handleRemoveItem">X</button>
        </div>
    </div>
</template>

<style scoped>
h4 {
    margin: 0px;
}
#card {
    margin: 8px 0px;
}
.item-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 0px;
    justify-content: space-around;
}
.item-image {
    padding: 0px 8px;
    background-size: auto 100%;
}
.middle-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.quantity-price-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.p-inputtext {
    width: 50px !important;
}
.quantity-container {
    width: 40px;
    margin: 8px;
}
.price {
    margin-top: 8px;
}
</style>
