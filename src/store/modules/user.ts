import { create } from 'zustand'

interface USER_STORE_TYPE {
  gitHub: string
}
// import { userStore } from '@/store'
const userStore = create<USER_STORE_TYPE>((set) => ({
  gitHub: 'https://github.com/3405008677',
}))

export default userStore
