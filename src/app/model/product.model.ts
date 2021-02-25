export  class Product {
  public name: string;
  public cost: number;
  public imagePath: string;
  public discount: string;

  constructor(name: string, cost: number, imagePath: string, discount: string) {
    this.name = name;
    this.cost = cost;
    this.imagePath = imagePath;
    this.discount = discount;
  }
}
