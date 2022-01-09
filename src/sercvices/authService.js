import axios from 'axios'

export class Users {
  static _url = 'users.json'
  static getUsers() {
    return new Promise(resolve => {
      setTimeout(async() => {
        resolve(await axios.get(this._url))
      }, 2000);
    })
  }

}
