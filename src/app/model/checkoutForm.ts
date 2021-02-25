export class CheckoutForm{
  constructor(
    public username: string,
    public product: string,
    public items: number,
    public dateOfPurchase ?: Date
  ) {
  }
}
