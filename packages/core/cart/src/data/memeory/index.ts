import { DataError } from '../../../../common/src/domain/DataError';
import { Either } from '../../../../common/src/domain/Either';
import { Cart } from '../../domain/entities/Cart';
import { CartRepository } from '../../domain/repositories/CartRepository';

export class CartInMemoryRepository implements CartRepository {
  cart = new Cart([
    {
      id: '1',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71Y1S1m-QAL._AC_UY879_.jpg',
      title: 'Element Blazin LS tee Shirt, Hombre',
      price: 19.95,
      quantity: 3,
    },
    {
      id: '3',
      image:
        'https://m.media-amazon.com/images/I/81ZYZ9yl1hL._AC_UL640_FMwebp_QL65_.jpg',
      title: 'Element Skater Backpack Mohave 15" Saison ',
      price: 52.45,
      quantity: 1,
    },
  ]);

  get(): Promise<Either<DataError, Cart>> {
    // eslint-disable-next-line
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        try {
          resolve(Either.right(this.cart));
          // eslint-disable-next-line
        } catch (error: any) {
          resolve(Either.left({ kind: 'UnexpectedError', error }));
        }
      }, 100);
    });
  }

  save(cart: Cart): Promise<Either<DataError, boolean>> {
    // eslint-disable-next-line
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        try {
          this.cart = cart;
          resolve(Either.right(true));
          // eslint-disable-next-line
        } catch (error: any) {
          resolve(Either.left({ kind: 'UnexpectedError', error }));
        }
      }, 100);
    });
  }
}
