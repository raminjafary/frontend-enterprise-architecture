import { DataError } from '../../../../common/src/domain/DataError';
import { Either } from '../../../../common/src/domain/Either';
import { Cart } from '../entities/Cart';

export interface CartRepository {
  get(): Promise<Either<DataError, Cart>>;
  save(cart: Cart): Promise<Either<DataError, boolean>>;
}
