import axios from 'axios'

 export class Users {
  static _url = 'users.json'
  static getUsers=async()=>{
   return await axios.get(this._url)
  }
}

