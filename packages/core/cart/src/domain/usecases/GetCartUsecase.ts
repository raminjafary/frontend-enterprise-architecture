import { DataError } from '../../../../common/src/domain/DataError';
import { Either } from '../../../../common/src/domain/Either';
import { Cart } from '../entities/Cart';
import { CartRepository } from '../repositories/CartRepository';

export class GetCartUsecase {
  private cartRepository: CartRepository;

  constructor(cartRepository: CartRepository) {
    this.cartRepository = cartRepository;
  }

  execute(): Promise<Either<DataError, Cart>> {
    return this.cartRepository.get();
  }
}
