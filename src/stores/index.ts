import UserStore from './user'

const stores = {
  user: new UserStore(),
}

export type Stores = typeof stores

export default stores
