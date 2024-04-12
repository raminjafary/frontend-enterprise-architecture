import {
  AddProductToCartUsecase,
  CartInMemoryRepository,
  CartPloc,
  EditQuantityOfCartItemUsecase,
  GetCartUsecase,
  RemoveItemFromCartUsecase,
} from '../../../cart/src';
import { ProductInMemoryRepository, ProductsPloc } from '../../../products/src';
import { GetProductsUsecase } from '../../../products/src';

function provideProductsPloc(): ProductsPloc {
  const productRepository = new ProductInMemoryRepository();
  const getProductsUsecase = new GetProductsUsecase(productRepository);
  const productsPloc = new ProductsPloc(getProductsUsecase);

  return productsPloc;
}

function provideCartPloc(): CartPloc {
  const cartRepository = new CartInMemoryRepository();
  const getCartUsecase = new GetCartUsecase(cartRepository);
  const addProductToCartUsecase = new AddProductToCartUsecase(cartRepository);
  const removeItemFromCartUsecase = new RemoveItemFromCartUsecase(
    cartRepository,
  );
  const editQuantityOfCartItemUsecase = new EditQuantityOfCartItemUsecase(
    cartRepository,
  );
  const cartPloc = new CartPloc(
    getCartUsecase,
    addProductToCartUsecase,
    removeItemFromCartUsecase,
    editQuantityOfCartItemUsecase,
  );

  return cartPloc;
}

export const dependenciesLocator = {
  provideProductsPloc,
  provideCartPloc,
};
