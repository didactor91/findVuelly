import { createStore } from 'vuex'

import scoreStore from '@/store/modules/score'

export const store = createStore({
  modules: {
    scoreStore,
  },
})

export default store
