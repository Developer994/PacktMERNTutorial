export default class User {

  // In the example below, the @param {string} will now show you the name of the properties and their expected types when you create a new user 
  // model somewhere else such as in the index file. The @return {} below will enable this.
  /**
   * @param {string} id 
   * @param {string} username
   * @param {string} email
   * @param {string} role
   */

  constructor({ id, username, email, role }) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role;
  }

  /**
   * @return {string}
   */

  getId = () => this.id;

  /**
   * @return {string}
   */

  getUsername = () => this.username;

  /**
   * @return {string}
   */

  getEmail = () => this.email;

  /**
    * @return {string}
    */

  getRole = () => this.role;

  /**
    * @return {string}
    */

  getData = () => ({
    id: this.id,
    username: this.username,
    email: this.email,
    role: this.role,

  })
}