export default class User {

  // In the example below, the @param {string} will now show you the name of the properties and their expected types when you create a new entry for a product.
  // model somewhere else such as in the index file. The @return {} below will enable this.
  /**
   * @param {string} id 
   * @param {string} name
   * @param {string} price
   * @param {Array.string} images
   */

  constructor({ id, name, price, images }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.images = images;
  }

  /**
   * @return {string}
   */

  getId = () => this.id;

  /**
   * @return {string}
   */

  getName = () => this.name;

  /**
   * @return {string}
   */

  getprice = () => this.price;

  /**
    * @return {string}
    */

  getimages = () => this.images;

  /**
    * @return {string}
    */

  getData = () => ({
    id: this.id,
    name: this.name,
    price: this.price,
    images: this.images,

  })
}