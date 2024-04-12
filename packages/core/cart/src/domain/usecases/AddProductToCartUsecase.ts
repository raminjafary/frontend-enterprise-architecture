import { DataError } from '../../../../common/src/domain/DataError';
import { Either } from '../../../../common/src/domain/Either';
import { EitherAsync } from '../../../../common/src/domain/EitherAsync';
import { Product } from '../../../../products/src/domain/entities/Product';
import { Cart } from '../entities/Cart';
import { CartRepository } from '../repositories/CartRepository';

export class AddProductToCartUsecase {
  private cartRepository: CartRepository;

  constructor(cartRepository: CartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(product: Product): Promise<Either<DataError, Cart>> {
    const cartResult = EitherAsync.fromPromise(this.cartRepository.get());

    return cartResult
      .flatMap(async cart => {
        const cartItem = {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: 1,
        };

        const editedCart = cart.addItem(cartItem);

        const saveResult = await this.cartRepository.save(editedCart);

        return saveResult.map(() => editedCart);
      })
      .run();
  }
}
