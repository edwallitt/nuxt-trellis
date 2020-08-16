import EventService from '@/services/EventService.js'

export const state = () => ({
  events: [],
  event: {},
})

export const mutations = {
  SET_EVENT(state, event) {
    state.event = event
  },
}

export const actions = {
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then(function (response) {
      commit('SET_EVENT', response.data)
    })
  },
}
