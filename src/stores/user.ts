import { makeAutoObservable } from 'mobx'

class User {
  /** 是否已登录 */
  isLoggedIn: boolean | null = null

  /** 是否已注册 */
  isRegistered: boolean | null = null

  constructor() {
    makeAutoObservable(this)
  }

  register() {
    // TODO
    return this
  }

  login() {
    return this
    // TODO
  }
}

export default User
