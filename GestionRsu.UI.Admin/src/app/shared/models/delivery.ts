import { DeliveryFile } from './delivery-file';


export class Delivery {
  deliveryPublicWebId: string;
  description: string;
  filesDeliveryPublicWeb: Array<DeliveryFile>;
  isPublic: boolean;
}
