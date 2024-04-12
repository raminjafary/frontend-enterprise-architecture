import { CartItem } from '../../../domain';
import { RemoteCartEntity } from '../entitiy/InMemeoryCartEntity';

export function toDomain(remoteCartEntity: RemoteCartEntity): CartItem {
  return {
    id: remoteCartEntity.id,
    image: remoteCartEntity.image,
    title: remoteCartEntity.title,
    price: remoteCartEntity.price,
    quantity: remoteCartEntity.quantity,
  };
}
