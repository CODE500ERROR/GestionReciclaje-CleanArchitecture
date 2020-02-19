import { PaymentMethodFile } from './payment-method-file';

export class PaymentMethod {
  paymentMethodId: string;
  description: string;
  isPublic: boolean;
  filesPaymentMethodPublicWeb: Array<PaymentMethodFile>;
}
