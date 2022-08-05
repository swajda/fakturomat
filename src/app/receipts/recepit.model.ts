export class Recepit {
  public sellerName: string;
  public buyerName: string;
  public recepitNumber: string

  constructor (sellerName: string, buyerName: string, recepitNumber: string) {
    this.sellerName = sellerName;
    this.buyerName = buyerName;
    this.recepitNumber = recepitNumber;
  }
}
