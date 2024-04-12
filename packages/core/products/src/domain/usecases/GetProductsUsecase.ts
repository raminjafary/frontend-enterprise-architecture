import { DataError } from '../../../../common/src/domain/DataError';
import { Either } from '../../../../common/src/domain/Either';
import { Product } from '../entities/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export class GetProductsUsecase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  execute(filter: string): Promise<Either<DataError, Product[]>> {
    return this.productRepository.get(filter);
  }
}
