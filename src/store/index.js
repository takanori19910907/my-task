import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')
const store = new Vuex.Store({
// Vue全体で使用する変数を定義し、任意の場所から呼び出して使用出来るようにする
state: {
  lists: savedLists ? JSON.parse(savedLists): [
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },

    // 非同期通信の実行などをここで定義する
    actions: {
      addlist(context, payload) {
        context.commit('addlist', payload)
      },
      removelist(context, payload) {
        context.commit('removelist', payload)
      },
      addCardToList(context, payload) {
        context.commit('addCardToList', payload)
      },
    },
  // mutations(stateの値を変更する処理)を実行する条件を指定する
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({body: payload.body})
    },
  },
  // 本来computedとして行う計算処理を定義し、処理を任意の場所で使用できるようにする
  getters: {
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
