import { DataError } from '../../../../common/src/domain/DataError';
import { Either } from '../../../../common/src/domain/Either';
import { Product } from '../entities/Product';

export interface ProductRepository {
  get(filter: string): Promise<Either<DataError, Product[]>>;
}
